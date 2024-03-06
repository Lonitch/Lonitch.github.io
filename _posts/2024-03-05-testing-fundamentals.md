---
layout: post
title: "Testing Fundamentals: Vitest"
date: 2024-03-05
categories: post
tags: [programming, basics, web-dev, build-tool]
---

_"Effortless as the wind that whispers by, when upon my bike I ride and fly."_<!--more-->

<!-- mtoc-start -->

- [Intro](#intro)
- [Brief Intro to Vite](#brief-intro-to-vite)
  - [The big why](#the-big-why)
  - [Basic structure of a Vite project](#basic-structure-of-a-vite-project)
  - [Working with CSS modules](#working-with-css-modules)
  - [Vite with JS frontend framework](#vite-with-js-frontend-framework)
  - [Using Vite project template](#using-vite-project-template)
  - [Working with static Assets](#working-with-static-assets)
- [Kinds of tests](#kinds-of-tests)
  - [unit tests](#unit-tests)
  - [integration tests (functional)](#integration-tests-functional)
  - [system tests (e2e)](#system-tests-e2e)
  - [acceptance tests: mimic real user behavior](#acceptance-tests-mimic-real-user-behavior)
- [Example: unit test](#example-unit-test)

<!-- mtoc-end -->

## Intro

First, why we write tests?

- **Laziness**: we write tests to make writting high-quality code easy
- **Good Dev. Env.**: set up your env so that **writing/running** the test is easier than the application
  - this reduces effort to get to the erroneous states
- **Tests Driving Dev.**: think of tests as the driving force to write high-quality code
  - when you have test-first mindset, you will end up with tests that are easy to reason about

## Brief Intro to Vite

Vite is a build tool and development server that is designed to make web development, particularly for modern JavaScript applications, faster and more efficient.

### The big why

- Vite has a fast server for development/testing. Like nodemon, using Vite also has Hot Module Replacement features.

- It allows the use of `import` and `export` without compiling JS/TS code first

- Provide a flexible configuration interface through the file `vite.config.js`

- Vite handles assets like imgs, fonts, and other static resources, allowing you to import them in the code directly

- Vite supports import of CSS modules

- Vite's functionality is extendable through plugins

- Vite analyzes codebase automatically to eliminate dead code paths, reducing bundle size when building the codebase

### Basic structure of a Vite project

```bash
project-root
├── index.html # has <script type="module" src="/src/index.js"></script>
├── public # static content
└── src
    ├── index.js
    └── components # ui components
    ... # other stuff
```

In `package.json` of a `vite`-enabled project, we usually prepare the following scripts for developing, testing, and building the app. If you're using `npm` or `bun`, you can run any one of the folowing scripts through `npm/bun run xxx`.

```json
  "scripts": {
    "start": "vite",
    "dev": "vite",
    "build": "tsc && vite build",
    "prepare": "husky install",
    "test": "vitest",
  },
```

Notice that building the application will **result in** a folder called `dist` in your project folder, in which you will find compiled JS under the subfolder called `assets`.

### Working with CSS modules

If we give a CSS file a `*.module.css` extension, then we can access its fingerprinted classes.

```css
/*in style.modue.css*/
.count {
  font-size: 4em;
  color: rebeccapurple;
}
```

```javascript
/* in xxxx.js */
import styles from "style.module.css";
document.getElementById("count").classList.add(styles.count);
```

Vite can also handle `SCSS` and [PostCSS](https://postcss.org/).

### Vite with JS frontend framework

Check community support for Vite to work with various JS frontend framework [here](https://github.com/vitejs/awesome-vite?tab=readme-ov-file#plugins).

### Using Vite project template

You can quickly scaffold out a new Vite project by using `npm create vite@latest` or `bun create vite@latest`, which will start a cli interface to ask you project name(create a new folder with given name) and choose frontend framework(options are Vanilla, Vue, React, Preact, Solid,...)

A good template for using Vite with `typescript` can be found [here](https://github.com/stevekinney/template-typescript)

### Working with static Assets

By default, Vite serves static files from the `public` directory in the root of your project. Files in this directory are served as-is at the root level.

For example, if you have an image at `public/my-image.jpg`, it will be available at `http://localhost:3000/my-image.jpg.`

There are some key points to remember when keeping static content in `public` folder:

- Unlike files in src or other source code directories, changes to files in public don’t trigger a rebuild.

- Files in the public directory cannot be imported in your source code as modules.

- These files are not processed or optimized by Vite or any of its plugins.

**BUT YOU CAN KEEP STATIC CONTENT IN `src` FOLDER**

Let's say you have a `image.jpg` placed at `src/images`. Then you can create an image element in JS/TS like the following: 

```javascript 
import image from './images/image.jpg';

const content = document.querySelector('#content');

export default function loadImage() {
	const imageElement = document.createElement('img');
	imageElement.src = image;
	content.appendChild(imageElement);
}
```

If you're facing type error when using the snippet above, you can create a `vite.d.ts` file at the root with the following content in it:

```typescript 
/// <reference types="vite/client" />
```

## Kinds of tests

### unit tests

- focusing on individual units like functions or classes (how things are done)
- fastest in speed
- highly isolated from other parts of your codebase
- easy to maintain, low cost to execute
- provides the lowest level of confidence for your code quality

### integration tests (functional)

- how units interact with a module or subsystem
- slightly slower than unit test
- less isolated than unit test
- more expensive than unit test
- harder to maintain but gives more confidence than unit test

### system tests (e2e)

- covering entire system as a whole
- hard to maintain, execute, and have minimal isolation
- gives system-level confidence

### acceptance tests: mimic real user behavior

- extra tool outside of your codebase might be required to run the tests

## Example: unit test

Suppose you have the following code:

```javascript
// in index.ts
export const useRepository = routeLoader$(async ({ params, env }) => {
  const user = params.user;
  const repo = params.repo;

  const headers: HeadersInit = {
    "User-Agent": "Qwik Workshop",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = env.get("PRIVATE_GITHUB_ACCESS_TOKEN");
  if (token) {
    headers["Authorization"] =
      "Bearer " + env.get("PRIVATE_GITHUB_ACCESS_TOKEN");
  }

  const response = await fetch(`https://api.github.com/repos/${user}/${repo}`, {
    headers,
  });
  const repository = (await response.json());
  return repository;
});
```

We can test the github-related part by scooping it out to make another isolated function

```javascript
// in github-api.ts
class GithubApi {
  constructor(private token: string | undefined) {}

  async getRepository(user: string, repo: string) {
    const headers: HeadersInit = {
      "User-Agent": "Qwik Workshop",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (this.token) {
      headers["Authorization"] = "Bearer " + this.token;
    }

    // fetch function is dependent on github.com
    // to make tests self-contained,
    // we need to create a mock fetch function that we can control
    const response = await fetch(
      `https://api.github.com/repos/${user}/${repo}`,
      {
        headers,
      }
    );
    const repository = (await response.json()) as Response;
    return repository;
  }
}
```

To make the original code cleaner like the following:

```javascript
// in index.ts
import { GithubApi } from "./github-api";
export const useRepository = routeLoader$(async ({ params, env }) => {
  const user = params.user;
  const repo = params.repo;
  const token = env.get("PRIVATE_GITHUB_ACCESS_TOKEN");
  const api = new GithubApi(token);
  return await api.getRepository(user, repo);
});
```

We can use [vitest](https://vitest.dev/) to prepare tests for the async function "`getRepostory`" in `GithubApi` class:

```javascript
// in github-api.spec.ts
// the file must be named as xxx.spec.xx
import { describe, it, vi, beforeEach } from "vitest";
import {GithubApi} from "./github-api";

// declare fetch function as a mock function
global.fetch = vi.fn();
// create a helper function that returns a similar response structure by real fetch
function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe("github-api", () => {
  describe("getRepository", () => {
    // the fetch method will have call history after each test item,
    // we need to reset that
    beforeEach(() => {
      global.fetch.mockReset()
    })
    // each test item starts with "it"
    it.("should return repository information",async ()=>{
      // mock response for the fetch in "getRepository"
      const mockResponse = [{success:true}];
      // mock token for initializing GithubApi class
      const mockToken = "token";
      // mock parameters for calling "getRepository"
      const mockUser = "usr";
      const mockRepo = "repo";

      // the goal is to assert that
      // "getRepository" calls the fetch method with the correct headers
      // and returns the correct data

      // what a successful mock call would return?
      fetch.mockResolvedValue(createFetchResponse(mockResponse))
      // create the class instance
      const api = new GithubApi(mockToken);
      const res = await api.getRepository(mockUser, mockRepo)

      // first check if the fetch is called with correct header in "getRepository"
      expect(fetchMock).toHaveBeenCalledWith(
        `https://api.github.com/repos/${mockUser}/${mockRepo}`,
        {
          method:"GET" // could be "POST/DELETE/PUT"
          headers: {
            "User-Agent": "Qwik Workshop",
            "X-GitHub-Api-Version": "2022-11-28",
            Authorization: `Bearer ${mockToken}`,
          },
        }
      );

      // then we check if the returned result matches mockResponse
      expect(res).toStrictEqual(mockResponse)

    // placeholder for future test implementation
    it.todo("should timeout after x seconds with time out response");
  });
});
```
