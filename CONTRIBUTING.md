# Rock the JVM blog contribution guide

This repository contains the front pages of the Rock the JVM website, including every blog post. This document describes how the blog is built and how you can contribute with articles.

## Setup

This repository is built on [Astro](https://astro.build/) with JavaScript/TypeScript. It requires an NPM installation on your machine. Here's how to run it locally:

- clone the repository
- `npm install` just once, which will download the appropriate JS/TS packages
- `npm run dev` every time you need to start a local server
- open `localhost:4321` to see the website

The bundler will automatically update as you modify content.

## New Author Guide

If this is your first time writing an article on the blog, you will need an author profile.

You need two things:

1. Your details in a `yaml` file under `src/content/authors` in a snake-case capitalization. If I'm Daniel Ciocîrlan, the file should be `src/content/authors/daniel-ciocirlan.yaml`. In this case `daniel-ciocirlan` is my author id.
2. Your profile picture under `src/content/authors`. Name it the same as the YAML file, e.g. `src/content/authors/daniel-ciocirlan.jpg`.

Here's an example of a YAML file of a long-time contributor on the blog:

```
biography: A proud alumnus of Rock the JVM, now a senior engineer working on critical systems written in Java, Scala and Kotlin.
location:
  city: Padua
  country: Italy
name: Riccardo Cardin
photo: ./riccardo-cardin.png
socials:
  github: rcardin
  linkedin: riccardocardin
  twitter: "@riccardo_cardin"
  website: https://blog.rcard.in
```

## How to write

### Location and Boilerplate

All articles are in the `src/content/articles` directory. To add a new article, create a new file with the name `title-of-the-article.mdx`. The `title-of-the-article` will be the **slug** that gets appended after the base path, in the style "https://rockthejvm.com/blog/title-of-the-article".

All files are in [MDX](https://mdxjs.com/) - a Markdown dialect with the ability to inject JSX components. This allows us to add interactive elements on articles, if necessary.

Each article has a front-matter header that looks like below (example from one of the articles).

```
---
category: guide
title: Comparing Akka Streams, Kafka Streams and Spark Streaming
excerpt: Explore how Akka Streams, Kafka Streams, and Spark Streaming stack up and find out which one is best for your use case
tags: [akka, akka-streams, kafka, spark, spark-streaming]
publishedDate: 2020-06-17
updatedDate: 2024-09-06
---
```

For every article, please set:

- title (obviously)
- excerpt (one sentence)
- category: `guide`, `explanation`, `opinion` or `retrospective` (all possible values under `src/content/articleCategories`)
- tags: a list of values for topics (the site can filter on topics)
- publishedDate
- updatedDate: initially the same as the publishedDate at the time of publishing

**Important**: If your article contains media (usually pictures), create a _directory_ with the slug instead of a plain MDX file, and place the MDX file inside that directory and name it `index.mdx`. Store the images under a subfolder `images/` under the directory you've just created.

For example, the Akka vs Kafka vs Spark article contains

- a directory in the path `src/content/articles/comparing-akka-streams-kafka-streams-spark-streaming`
- the article itself under `src/content/articles/comparing-akka-streams-kafka-streams-spark-streaming/index.mdx`
- images under `src/content/articles/comparing-akka-streams-kafka-streams-spark-streaming/images`

### Content

Under the front matter, the structure of an article should look like this:

First, add 1-2 sentences describing what the article is about, what we're going to build, and very importantly, who it is for (i.e. what is expected of the reader to be familiar with). For any prerequisites, include links whenever necessary, preferably from Rock the JVM if we've already written about it (or there's any course).

Then add sections in the article, starting with H2s, i.e. `##` in Markdown.

```
## First topic

In this first topic we're going to talk about the first topic.

### Subtopic

Here, we're going to write in detail about a part of the first topic.

#### Sub-subtopic if necessary (rare)

Very rarely we will need to explore a certain part in detail.

## Second topic
## Third topic
...
## Conclusion
```

For **images**, they sit in the `images/` directory, and you can reference them in Markdown as `![Alt text](../images/myimage.png "Caption")`.

To embed **YouTube videos**, include a line of this form in the front-matter:

```
videoId: 1uP6FTUn8_E
```

## Sending for review

Submit a PR with your changes! We can carry the review/article discussion in the PR code review.
