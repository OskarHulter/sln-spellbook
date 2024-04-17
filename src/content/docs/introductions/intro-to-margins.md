---
title: An introduction to margins
description: An introductory guide to margins and padding in CSS.
---

This is your last chance.
After this, there is no turning back.

You close this tab - the story ends, you wake up in your bed and believe whatever you want to believe.
You continue on - you stay in Wonderland and I show you how deep the rabbit hole goes.
[![Box Model](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/thebox.png?w=570&ssl=1)

See it with your own eyes
Wanna see every single “box” that makes up a page? Try putting this in the stylesheet temporarily:

```css
* {
   outline: 1px solid red !important;
}
```

[![Box Model Visualized](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/all-is-a-box.jpg?w=570&ssl=1)

```html
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td width="100%" style="font-family:Arial, sans-serif; font-size:16px; line-height:1.5em; color:#333333; padding:2em; background-color:#e4e4e4;">

            <p style="margin:0;">Paragraph of text.</p>

        </td>
    </tr>
</table>
```

### tools

email subject heading emulator: <https://codepen.io/awoodall/full/XbpMbo/>

### references

[box sizing](https://css-tricks.com/almanac/properties/b/box-sizing/)
