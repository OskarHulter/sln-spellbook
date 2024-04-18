---
title: Step 4 - An introduction to boxes
description: An introductory guide to the CSS box model.
---

## The CSS Box Model

When laying out a document, the browser's rendering engine represents each element as a rectangular box according to the standard CSS basic box model. CSS determines the size, position, and properties (color, background, border size, etc.) of these boxes.

Every box is composed of four parts (or areas), defined by their respective edges: the content edge, padding edge, border edge, and margin edge.

Order from the center

- Content area
- Padding area

### Border area

The border area, bounded by the border edge, extends the padding area to include the element's borders. Its dimensions are the border-box width and the border-box height.

The border becomes visible only if it is defined:

```css
border: 14px solid #32a1ce;
```

### Margin area

The margin area, bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. Its dimensions are the margin box width and the margin box height.

![Box Model](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/thebox.png?w=570&ssl=1)

![The CSS Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model/boxmodel.png)

See it with your own eyes
Wanna see every single “box” that makes up a page? Try putting this in the stylesheet temporarily:

```css
* {
   outline: 1px solid red !important;
}
```

[![Box Model Visualized](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/all-is-a-box.jpg?w=570&ssl=1)

```html
<img src="url(https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model/boxmodel.png)" width="auto" height="auto" />
```

![The CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model/boxmodel.png)

### tools

### references

[the best css syntax resource](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
[the css box model](https://css-tricks.com/the-css-box-model/)
[box sizing](https://css-tricks.com/almanac/properties/b/box-sizing/)
