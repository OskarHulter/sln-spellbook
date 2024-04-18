---
title: Step 2 - html speed run
description: An introductory guide to the most common html tags.
---
<!-- markdownlint-disable MD033 -->

### Tag Syntax

lowercase attributes, quote values:

```html
<tag attributename="value" />

<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>

<img 
  src="/demo.jpg" 
  alt="description" 
  height="48" 
  width="100" 
  longdesc="desc.txt"
/>
```

### Basic Tags

At least 80% of the web uses the following tags:

```html

<!-- HTML
Comment -->

<!-- 
The default container for grouping elements
-->
<div>Block element</div>

<!-- 
Heading elements are used for big titles. 
They should always start at 1 and get higher numbers as they decrease in priority, the lower down the page you get.
-->

<h1>Page title</h1>
<h2>Subheading</h2>
<h3>Sub subheading</h3>
<h4>Quaternary heading</h4>

<p>text</p>
<strong>Bold text</strong>
<em>Italic text</em>
<abbr title="Hypertext Markup Language">HTML</abbr>

<img src="/demo.jpg" alt="description" height="48" width="100">

<a href="https://html6.com/" target="_blank" rel="nofollow">
  Click here
</a>

<a href="mailto:me@ruwix.com?Subject=Hi%20mate" target="_top">Send Mail</a>

<a href="#footer">Jump to footnote</a>
<br />
<a name="footer"></a>Footnote content

<a href="https://HTMLforBabies.com/"
   target="_blank" rel="external nofollow">
      <img src="/demo.jpg" alt="baby"
           width="100" height="48" /><br />
      HTML For Babies
</a>

<br />
<hr />
```

| tag | Meaning                                                                                                                                                                 |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| div | The default generic box element. If you are a beginner, focus on this first. As we get better, we will use less divs to make the elements themselves more descriptive.  |
| h1  |                                                                                                                                                                         |

### Head Tags

```html
<!doctype html>
<html lang="en" class="no-js">
 <head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="https://htmlcheatsheet.com/" />
  <title>HTML CheatSheet</title>
  <meta name="description" content="A brief page description">
  <meta name="keywords" content="html,cheatsheet" />
  <meta property="fb:admins" content="YourFacebookUsername" />
  <meta property="og:title" content="HTML CheatSheet" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://htmlcheatsheet.com/" />
  <meta property="og:image" content="https://htmlcheatsheet.com/images/html-cheatsheet.jpg" />
  <meta property="og:description" content="A brief page description" />
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <link rel="alternate" hreflang="es" href="https://htmlcheatsheet.com/spanish/" />
  <link rel="stylesheet" href="/styles.css">
  <script src="/script.js"></script>
 </head>
```

### Blank page container

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Page Title</title>
    <meta name="description" content="Roughly 155 characters">
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="script.js"></script>
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```

### Semantic page structure

```html
<header>
  <div id="logo">HTML</div>
  <nav>  
    <ul>
      <li><a href="/">Home</a>
      <li><a href="/link">Page</a>
    </ul>
  </nav>
</header>
<main role="main">
  <article>
    <h2>Title 1</h2>
    <p>Content 1</p>
  </article>
  <article>
    <h2>Title 2</h2>
    <p>Content 2</p>
  </article>
</main>
<section>
  A group of related content
</section>
<aside>
  Sidebar
</aside>
<footer>
  <p>&copy; HTML CheatSheet</p>
  <address>
    Contact <a href="mailto:me@html6.com">me</a>
  </address>
</footer>
```

### Forms

```html
<form action="/action.php" method="post">
  Name: <input name="name" type="text" /> <br /> 
  Age: <input max="99" min="1" name="age" step="1" type="number" value="18" /> <br />
  <select name="gender">
    <option selected="selected" value="male">Male</option>
    <option value="female">Female</option>
  </select><br /> 
  <input checked="checked" name="newsletter" type="radio" value="daily" /> Daily <input name="newsletter" type="radio" value="weekly" /> Weekly<br />
  <textarea cols="20" name="comments" rows="5">Comment</textarea><br />
  <label><input name="terms" type="checkbox" value="tandc" />Accept terms</label> <br />
<input type="submit" value="Submit" />
</form>
```

### Definition List

```html
<dl>
  <dt>HTML</dt>
  <dd>Hypertext Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets </dd>
</dl>
```

### Dummy Data

```html
<h1>AI Cake Recipe Inventor</h1>
<p>Cupcake ipsum dolor sit amet cake croissant fruitcake muffin. Sweet bonbon candy powder cheesecake muffin sesame snaps jujubes. Muffin macaroon cheesecake cookie souffl&eacute; cookie cheesecake lollipop candy canes. Halvah cotton candy sesame snaps chocolate bar. Sugar plum dessert drag&eacute;e macaroon chupa chups. Cake cheesecake wafer cotton candy. Danish jelly halvah jelly beans tootsie roll donut. Halvah cheesecake halvah jujubes sweet roll biscuit croissant wafer. Cake halvah chocolate bar sugar plum apple pie.</p>
<h2>Your personal michelin star chef</h2>
<p>Tootsie roll pie topping powder sugar plum souffl&eacute;. Gingerbread sugar plum tiramisu powder macaroon candy canes drag&eacute;e icing. Sweet macaroon tootsie roll chocolate chocolate cake. Tootsie roll muffin donut apple pie gummies powder. Lollipop candy canes bonbon sesame snaps danish brownie croissant tiramisu. Oat cake pastry pudding ice cream fruitcake. Muffin pudding croissant pudding tart oat cake caramels sugar plum icing.</p>
<h2>Customized to your pallete</h2>
<p>Cheesecake danish biscuit jelly beans croissant souffl&eacute; sweet candy jelly beans. Fruitcake topping jelly-o bonbon. Topping gummi bears brownie cake bear claw chupa chups brownie carrot cake gummi bears. Cupcake sweet brownie sugar plum. Tiramisu jujubes carrot cake ice cream drag&eacute;e bear claw. Chocolate gingerbread drag&eacute;e souffl&eacute; tiramisu. Pudding gingerbread danish icing oat cake marshmallow chocolate. Topping bonbon oat cake caramels.</p>
  <h3>Go viral on tiktok now with reciepes to make your friends envious!</h3> 
<p>Drag&eacute;e chupa chups lemon drops lemon drops fruitcake. Muffin wafer pudding marshmallow drag&eacute;e chocolate souffl&eacute; muffin sweet roll. Sweet roll drag&eacute;e pudding jelly. Chupa chups jelly beans cake. Apple pie tiramisu caramels. Bonbon chocolate bar pudding chupa chups oat cake tootsie roll. Fruitcake cake danish sugar plum chupa chups tart. Topping liquorice drag&eacute;e marshmallow cake candy fruitcake chocolate bar bonbon. Sweet roll oat cake croissant tiramisu wafer cotton candy liquorice bear claw souffl&eacute;. Tart jelly-o marshmallow chocolate bar liquorice cotton candy.</p>
<p>Lemon drops fruitcake halvah lollipop. Jujubes croissant bonbon marzipan macaroon sweet roll. Tart jelly-o apple pie. Jelly-o sweet roll tart dessert sweet jelly beans chocolate cake gummies cake. Sesame snaps jelly macaroon lemon drops muffin chocolate bear claw jujubes wafer. Jujubes icing oat cake cake jelly marshmallow biscuit lollipop toffee. Lemon drops brownie marshmallow.</p>
<p>Tiramisu pastry fruitcake tiramisu. Lemon drops sweet lemon drops cotton candy sesame snaps ice cream caramels sweet liquorice. Candy lollipop wafer. Oat cake jelly-o toffee. Jelly biscuit souffl&eacute; gummi bears jelly tart topping. Sesame snaps pudding cookie muffin muffin apple pie cookie jujubes. Croissant cotton candy sweet roll chocolate cake apple pie candy canes sesame snaps danish. Bear claw jujubes dessert jelly beans chocolate cupcake chocolate cake. Oat cake jelly beans cupcake bonbon marzipan jujubes bonbon. Bonbon tart ice cream icing souffl&eacute; bonbon oat cake sesame snaps dessert.</p>
<p>Sesame snaps lollipop candy topping jelly cookie. Carrot cake danish candy chocolate cake muffin fruitcake jelly beans tart. Chocolate bar pastry dessert pastry. Fruitcake wafer chupa chups marzipan wafer tart jelly beans. Jelly sweet fruitcake cake tootsie roll danish. Pie toffee candy canes. Marzipan muffin jujubes gingerbread lollipop halvah gummies liquorice.</p>
<p>Dessert cupcake donut. Chocolate cake marshmallow sweet bonbon. Marzipan dessert candy canes sweet roll brownie pudding. Marshmallow biscuit lollipop biscuit croissant. Marzipan liquorice lollipop muffin toffee souffl&eacute; caramels. Tart pudding drag&eacute;e cheesecake icing. Gummi bears wafer apple pie fruitcake.</p>
<p>Fruitcake cookie powder candy canes. Croissant caramels jelly beans. Gingerbread cookie marshmallow cheesecake carrot cake gummies cake. Chupa chups chocolate cake chocolate cake toffee chupa chups donut bonbon jujubes. Gingerbread drag&eacute;e marzipan wafer. Chupa chups lollipop danish chocolate donut. Sesame snaps gingerbread muffin powder. Cookie candy danish macaroon cake ice cream chocolate bar pastry gummies. Candy marshmallow candy powder jelly beans chupa chups gummies. Cake souffl&eacute; donut liquorice.</p>
<p>Tootsie roll cheesecake halvah croissant marzipan liquorice cake. Chocolate cake jujubes muffin pudding danish jelly cupcake. Brownie chocolate powder topping jelly beans sesame snaps liquorice cake tiramisu. Gummies bonbon lemon drops croissant dessert chocolate jujubes caramels jujubes. Souffl&eacute; icing macaroon sweet roll fruitcake bear claw cheesecake. Tart sesame snaps toffee oat cake ice cream cookie sugar plum tart. Chocolate cake jelly caramels lollipop cupcake tootsie roll.</p>
```

### tools

### references

[getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

[common tags reference](https://medium.com/@devsumitg/top-html-tags-every-web-developer-should-know-653092889eb4)
