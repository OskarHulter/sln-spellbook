---
title: Zsh config partials
description: A guide in my new Starlight docs site.
---

## plugins

```sh
git clone https://github.com/nmap/nmap ~/home/user/tools/nmap --single-branch --branch <main> --depth 1
git clone https://github.com/junegunn/fzf-git.sh.git ~/home/user/.config/fzf-git --single-branch --branch <main> --depth 1
git clone https://github.com/olets/zsh-abbr ~/home/user/.config/zsh-plugins/zsh-abbr --single-branch --branch <main> --depth 1
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting ~/home/user/.config/zsh-plugins/fsh --single-branch --branch <main> --depth 1
source ~/home/user/.config/zsh-plugins/zsh-abbr/zsh-abbr.zsh
source ~/home/user/.config/zsh-plugins/fsh/fast-syntax-highlighting.plugin.zsh
source ~/home/user/tools/security/nmap
exec zsh

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

git: cd ~/.fzf && git pull && ./install
brew: brew update; brew upgrade fzf

## flags

```sh
# shell config file, likely ~/.zshrc
alias e=echo
alias -g hw="hello world"

abbr list-commands

abbr import-aliases [<TYPE>] [--dry-run] [(--quiet | --quieter)] [(-f | --force)]
abbr [(git | g)] [<SCOPE>] [--dry-run] [(--quiet | --quieter)] [(-f | --force)] ABBREVIATION=EXPANSION

which abbr


```

## aliases

```sh
#!/bin/sh

# linux alternatives
alias cp='cp -iv'
alias mv='mv -iv'
alias rm='rm -iv'

# alias la='ls -alh'
alias ll='ls -al'
alias ll='ls -l'
alias la='ls -A'
alias l='ls -lrtha'

# edit config files
alias zc="code ~/.zshrc"
alias zca="code ~/.config/zsh/aliases"
alias zce="code ~/.zshenv"

alias zshrc="zed ~/.zshrc"
alias zshalias="zed ~/.config/zsh/aliases"
alias zshenv="zed ~/.zshenv"

# source config files
alias assume="source assume"
alias sz="source ~/.zshrc"
alias sze="source ~/.zshenv"
alias sza="source ~/.config/zsh/aliases"
alias sall="sza && sze && sz"

# git
alias ga="git add -p"
alias lg="lazygit"
alias dt="difftastic"

# docker
alias ld="lazydocker"

# package managers
alias bi="bun install"
alias y='yarn'
alias ni='npm install'
alias clean="kondo"

# updates
alias bu='curl -fsSL https://bun.sh/install | bash'
alias tu="tldr --update"
alias auac="sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y && sudo apt autoclean"
alias buac='brew upgrade & brew update & brew autoremove & brew cleanup'
alias um="buac && tu"
alias ul="auac && buac && tu"
alias uall="bu && buac && tu"

# documentation
alias tldrf='tldr --list | fzf --preview "tldr {1} --color="always" --preview-window=right, 70% | xargs tldr'
alias man-l='LC_ALL=C LANG=C man'

# Commands

# Open Window Manager
alias wm="zellij"

# Open File Explorer
alias exp="yazi"

# Take Screenshot
alias ss="freeze --interactive"

# Print version
alias gitv="git --version"
alias fnmv="fnm -v"
alias npmv="npm -v"
alias nodev="node -v"
alias yarnv="yarn -v"
alias bunv="bun -v"
alias brewv="brew -v"
alias aptv="apt -v"
alias tldrv="tldr -v"
alias macv="mac info"
alias pv="macv & gv & brewv & aptv & fnmv & nodev & yarnv & bunv & tldrv"

# Find File
alias pf="fzf --preview 'bat --color=always {}' --preview-window '~3'"
alias of="fzf --bind 'enter:become(zed {})'"
alias ofn="fzf --bind 'enter:become(nvim {})'"
alias ofc="fzf --bind 'enter:become(code {})'"

# Process Management
alias rfind="killall Finder&&sudo /System/Library/CoreServices/Finder.app/Contents/MacOS/Finder"

# Report Generators

# Count lines of code in a directory with a breakdown by file type and maintainance cost estimates.
# formats: json, cloc-yaml, html, html-table, sql, sql-insert, openmetric, csv, csv-stream, wide, tabular
alias cr="scc --by-file --no-complexity --no-cocomo --no-duplicates --no-average -f wide"
alias crh="scc --by-file --no-complexity --no-cocomo --no-duplicates --no-average -f html -o ./reports/size/code-count-report.html"
alias crj="scc --by-file --no-complexity --no-cocomo --no-duplicates --no-average -f json -o ./reports/size/code-count-report.json"

# onefetch - get a summary of a git repository
alias rr="onefetch -o json --color-resolution 256 --number-separator underscore --number-of-authors 10"
alias grr="rr > ./reports/repo/repo-summary.json"

# partials
alias status="neofetch && scc && onefetch && git status"
alias rdir="mkdir -p ./reports/size && mkdir -p ./reports/repo && mkdir -p ./reports/perf && mkdir -p ./reports/coverage"
alias rgen="rdir && grr && crh && crj"
```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
