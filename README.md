# SLN-Spellbook

A collection of useful spells for keyboard wizards.

How do I run the version and publish commands?
We have a github action that

creates a version PR, then keeps it up to date, recreating it when merged. This PR always has an up-to-date run of changeset version
Optionally allows you to do releases when changes are merged to the base branch.
If you don't want to use this action, the manual workflow we recommend for running the version and publish commands is:

A release coordinator (RC) calls to stop any merging to the base branch
The RC pulls down the base branch, runs changeset version, then makes a new PR with the versioning changes
The versioning changes are merged back into the base branch
The RC pulls the base branch again and runs changeset publish
The RC runs git push --follow-tags to push the release tags back
The RC unblocks merging to the base branch
This is a lot of steps and is quite finicky (we have to pull from the base branch twice). Feel free to finesse it to your own circumstances.

## Changelog

- Add scc gh action

[![Scc Count Badge](https://sloc.xyz/github/OskarHulter/sln-spellbook/)](https://github.com/OskarHulter/sln-spellbook/)
[![Scc Count Badge](https://sloc.xyz/github/boyter/scc/?category=code)](https://github.com/boyter/scc/)
[![Scc Count Badge](https://sloc.xyz/github/boyter/scc/?category=blanks)](https://github.com/boyter/scc/)
[![Scc Count Badge](https://sloc.xyz/github/boyter/scc/?category=lines)](https://github.com/boyter/scc/)
[![Scc Count Badge](https://sloc.xyz/github/boyter/scc/?category=comments)](https://github.com/boyter/scc/)
[![Scc Count Badge](https://sloc.xyz/github/boyter/scc/?category=cocomo)](https://github.com/boyter/scc/)
[![Scc Count Badge](https://sloc.xyz/github/boyter/scc/?category=cocomo&avg-wage=1)](https://github.com/boyter/scc/)
[![Scc Count Badge](https://sloc.xyz/github/boyter/scc/?category=cocomo&avg-wage=100000)](https://github.com/boyter/scc/)
