---
title: Step 3 - An introduction to CSS
description: An introductory guide to the most commonly used CSS.
---

```css
h1 {
  color: red;
  font-size: 5em;
}
```

- In the above example, the CSS rule opens with a selector. This selects the HTML element that we are going to style. In this case, we are styling level one headings (h1).
- We then have a set of curly braces { }.
- Inside the braces will be one or more declarations, which take the form of property and value pairs. We specify the property (color in the above example) before the colon, and we specify the value of the property after the colon (red in this example).
This example contains two declarations, one for color and the other for font-size. Each pair specifies a property of the element(s) we are selecting (h1 in this case), then a value that we'd like to give the property.

[![Box Model](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/thebox.png?w=570&ssl=1)

CSS properties have different allowable values, depending on which property is being specified. In our example, we have the color property, which can take various color values. We also have the font-size property. This property can take various size units as a value.

A CSS stylesheet will contain many such rules, written one after the other.
See it with your own eyes
Wanna see every single “box” that makes up a page? Try putting this in the stylesheet temporarily:

```css
* {
   outline: 1px solid red !important;
}
```

You will find that you quickly learn some values, whereas others you will need to look up. The individual property pages on [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS) give you a quick way to look up properties and their values when you forget or when you want to know what else you can use as a value.

[![Box Model Visualized](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/all-is-a-box.jpg?w=570&ssl=1)

### Color

The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```css
color: rebeccapurple;
```

If you want to color the entire box, use the background-color property instead.

```css
background-color: #74992e;
```

### Fonts

```css
font-family: 'Helvetica' sans-serif;
font-size: 14px; 
font-stretch: expanded;
font-style: italic;
font-variant: small-caps slashed-zero;
font-weight: bold;
line-height: 'Helvetica' sans-serif;
```

The line-height CSS property sets the height of a line box.
It's commonly used to set the distance between lines of text.

Fonts also have a shorthand available to set all of the properties above, but it can be a bit hard to read.

```css
/* font-size font-family */
font: 1.2em "Fira Sans", sans-serif;

/* font-size/line height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em "Fira Sans", sans-serif;

/* font-stretch font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em "Fira Sans", sans-serif;
```

### Padding & Margin

There are two common ways of applying spacing to elements: padding and margin.

- Padding applies the space inside the box, potentially making the box bigger
- Margin applies the space outside the box, potentially affecting other elements

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;

margin-top: 10px;
margin-right: 15px;
margin-bottom: 15px;
margin-left: 5px;
```

- A shorthand can be used to define the padding of every direction in one line.
- The order of application is always clockwise: top, right, bottom, left.
- It's possible to use fewer than 4 values, but that affects the order of application.

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;

margin: 10px 15px 15px 5px;
```

### Images

![What a view](https://unsplash.com/photos/silhouette-of-mountains-next-to-body-of-water-2-MmXpeN8YE)
![what a beetle](https://unsplash.com/photos/green-and-yellow-ceramic-vase-HfhjNA0TYYU)

Unsplash is a great resource for images that are free to use in your designs.
Check it out in the resources below.

### Background images

How to maintain the aspect ratio of the background image:

```css
.main {
  /* Set the background image, size, and position. */
  background-image: url('https://unsplash.com/photos/silhouette-of-mountains-next-to-body-of-water-2-MmXpeN8YE');
  background-size: cover; // try 'contain' as well
  background-position: center;

  /* Or, use the background shortcut. */
  background: url('https://unsplash.com/photos/green-and-yellow-ceramic-vase-HfhjNA0TYYU') center/cover;

  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
}

```

### references

[the best css syntax resource](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
The ultimate CSS master of youtube: [Kevin from CSS tricks](https://youtube.com/watch?v=UWFrl79092w)
[box sizing](https://css-tricks.com/almanac/properties/b/box-sizing/)
[What is possible with CSS? an inspirational component library](https://ui.aceternity.com/components/evervault-card)
