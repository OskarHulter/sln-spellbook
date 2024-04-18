---
title: An introduction to boxes
description: An introductory guide to the CSS box model.
---


[![Box Model](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/thebox.png?w=570&ssl=1)

See it with your own eyes
Wanna see every single “box” that makes up a page? Try putting this in the stylesheet temporarily:

```css
* {
   outline: 1px solid red !important;
}
```

[![Box Model Visualized](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/all-is-a-box.jpg?w=570&ssl=1)

## Quick guide

```html

<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td width="100%" style="font-family:Arial, sans-serif; font-size:16px; line-height:1.5em; color:#333333; padding:2em; background-color:#e4e4e4;">

            <p style="margin:0;">Paragraph of text.</p>

        </td>
    </tr>
</table>

```

![What a view](https://unsplash.com/photos/silhouette-of-mountains-next-to-body-of-water-2-MmXpeN8YE)
![what a beetle](https://unsplash.com/photos/green-and-yellow-ceramic-vase-HfhjNA0TYYU)

### tools

### references

[the css box model](https://css-tricks.com/the-css-box-model/)
[box sizing](https://css-tricks.com/almanac/properties/b/box-sizing/)
