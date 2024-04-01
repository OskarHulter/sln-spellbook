---
title: JSON Snippets 
description: JSON commands
---



## Usecase

- for compatability https://jqlang.github.io/jq/tutorial/
- for interactivity https://jqplay.org/ 
- for useability https://fx.wtf/ 

## JSON Processing

In fx, arguments are treated as JavaScript functions. Input data is passed sequentially through each provided function:

```sh
echo '{"name": "world"}' | fx 'x => x.name' 'x => `Hello, ${x}!`'

# You can also utilize standard JavaScript functions:

echo '{"name": "world"}' | fx 'Object.keys'

# Syntactical sugar to enhance simplicity:

# Reference input data using x or this.
# Start expressions with . to avoid repeating the x => x.

echo '{"name": "world"}' | fx .name '`Hello, ${x}!`'

#That's it. So simple!
```
Streaming
```sh

# fx supports JSON streaming as well. You can use it for parsing logs, etc.
kubectl logs ... | fx .message

# Or just concatenate a few JSON files with cat and pipe to fx.
cat *.json | fx .length

# 🎨 Themes support
# fx supports themes as well. You can change colors and indent.
export FX_THEME=1

# To test all themes type next command:
fx --themes

```

I hope you enjoy using fx!
