# Github Pages of tufte-jekyll theme

This repo takes the idea of a sample site [here](http://clayh53.github.io/tufte-jekyll/) and incorparates JSXGraph and Q.js to enable neat visualization of mathematical ideas. New ruby classes are also added to enable Latex-like eiting in MD.

## Installation
Before running the steps below, make sure you have ruby and jekyll ready. 

```
cd path/to/code
bundle install
jekyll build
jekyll serve -w
```

And then point your browser at `localhost:4000`.

If you want to deploy the blog as **Github Pages**, please follow the instructions [here](https://github.com/jeffreytse/jekyll-deploy-action) to 

- generate token,
- create deployment branch and,
- setup the [build-jekyll.yml](.github/workflows/build-jekyll.yml).


## Latex-like Elements
You can take a look at the files in the `_post` folder to learn how to use the classes introduced before.
### Equations
To add a new equation with a number tag, you can do the following

```
{%eqn 'a+b=1' 'dumb-id'%}
```

which will create a `div` element that wraps the equation. Note that if the last argument is omitted, the `id` of `<div>` is automatically set as `eqn-x`, in which `x` is a post-wise count of equation rendering.

### Social icons

You can edit the ```_data/social.yml``` file and put in your own information for the footer links

