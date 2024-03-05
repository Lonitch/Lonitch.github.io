---
layout: post
title: "Testing Fundamentals: Vitest"
date: 2024-03-05
categories: post
tags: [programming, web-dev, build-tool]
---

_A crash course on SolidJS_<!--more-->

<!-- mtoc-start -->

* [Intro](#intro)
* [Kinds of tests](#kinds-of-tests)
  * [unit tests](#unit-tests)
  * [integration tests (functional)](#integration-tests-functional)
  * [system tests (e2e)](#system-tests-e2e)
  * [acceptance tests: mimic real user behavior](#acceptance-tests-mimic-real-user-behavior)
* [Example: unit test](#example-unit-test)

<!-- mtoc-end -->

## Intro

First, why we write tests?

- **Laziness**: we write tests to make writting high-quality code easy
- **Good Dev. Env.**: set up your env so that **writing/running** the test is easier than the application
  - this reduces effort to get to the erroneous states
- **Tests Driving Dev.**: think of tests as the driving force to write high-quality code
  - when you have test-first mindset, you will end up with tests that are easy to reason about

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
  const repository = (await response.json()) as OrgRepoResponse;
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

```typescript
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

```typescript
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
