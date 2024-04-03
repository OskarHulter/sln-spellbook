---
title: Zsh config partials
description: A guide in my new Starlight docs site.
---

## plugins

```sh
git clone https://github.com/junegunn/fzf-git.sh.git ~/home/user/.config/fzf-git --single-branch --branch <main> --depth 1
git clone https://github.com/olets/zsh-abbr ~/home/user/.config/zsh-plugins/zsh-abbr --single-branch --branch <main> --depth 1
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting ~/home/user/.config/zsh-plugins/fsh --single-branch --branch <main> --depth 1
source ~/home/user/.config/zsh-plugins/zsh-abbr/zsh-abbr.zsh
source ~/home/user/.config/zsh-plugins/fsh/fast-syntax-highlighting.plugin.zsh
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


```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
