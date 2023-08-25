# Github Pages of tufte-jekyll theme

This repository builds upon the concept of the Tufte-themed Jekyll site, which you can explore [here](http://clayh53.github.io/tufte-jekyll/). By integrating [JSXGraph](https://jsxgraph.org/) and [Q.js](https://quantumjavascript.app/), it introduces a remarkable dimension to visualizing intricate mathematical concepts. Moreover, Ruby plugins have been developed, enabling the creation of Markdown content enriched with Latex-like elements, thereby enhancing the overall quality of the content.


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

## Latex-like Elements
You can take a look at the posts created recently in the `_post` folder to learn how to use the classes introduced here. The general principles are:

- Jekyll Liquid tag is employed for things that require display environments. This includes images, interactive graphs, equations with indices, and possibly animations.
- Things that are only used inline include references(`<ref>`) and  mathjax expressions(`$$`)
- The LaTeX `\label` finds its counterpart in HTML with the `id` attribute of the `<div>` element here.

### Table of Contents
If you're using VS code as your post editor, then just install the `Markdown All in One` extension to generate a list of links to sections in your post. the settings in `tufte.css` will convert the list into a `fullwidth` formulated table of contents, with subsections indented.

### Display equations
To add a new equation with a numbered tag(automatically ordered), you can do the following

```
{%eqn 'a+b=1' 'dumb-id'%}
```

which will create a `div` element that wraps the equation. Note that if the last argument is omitted, the `id` of `<div>` is automatically set as `eqn-x`, in which `x` is a post-wise count of equation rendering.

### Images
So far we only support two rendering types: static `img` and dynamic `jsx` graph. For each rendering type you can set the figure type as `fullwidth` or `marginnote`. Like the display equation, defining image id is not required but it is recommended to give your images meaningful IDs. Here image ID is defined by default as `fig-x`.  Finally, you're required to define its caption.

To show a static image, please use the following two commands in your markdown:

```html
<!-- fullwidth image -->
{%fig `img` `fullwidth` `url/to/your/img` `dumb figure caption` `dumb-fig-id`%}
<!-- margin image -->
{%fig `img` `url/to/your/img` `dumb figure caption` `dumb-fig-id`%}
<!-- margin image with automatic id definition -->
{%fig `img` `url/to/your/img` `dumb figure caption`%}
```
If you need to add a methematical graph, then please follow the conventions below:

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

### Create references
For big fans of Latex, the lack of references in MD documents is unfortunate. Here we provide a simple solution by adding `<ref/>` flags at the places where you need to refer to figures or equations. However, **please Do NOT use the flag at the beginning of a paragraph. It will breaks the format.** To refer to a figure, please use
```html
<ref fig='dumb-fig-id'>
```
which create a link to the figure with its ID being `dumb-fig-id`. Both `jsx` graphs and `img` pictures can be referred this way. To refer to an equation, simply use the following.
```html
<ref eqn='dumb-eqn-id'>
```
Note that this only supports the equations created by the `eqn` plugin introduced above.

### Sidenote and Marginnote
Perhaps the most unique feature of the Tufte style is its sidenotes and marginnotes. The only difference between the two is that `sidenote` is preceded by numbered index while `marginnote` has no index. We simplified the original implementation, and provides the following ways to create sidenotes and marginnotes:
```html
<!-- sidenote -->
{%sidenote 'note content' %}
<!-- marginnode -->
{%marginnote 'note content'%}
```



