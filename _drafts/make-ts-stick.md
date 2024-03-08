---
title: "Make TS Stick"
author: Sizhe Liu
categories: post 
tags: [programming, web-dev, basics]
---

_Only suffering and pain stick, so we become proficient through them_<!--more-->

## `#` versus `private`

- `#fieldName`is a JS private field, and it’s actually inaccessible outside of the class at runtime
- `private filedName` is a TypeScript private field, and while type-checking helps ensure we do not access it improperly, at runtime it’s **accessible** outside the class.

## Make variable immutable
