<https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors>

# Article Style Guide

## Embedded

- Embedded content (Tweets, URL, YouTube) should be handled by [Astro Embed](https://astro-embed.netlify.app)

## Literals

- The less-than and greater-than symbols should be written as `\<` and `\>` respectively
- Odd characters such a the curly apostrophe should be avoided

## Code Blocks

- Code blocks should always include a language identifier

## Links

- Internal links should be root relative
  - `(/articles/...)` for articles
  - `(/images/...)` for images

## Images

- All images should be stored in the article's local `images` directory
- All images should have corresponding alt text
- Images should be in kebab case
- Images should be named descriptively
- Highest quality images should be used due to the fact that they will be automatically compressed

## Formatting

### Headings

- Heading should start with `##`
  - `#` is reserved for the article title
- All headings should be written in title case
- Headings should not end with a period
- Headings should never start with a number

### Lists

- All list items should be written in sentence case
- List items should not end with a period unless they contain multiple sentences

## Admonitions

### When to Use

- Anything not directly related to the main content of the article
- Additional information that is relevant to the topic at hand

### Types of Admonitions

#### Caution

Issues or errors that don’t require immediate action but are important to be aware of

#### Note

Additional information that is relevant to the topic at hand

#### Tip

Useful tips or recommendations that are relevant to the topic at hand

#### Warning

Actions to take or avoid to prevent issues
