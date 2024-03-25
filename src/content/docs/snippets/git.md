---
title: git snippets
description: useful git commands
---

## download files from repo

```sh
FILENAME=email-factory &&
http -d https://github.com/OskarHulter/email-factory/archive/refs/heads/main.zip -o "${FILENAME}.zip" && 
unzip ./"${FILENAME}.zip" &&
rm ./"${FILENAME}.zip"
```

## download repo in zip

```sh

GH_USER=REPLACE_WITH_USER \
GH_REPO=REPLACE_WITH_REPO \
GH_BRANCH=REPLACE_WITH_BRANCH \
wget https://github.com/${GH_USER}/${GH_REPO}/archive/refs/tags/${GH_BRANCH}.zip \
-O "${GH_REPO}-${GH_BRANCH}.zip" && \ 
unzip ./"${GH_REPO}-${GH_BRANCH}.zip" && \
rm ./"${GH_REPO}-${GH_BRANCH}.zip"

```

## download repo in tgz

```sh

GH_USER=REPLACE_WITH_USER \
GH_REPO=REPLACE_WITH_REPO \
GH_BRANCH=REPLACE_WITH_BRANCH \
wget https://github.com/${GH_USER}/${GH_REPO}/archive/refs/tags/${GH_BRANCH}.tar.gz \
-O "${GH_REPO}-${GH_BRANCH}.tar.gz" && \
tar -xzvf ./"${GH_REPO}-${GH_BRANCH}.tar.gz" && \
rm ./"${GH_REPO}-${GH_BRANCH}.tar.gz"

```
