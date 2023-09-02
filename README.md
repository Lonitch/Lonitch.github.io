# TuBTLE: Tufte Blog Theme with Latex-like Elements

This repository builds upon the concept of the Tufte-themed Jekyll site, which you can explore [here](http://clayh53.github.io/tufte-jekyll/). By integrating [JSXGraph](https://jsxgraph.org/), [Q.js](https://quantumjavascript.app/),[quantastica circuit simulator](https://github.com/quantastica/quantum-circuit/tree/master), and [Quirk](https://algassert.com/quirk), it introduces a remarkable dimension to visualizing intricate mathematical concepts. Moreover, Ruby plugins have been developed, enabling the creation of Markdown content enriched with Latex-like elements, thereby enhancing the overall appearance of the content.

- [TuBTLE: Tufte Blog Theme with Latex-like Elements](#tubtle-tufte-blog-theme-with-latex-like-elements)
  - [Installation](#installation)
  - [Customize to Your Needs](#customize-to-your-needs)
  - [Create Comment Section](#create-comment-section)
  - [Create a New Blog](#create-a-new-blog)
    - [Some caveats when writing blogs](#some-caveats-when-writing-blogs)
  - [LaTeX-like Elements for Blog Posts](#latex-like-elements-for-blog-posts)
    - [1. Generate table of Contents](#1-generate-table-of-contents)
    - [2. Display equations](#2-display-equations)
    - [3. Images](#3-images)
    - [4. Create references](#4-create-references)
    - [5. Sidenote and Marginnote](#5-sidenote-and-marginnote)


## Installation
Before running the steps below, make sure you have [ruby/gem and jekyll](https://jekyllrb.com/docs/installation/) ready. 

```
cd path/to/code
jekyll build
jekyll serve -w
```

And voila, a self-host website is up and running at `localhost:4000`.

If you want to deploy the blog as **Github Pages**, please follow the instructions [here](https://github.com/jeffreytse/jekyll-deploy-action) to 

- generate token,
- create deployment branch and,
- setup the [build-jekyll.yml](.github/workflows/build-jekyll.yml).

## Customize to Your Needs
The information in this section explains how to make a customized copy of this project.

- Please edit the ```_sass/_settings.scss``` file if you want to customize base styles.
- Use the ```_data/social.yml``` file to put in your own information for the footer links
- Change ```_includes/header.html``` and ```_includes/footer.html``` for header and footer formats

## Create Comment Section
Our comment section is powered by [uteranc.es](http://www.uteranc.es). To make comments visible after each post, please replace `repo` attribute with your own repository name in the following element that you can find at ```_layouts/post.html```:

```html
<script src="https://utteranc.es/client.js"
        repo="[GITHUB-USERNAME/REPO-NAME]"
        issue-term="pathname"
        label="comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

## Create a New Blog
Blogs are markdown files stored at `_posts` folder with their names formatted as `year-mm-dd-post-name.md`. Each markdown file starts with a head that specifies its name, date, layout type, and tags. An example of such head is shown below. Notice how the information starts and ends with `---` and each tag has words separated by `-`.
```
---
layout: post
title:  "Your awesome blog title"
date:   2023-08-22 11:35:00
categories: post
tags: [quantum-mechanics, quantum-algorithms]
---

*THE EXCERPT OF YOUR ARTICLE GOES HERE*<!--more-->

Your main content starts here.
```
It is recommended to create an **excerpt** before the main content of your blog article. The example above shows that your excerpt should ALWAYS ends with `<!--more-->`. The content before the symbol will be shown on the main list of articles.

### Some caveats when writing blogs
- BE CAREFUL when using `|` in your MathJax expression. If you find a paragraph formulated like a table near a math expression, you should consider remove `|` in the expression.
- Side figures are floating at the left side if you blog is rendered on mobile devices or the browser window width is smaller than 760px. Sidenotes can be made visible by clicking the superscript numbers. 
- Make sure you have at least one empty line before section/subsection titles.
- `Q.js` does NOT support gates that apply to more than two qubits, and `SWAP` gate is also not implemented correctly. See the issure [here](https://github.com/stewdio/q.js/issues/18).
- Use `"` to wrap arguments to the ruby classes introduced below if your arguments contain "`'`".
- It is recommanded to Use `\\\\` when creating multi-line equation using `eqn` class introduced below.

## LaTeX-like Elements for Blog Posts
You can take a look at the posts created recently in the `_post` folder to learn how to use the classes introduced here. The general principles are:

- Jekyll Liquid tag is employed for things that require display environments. This includes images, interactive graphs, equations with indices, and possibly animations.
- Things that are only used inline include references(`<ref>`) and  mathjax expressions(`$$`)
- The LaTeX `\label` finds its counterpart in HTML with the `id` attribute of the `<div>` element here.

### 1. Generate table of Contents
If you're using VS code as your post editor, then just install the `Markdown All in One` extension to generate a list of links to sections in your post. the settings in `tufte.css` will convert the list into a `fullwidth` formulated table of contents, with subsections indented.

### 2. Display equations
To add a new equation with a numbered tag(automatically ordered), you can do the following

```
{%eqn 'a+b=1' 'dumb-id'%}
```

which will create a `div` element that wraps the equation. Note that if the last argument is omitted, the `id` of `<div>` is automatically set as `eqn-x`, in which `x` is a post-wise count of equation rendering.

### 3. Images
So far we only support three rendering types: static `img`, dynamic `jsx` graph, `Q.js` quantum circuit diagram `qc`, and circuit svg image `qcsvg`. For each rendering type you can set the figure type as `fullwidth` or `marginnote`. Like the display equation, defining image id is not required but it is recommended to give your images meaningful IDs. Here image ID is defined by default as `fig-x`.  Finally, you're required to define its caption.

To show a static image, please use the following two commands in your markdown:

```html
<!-- fullwidth image -->
{%fig `img` `fullwidth` `url/to/your/img` `dumb figure caption` `dumb-fig-id`%}
<!-- margin image -->
{%fig `img` `url/to/your/img` `dumb figure caption` `dumb-fig-id`%}
<!-- margin image with automatic id definition -->
{%fig `img` `url/to/your/img` `dumb figure caption`%}
```
If you need to add a mathematical graph, then please follow the conventions below:

```html
<!-- fullwidth graph -->
{%fig `jsx` `fullwidth` `caption text` `dumb-fig-id`%}
<script>
// your js code here
</script>

<!-- margin square graph -->
{%fig `jsx` `caption text` `dumb-fig-id`%}
<script>
// your js code here
</script>

<!-- margin square graph with automatic id definition -->
{%fig `jsx` `caption text`%}
<script>
// your js code here
</script>
```

Each `jsx` graph is paired with a `script` element, in which you draw graphic elements through javascript coding. As a starter, your `jsx` graph script should initialize canvas by referring the correct figure id. The code snippet below gives you an example of how to make sure the line you draw is visualized in the figure with its id being `dumb-fig-id`.

```js
JXG.Options.text.useMathJax = true;
const board = JXG.JSXGraph.initBoard("dumb-fig-id", {
    boundingbox: [-0.5, 1.5, 1.5, -0.5],
    keepaspectratio: true,
    axis:true
});
board.create('line', [[1,0.8],[1.4,0.8]], 
{color:'red',straightFirst:false, straightLast:false});
```

When you have multiple `jsx` graphs in one post, it is required to assign returned values of `JXG.JSXGraph.initBoard` to `const` variables of distinct names.

For quantum circuits, we only provide one figure type: fullwidth circuit diagram with its title and probability distribution in a marginnote. To show preformatted diagram, you can use the following syntax:

```html
{%fig 'qc' 'circuit caption' 'no_palette' 'qc-dumb-id'%}
<script>
qc=Q`
      I H I 
`
eval_draw(qc,'qc-dumb-id',use_palette=false)
</script>
```

The example `<script>` above defines a simple circuit using the string of 
```js
qc=Q`
    I H I
`
```
which has one qubit(one row) to which a identity gate, a Hadamard, and another idensity gate are applied. The last command in `<script>` above tells Q.js to draw diagram in a `<div>` with its ID being `qc-dumb-id`. Also, it turns down the interactive palette. The palette is a simple web-GUI for you to change circuit cnfiguration. And change made in the circuit will modify its probability distribution, which is updated right below the circuit caption in real time. You can turn on the palette using the syntax below:
```html
{%fig 'qc' 'circuit caption' 'palette' 'qc-dumb-id'%}
<script>
qc=Q`
      I H I 
`
eval_draw(qc,'qc-dumb-id',use_palette=true)
</script>
```
Notice how the `no_palette` argument is replaced with the `palette` above.

The last rendering type is `qcsvg`, for which we prepare the following format to draw SVG images:
```html
{%fig `qcsvg` 'caption' 'fig-id'%}
<script>
// your code here
</script>
```
Please explore [`quantatica`'s github repo](https://github.com/quantastica/quantum-circuit/tree/master#getting-started) for how to create quantum circuit.

### 4. Create references
For big fans of Latex, the lack of references in MD documents is unfortunate. Here we provide a simple solution by adding `<ref/>` flags at the places where you need to refer to figures or equations. However, **please Do NOT use the flag at the beginning of a paragraph. It will breaks the format.** To refer to a figure, please use
```html
<ref fig='dumb-fig-id'/>
```
which create a link to the figure with its ID being `dumb-fig-id`. Both `jsx` graphs and `img` pictures can be referred this way. To refer to an equation, simply use the following.
```html
<ref eqn='dumb-eqn-id'/>
```
Note that this only supports the equations created by the `eqn` plugin introduced above.

### 5. Sidenote and Marginnote
Perhaps the most unique feature of the Tufte style is its sidenotes and marginnotes. The only difference between the two is that `sidenote` is preceded by numbered index while `marginnote` has no index. We simplified the original implementation, and provides the following ways to create sidenotes and marginnotes:
```html
<!-- sidenote -->
{%sidenote 'note content' %}
<!-- marginnode -->
{%marginnote 'note content'%}
```
