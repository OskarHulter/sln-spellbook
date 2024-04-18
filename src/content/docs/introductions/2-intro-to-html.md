---
title: Step 3 - An introduction to html
description: An introductory guide to the most common html tags.
---
<!-- markdownlint-disable MD033 -->

## List of common tags

- Most of the tags you encounter at a typical website will be one of these.
- Other tags are mainly used for enhancing accessibility, as they provide additional context that allows assistive technology like screen readers to interpret the website.

## Intro

The most basic HTML page looks like this:

```html
 <!DOCTYPE html>
 <html>
   <head>
   </head>
   <body>
   </body>
 </html>
```

If you copy this into a text file with the suffix .html and then open it in a browser, you will see a completely blank webpage.

Different sections of the webpage are opened and closed with paired tags, like <tag> and </tag>, respectively. Every page has a <head></head> section which loads the necessary resources and a <body></body> section that contains the main content of the webpage.

External files can be referenced from the html document in various ways.
This example refers to a script that can be used to visualize data.

```html
<!DOCTYPE html>
 <html>
   <head>
     <script src="https://d3js.org/d3.v7.min.js"></script>
     <script src="https://d3js.org/d3-selection-multi.v1.min.js"></script>
     <link rel="stylesheet" href="styles.css">
   </head>
   <body>
     <svg height=500 width=900></svg>
   </body>
   <script src="example.js"></script>
 </html>
```

These tags can be thought of as a tree, because all tags are nested within a parent. For example, the template above has the following tree structure.

Since HTML follows something called the Document Object Model (DOM), this tree is sometimes referred to as the “DOM tree.”

## Document Structure

The following tags are used to surround the content of the website.

### Doctype Tag

This tag is the very first tag you should include in your HTML code. It tells the browser which version of HTML you’re using, and helps ensure that your code is displayed correctly.

```html
<!DOCTYPE html> <!-- 👈 Doctype tag -->
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome to my page!</h1>
  <p>This is some text.</p>
</body>
</html>
```

### Html Tag

This tag marks the beginning of your HTML code. It tells the browser that everything that follows is HTML code.

```html
<!DOCTYPE html>
<html> <!-- 👈 html tag open -->
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome to my page!</h1>
  <p>This is some text.</p>
</body> 
</html> <!-- 👈 html tag close -->
```

### Head Tag

The head tag contains information about the document, such as the title of the page, links to stylesheets, and metadata.

```html
<!DOCTYPE html>
<html>
  <head> <!-- 👈 head tag open -->
  <title>My Page</title>
  <meta name="description" content="A description of my page.">
</head> <!-- 👈 head tag close -->
<body>
  <h1>Welcome to my page!</h1>
  <p>This is some text.</p>
</body>
</html>
```

### Title Tag

This tag sets the title of the page, which appears in the browser tab.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title> <!-- 👈 title tag open & close -->
</head>
<body>
  <h1>Welcome to my page!</h1>
  <p>This is some text.</p>
</body>
</html>
```

### Style Tag

The style tag allows you to add CSS styles directly in your HTML code. This tag is typically placed within the head tag.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <style> <!-- 👈 style tag open -->
    p, h1 {
      font-size: 16px;
    }
  </style> <!-- 👈 style tag close -->
</head>
<body>
  <h1>Welcome to my page!</h1>
  <p>This is some text.</p>
</body>
</html>
```

### Body Tag

The body tag contains all of the content that will be displayed on the page, such as text, images, and links.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body> <!-- 👈 body tag open -->
  <h1>Welcome to my page!</h1>
  <p>This is some text.</p>
</body> <!-- 👈 body tag close -->
</html>
```

## text

### Headings

These tags are used to create headings on your page. They range in size from h1 (the largest) to h6 (the smallest).

```html
<!DOCTYPE html>
<html>
<head>
  <title>Heading Page</title>
</head>
<body>
  <h1>Welcome to Heading 1</h1> <!-- 👈 heading 1 tag open & close -->
  <h2>Heading 2</h2> <!-- 👈 heading 2 tag open & close -->
  <h3>Heading 3</h3> <!-- 👈 heading 3 tag open & close -->
  <h4>Heading 4</h4> <!-- 👈 heading 4 tag open & close -->
  <h5>Heading 5</h5> <!-- 👈 heading 5 tag open & close -->
  <h6>Heading 6</h6> <!-- 👈 heading 6 tag open & close -->
</body>
</html>
```

### Paragraph

This tag is used to create paragraphs of text.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome to my page!</h1>
  <p>This is some text.</p>  <!-- 👈 Paragraph tag open & close -->
  <p>This is some more text.</p> <!-- 👈 Paragraph tag open & close -->
</body>
</html>
```

### Anchor

The anchor tag creates a hyperlink that visitors can click to navigate to another page or section of the current page. It’s a powerful way to connect different parts of your website.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Anchor Page</title>
</head>
<body>
  <h1>Welcome to my page!</h1>
      <!-- 👇 anchor tag open & close -->
  <p>Visit <a href="https://www.google.com/">Google</a>.</p>
  <p>Visit <a href="https://www.youtube.com/">Youtube</a>.</p>
  <p>Visit <a href="https://www.facebook.com/">Facebook</a>.</p>
</body>
</html>
```

### Image

The image tag allows you to display images on your website. You can specify the source of the image using the src attribute.
Images usually include the following attributes:

- `src` - link to the source file
- `alt` - A descriptive text that is visible on hover or if the image fails to load.
- `width` & `height` - The width/height of the image. Important to preserve correct aspect ratio.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome to my page!</h1>
  <img src="https://picsum.photos/500/300" alt="A beautiful image"> <!-- 👈 image tag open and self close -->
</body>
</html>
```

### Form

The form tag is used to create a container for user input. You can use this tag to create a variety of form elements such as input fields, radio buttons, checkboxes, and more.

In the following code, we’re using the form tag to create a contact form that includes input fields for name and email, a textarea for the message, and a submit button.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Contact Us</h1>
  <form> <!-- 👈 form tag open -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea><br><br>
    <input type="submit" value="Submit">
  </form> <!-- 👈 form tag close -->
</body>
</html>
```

### Div tag

The div tag is used to create a container for content on your webpage. You can use this tag to group related elements together and apply CSS styles to them. We’ve also applied the .container CSS class to this div to apply the styling.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <style>
    .container {
      background-color: #f2f2f2;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to my page!</h1>
    <p>This is some text.</p>
  </div>
</body>
</html>
```

### Comment Tag

The comment tag in HTML is used to add comments to your code that won’t be displayed in the browser. Comments can be useful for adding notes to your code or temporarily disabling certain sections.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <!-- 👉 This is a comment -->
  <h1>Welcome to my page!</h1>
  <p>This is some text.</p>
</body>
</html>
```

### List tags

Html has a list item tag for individual list items.
All list items are contained inside a parent list that can be of two variants:

- ordered list - guarantees the order of the elements.
- unordered list - does not guarantee the order of the elements.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <ol> <!-- 👈 ordered list tag open -->
    <li>
      Welcome to my page!
    </li>
    <li>
      This is some text.
    </li>
  </ol> <!-- 👈 ordered list tag close -->
</body>
</html>
```

```html

```

By mastering these tags, you’ll be able to create a wide range of web pages and applications. Whether you’re building a simple landing page or a complex web application, these tags will be the building blocks of your code.

### tools

Included in VS Code by default:[Emmet: the shortcut to tags](https://docs.emmet.io/abbreviations/syntax/)

### references

[top tag intro reference](https://medium.com/@devsumitg/top-html-tags-every-web-developer-should-know-653092889eb4)
