---
title: intro to cli tools
description: An introductory guide to the most common cli tools.
---

## Installation

## AsyncAPI

```sh
curl -OL https://github.com/asyncapi/cli/releases/latest/download/asyncapi.tar.gz &&
tar -xzf asyncapi.tar.gz
```

The step above will create an AsyncAPI directory in the current path. To run the CLI from anywhere, you must create a symlink. If the current path you are on is /user/local/bin, for example, you must create the symlink in the /user/local/bin directory by following these steps:

```sh
# cd into the unarchived directory
cd asyncapi

# get the absolute path
pwd

# Create a symlink
ln -s <absolute-path>/bin/asyncapi /user/local/bin/asyncapi

# The "asyncapi" command should be available to be used
asyncapi
```

## parsing

### lnav
<https://docs.lnav.org/en/v0.12.0/intro.html>
The arguments to lnav are the log files, directories, or URLs to be viewed.
The formats of the logs are determined automatically and indexed on-the-fly. See Log Formats for a listing of the predefined formats and how to define your own.

If no arguments are given, lnav will try to open the syslog file on your system:

```sh
lnav /var/log/cups
lnav
```
