---
title: 'From circuits to code'
description: 'Why an electrical engineer ended up writing software and securing it — and what this blog will be about.'
pubDate: 2026-07-02
tags: ['intro', 'career']
---

Hi — I'm Yasin. I trained as an Electrical & Electronics Engineer, and somewhere between soldering irons and signal processing I realized the part I kept staying up late for was the code.

So I followed it. These days I build full-stack web apps, cross-platform mobile with React Native, and the backend systems that hold them up. I also spend a good chunk of my time on the other side of the fence — application security, finding the ways software breaks before someone else does.

## What this blog is for

A place to write down things I figure out, mostly around:

- **Building** — practical notes on React, React Native/Expo, Node.js, and Python.
- **Systems** — backend and data engineering, AWS, and keeping cloud costs honest.
- **Security** — threat modeling, pentesting, and secure code review from a builder's point of view.

I like writing that respects your time: a clear problem, what I tried, and what actually worked.

## A quick note on code

Here's the shape most of my posts will take — a bit of context, then something you can run:

```ts
function greet(name: string): string {
  return `Hello, ${name} 👋`;
}

console.log(greet('world'));
```

More soon. If something here is useful — or wrong — [email me](mailto:ysntrktr@gmail.com).
