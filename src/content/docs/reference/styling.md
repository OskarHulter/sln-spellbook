---
title: Styling Reference
description: A reference cheatsheet for CSS concepts and syntax.
---

## Basics

### Syntax

```css
selector{
property: value;
property2: value2;
}
```

```css
<link rel="stylesheet" type="text/css" href="/style.css" />

```

```html
<style type="text/css">
  div { color: #444;}
</style>
<tag style="property: value"> </tag>
```

## Box Model

- margin
- border
- padding
- content

## Selectors

```css
* // all elements
div // all div tags
div,p // all divs and paragraphs
div p // paragraphs inside divs
div > p // all p tags, one level deep in div
div + p // p tags immediately after div
div ~ p // p tags preceded by div
.classname // all elements with class
#idname // element with ID
div.classname // divs with certain classname
div#idname // div with certain ID
#idname // *all elements inside #idname
```

Reference pages are ideal for outlining how things work in terse and clear terms.
Less concerned with telling a story or addressing a specific use case, they should give a comprehensive outline of what you're documenting.

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
