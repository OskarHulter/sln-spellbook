---
title: Fzf fuzzy finder
description: A guide in my new Starlight docs site.
---

## Usage

fzf will launch interactive finder, read the list from STDIN, and write the selected item to STDOUT.

find * -type f | fzf > selected
Without STDIN pipe, fzf will traverse the file system under the current directory to get the list of files.

vim $(fzf)

## Note

You can override the default behavior

Either by setting $FZF_DEFAULT_COMMAND to a command that generates the desired list
Or by setting --walker, --walker-root, and --walker-skip options in $FZF_DEFAULT_OPTS
Warning

A more robust solution would be to use xargs but we've presented the above as it's easier to grasp

fzf --print0 | xargs -0 -o vim

Fuzzy completion for bash and zsh
Files and directories
Fuzzy completion for files and directories can be triggered if the word before the cursor ends with the trigger sequence, which is by default **.

<!-- COMMAND [DIRECTORY/][FUZZY_PATTERN]**TAB -->

```sh
# Files under the current directory
# - You can select multiple items with TAB key
vim **<TAB>

# Files under parent directory
vim ../**<TAB>

# Files under parent directory that match `fzf`
vim ../fzf**<TAB>

# Files under your home directory
vim ~/**<TAB>


# Directories under current directory (single-selection)
cd **<TAB>

# Directories under ~/github that match `fzf`
cd ~/github/fzf**<TAB>
# Process IDs
# Fuzzy completion for PIDs is provided for kill command.

# Can select multiple processes with <TAB> or <Shift-TAB> keys
kill -9 **<TAB>
# Host names
# For ssh and telnet commands, fuzzy completion for hostnames is provided. The names are extracted from /etc/hosts and ~/.ssh/config.

ssh **<TAB>
telnet **<TAB>
# Environment variables / Aliases
unset **<TAB>
export **<TAB>
unalias **<TAB>
# Settings
# Use ~~ as the trigger sequence instead of the default **
export FZF_COMPLETION_TRIGGER='~~'

# Options to fzf command
export FZF_COMPLETION_OPTS='--border --info=inline'

# Use fd (https://github.com/sharkdp/fd) for listing path candidates.
# - The first argument to the function ($1) is the base path to start traversal
# - See the source code (completion.{bash,zsh}) for the details.
_fzf_compgen_path() {
  fd --hidden --follow --exclude ".git" . "$1"
}

# Use fd to generate the list for directory completion
_fzf_compgen_dir() {
  fd --type d --hidden --follow --exclude ".git" . "$1"
}

# Advanced customization of fzf options via _fzf_comprun function
# - The first argument to the function is the name of the command.
# - You should make sure to pass the rest of the arguments to fzf.
_fzf_comprun() {
  local command=$1
  shift

  case "$command" in
    cd)           fzf --preview 'tree -C {} | head -200'   "$@" ;;
    export|unset) fzf --preview "eval 'echo \$'{}"         "$@" ;;
    ssh)          fzf --preview 'dig {}'                   "$@" ;;
    *)            fzf --preview 'bat -n --color=always {}' "$@" ;;
  esac
}
```

## Interactive ripgrep integration

The following example uses fzf as the selector interface for ripgrep. We bound reload action to change event, so every time you type on fzf, the ripgrep process will restart with the updated query string denoted by the placeholder expression {q}. Also, note that we used --disabled option so that fzf doesn't perform any secondary filtering.

```sh
: | rg_prefix='rg --column --line-number --no-heading --color=always --smart-case' \
    fzf --bind 'start:reload:$rg_prefix ""' \
        --bind 'change:reload:$rg_prefix {q} || true' \
        --bind 'enter:become(vim {1} +{2})' \
        --ansi --disabled \
        --height=50% --layout=reverse
        
fzf --preview 'bat --color=always {}' --preview-window '~3'

# 1. Update the list of processes by pressing CTRL-R
ps -ef |
  fzf --bind 'ctrl-r:reload(ps -ef)' \
      --header 'Press CTRL-R to reload' --header-lines=1 \
      --height=50% --layout=reverse
      
# 2. Switch between sources by pressing CTRL-D or CTRL-F
FZF_DEFAULT_COMMAND='find . -type f' \
  fzf --bind 'ctrl-d:reload(find . -type d),ctrl-f:reload(eval "$FZF_DEFAULT_COMMAND")' \
      --height=50% --layout=reverse

fzf --bind 'enter:become(vim {})'

fzf --multi --bind 'enter:become(vim {+})'

export FZF_DEFAULT_OPTS='--height 40% --layout=reverse --border'

```

## Tips

Respecting .gitignore
You can use fd, ripgrep, or the silver searcher to traverse the file system while respecting .gitignore.

```sh
# Feed the output of fd into fzf
fd --type f --strip-cwd-prefix | fzf

# Setting fd as the default source for fzf
export FZF_DEFAULT_COMMAND='fd --type f --strip-cwd-prefix'

# Now fzf (w/o pipe) will use the fd command to generate the list
fzf

# To apply the command to CTRL-T as well
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
```

```sh

# Press F1 to open the file with less without leaving fzf
# Press CTRL-Y to copy the line to clipboard and aborts fzf (requires pbcopy)
fzf --bind 'f1:execute(less -f {}),ctrl-y:execute-silent(echo {} | pbcopy)+abort'

```

```sh

# Open the file in Vim and go to the line
git grep --line-number . |
    fzf --delimiter : --nth 3.. --bind 'enter:become(nvim {1} +{2})'

```

If you want the command to follow symbolic links and don't want it to exclude hidden files, use the following command:

```sh

export FZF_DEFAULT_COMMAND='fd --type f --strip-cwd-prefix --hidden --follow --exclude .git'

```

fzf Theme Playground
fzf Theme Playground created by Vitor Mello is a webpage where you can interactively create fzf themes.

## Log tailing

fzf can run long-running preview commands and render partial results before completion. And when you specify follow flag in --preview-window option, fzf will "tail -f" the result, automatically scrolling to the bottom.

```sh
# With "follow", preview window will automatically scroll to the bottom.
# "\033[2J" is an ANSI escape sequence for clearing the screen.
# When fzf reads this code it clears the previous preview contents.
fzf --preview-window follow --preview 'for i in $(seq 100000); do
  echo "$i"
  sleep 0.01
  (( i % 300 == 0 )) && printf "\033[2J"
done'
```

## fzf-tmux script

fzf-tmux is a bash script that opens fzf in a tmux pane.

```sh
# usage: fzf-tmux [LAYOUT OPTIONS] [--] [FZF OPTIONS]

# See available options
fzf-tmux --help

# select git branches in horizontal split below (15 lines)
git branch | fzf-tmux -d 15

# select multiple words in vertical split on the left (20% of screen width)
cat /usr/share/dict/words | fzf-tmux -l 20% --multi --reverse
```
