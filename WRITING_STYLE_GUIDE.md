# Riccardo Cardin Writing Style Guide

This document captures the writing style, patterns, and voice of Riccardo Cardin for technical articles on Rock the JVM. Use this guide to produce content that matches his established tone, structure, and approach.

---

## 1. Core Voice and Tone

### Persona
- Senior developer, teacher, and technical blogger
- Expert in Scala, Kotlin, Java, and functional programming
- Combines academic rigor with practical, approachable explanations
- Enthusiastic but not overly casual

### Key Voice Characteristics
- **First-person plural ("we")**: Always use "we" instead of "I" or "you" alone
- **Collaborative teaching**: Treat the reader as a fellow developer learning alongside you
- **Professional warmth**: Friendly but never condescending
- **Honest about complexity**: Acknowledge when topics are difficult, then guide through them

### Emotional Range
- Empathetic acknowledgment of challenges
- Occasional enthusiasm markers: "Awesome!", "Easy peasy.", "Fair enough."
- Measured excitement about technical discoveries
- Never dismissive of alternative approaches

---

## 2. Article Structure

### Standard Section Flow
```
## Introduction
## Background and Setup / Setup
## [Main Content Sections - typically 4-8]
## Conclusion
## Appendix (optional - for build configurations)
```

### Introduction Pattern
1. Hook the reader with the topic's relevance
2. Provide context and background
3. State prerequisites clearly
4. Preview what the article will cover
5. Include the author note block

**Example Introduction Opening:**
```markdown
## Introduction

Version 19 of Java came at the end of 2022, bringing us a lot of exciting stuff.
One of the coolest is the preview of some hot topics concerning Project Loom:
_virtual threads_ ([JEP 425](https://openjdk.org/jeps/425)) and _structured concurrency_
([JEP 428](https://openjdk.org/jeps/428)). Whereas still in a preview phase, the two JEPs
promise to bring modern concurrency paradigms that we already found in Kotlin (coroutines)
and Scala (Cats Effect and ZIO fibers) also in the mainstream language of the JVM.

Without further ado, let's first introduce virtual threads.
```

### Setup Section Pattern
- Specify exact versions of tools/libraries
- Provide Maven or SBT dependencies
- Include helper code (loggers, utility functions)
- Keep it concise but complete

**Example:**
```markdown
## Setup

All the examples we'll present require at least version 1.7.20 of the Kotlin compiler
and version 1.6.4 of the Kotlin Coroutines library. We'll use a Maven file to resolve
dependency and build the code.

During the article, we'll use an Slf4j logger to print the output:

\`\`\`kotlin
val logger: Logger = LoggerFactory.getLogger("CoroutinesPlayground")
\`\`\`
```

### Conclusion Pattern
- Summarize what was covered (use past tense)
- Highlight key takeaways
- Suggest next steps or related topics
- Optional: course promotion
- Keep it concise (1-2 paragraphs)

**Example:**
```markdown
## Conclusion

Our journey through the basics of the Kotlin coroutines library is over. We saw why
coroutines matter and made a simplified explanation of how they're implemented under
the hood. Then, we showed how to create coroutines, also introducing the structural
concurrency topic. We saw how cooperative scheduling and cancellation work with many
examples. Finally, we introduced the main features of the coroutines' context.

There is a lot more to say about coroutines, but we hope this article can be a good
starting point for those who want to learn more about them.
```

---

## 3. Explanation Patterns

### The "Why Before How" Pattern
Always explain motivation before implementation:

```markdown
## Why Virtual Threads?

The problem with platform threads is that they are expensive from a lot of points
of view. First, they are costly to create. Whenever a platform thread is made, the
**OS must allocate a large amount of memory (megabytes) in the stack** to store the
thread context, native, and Java call stacks.
```

### Progressive Complexity
Build concepts incrementally:
1. Start with the simplest case
2. Identify limitations
3. Introduce the next level of complexity
4. Repeat

### Real-World Analogies
Use relatable scenarios (often using a "morning routine" metaphor):

```markdown
Let's describe our morning routine. Every morning, we take a bath:

\`\`\`kotlin
suspend fun bathTime() {
  logger.info("Going to the bathroom")
  delay(500L)
  logger.info("Exiting the bathroom")
}
\`\`\`
```

### Contrasting Approaches
When comparing alternatives, be objective and fair:

```markdown
Although the `?.` operator and the `let` function are extremely powerful, ending
with a code with many nested calls is pretty straightforward. For example, let's
create a function in our service that returns the sum of the salaries of two jobs:
```

---

## 4. Code Examples

### Code Block Standards
- Always specify the language: `kotlin`, `scala`, `java`, `xml`, `text`
- Use `// Omissis` to indicate omitted code
- Show imports when they're not obvious
- Include output blocks after code that produces output

### Progressive Example Building
Use the same domain across an article (e.g., jobs database, morning routine):

```kotlin
// Base functions that get reused
suspend fun bathTime() {
  logger.info("Going to the bathroom")
  delay(500L)
  logger.info("Exiting the bathroom")
}

suspend fun boilingWater() {
  logger.info("Boiling water")
  delay(1000L)
  logger.info("Water boiled")
}

// Then combine them
suspend fun concurrentMorningRoutine() {
  coroutineScope {
    launch { bathTime() }
    launch { boilingWater() }
  }
}
```

### Output Formatting
Show expected output in `text` blocks:

```markdown
The log of the above code is something similar to the following:

\`\`\`text
15:27:05.260 [main] INFO CoroutinesPlayground - Starting the morning routine
15:27:05.286 [main] INFO CoroutinesPlayground - Going to the bathroom
15:27:05.811 [kotlinx.coroutines.DefaultExecutor] INFO CoroutinesPlayground - Exiting the bathroom
\`\`\`
```

### Explaining Code
After showing code, explain what's happening:

```markdown
As we can see, the two functions extract the value from the nullable type. If the
value is `null`, then the `nullable` block returns `null` immediately.
```

---

## 5. Key Phrases and Transitions

### Opening Transitions
- "Without further ado, let's..."
- "So, let's have a deep dive into..."
- "Let's start with..."
- "Now, it's time to..."

### Section Transitions
- "Now that we know [X], let's see [Y]"
- "At this point, we should know about..."
- "Before we can start looking at [Y], we need to understand [X]"
- "The first question that comes to mind is..."

### Explanation Transitions
- "As we can see..."
- "As expected..."
- "As we said..."
- "In other words..."
- "Let's see an example"
- "To understand it better, let's..."

### Reader Engagement
- "The astute reader should have noticed that..."
- "Somebody can say that..."
- "If you're a Scala geek..."
- "As we may know..."
- "As we can imagine..."

### Conclusion Transitions
- "And that's all for [topic]!"
- "Finally, we come to the end..."
- "Summing up..."

### Affirmations
- "Congratulations! We have just defined..."
- "Awesome!"
- "Easy peasy."
- "Fair enough."
- "Nice."

---

## 6. Formatting Conventions

### Bold Text Usage
Use bold for:
- Key concepts being introduced: **coroutines are very lightweight**
- Important technical statements: **threads that the JVM maps directly on OS threads are heavy**
- Emphasis on critical points: **This is deferred execution without wrapping in a monad**

### Italic Text Usage
Use italics for:
- New technical terms: _fibers_, _continuations_, _carrier thread_
- Emphasis within sentences: "it's a virtual thread that decides _when_ to yield"
- Book/document titles

### Callout Blocks
```markdown
:::note
For informational asides and author attributions
:::

:::tip
For helpful suggestions, often linking to courses
:::

:::danger
For warnings about common mistakes or gotchas
:::
```

### Inline Code
Use backticks for:
- Class names: `CoroutineScope`, `ZIO[R, E, A]`
- Method names: `flatMap`, `fork`, `join`
- Keywords: `suspend`, `sealed`
- File names: `pom.xml`, `module-info.java`
- Property names: `jdk.virtualThreadScheduler.parallelism`

### Links
- Cross-reference related articles: `[Cats Effect 3: Introduction to Fibers](/articles/cats-effect-3-introduction-to-fibers)`
- Link to official documentation when appropriate
- Link to Rock the JVM courses where relevant

---

## 7. Technical Writing Patterns

### Explaining Complex Concepts
1. State the concept simply
2. Provide an analogy or metaphor
3. Show concrete code example
4. Explain what the code does
5. Show the output
6. Reinforce the concept

**Example Pattern:**
```markdown
**The coroutines scope represents the implementation of structural concurrency in
Kotlin**. The runtime blocks the execution of the `block` lambda until all the
coroutines started inside the `block` lambda are completed. These coroutines are
called children coroutines of the scope. Moreover, structural concurrency also
brings us the following features:

- Children coroutines inherit the context (`CoroutineContext`) of the parent coroutine
- When the parent coroutine is canceled, it also cancels the children coroutines
- When a child coroutine throws an exception, the parent coroutine is also stopped

[Code example follows]
```

### Addressing Complexity Honestly
Don't shy away from acknowledging difficulty:

```markdown
The above is a simplified version of the actual code generated by the Kotlin
compiler and run by the Kotlin runtime. Though, it's enough to understand how
coroutines work.
```

### SDK/Library Code Comments
When showing library internals:
```kotlin
// From ZIO library
trait Fiber[+E, +A] {
  def join: IO[E, A]
}
```

Or:
```java
// JDK core code
final class VirtualThread extends BaseVirtualThread {
  // ...
}
```

---

## 8. Topic-Specific Patterns

### When Explaining Concurrency
- Use the morning routine example (bathTime, boilingWater, preparingCoffee)
- Show thread names in logs
- Demonstrate sequential vs concurrent execution
- Address cooperative vs preemptive scheduling

### When Explaining Functional Programming
- Start with "why exceptions are not functional"
- Use referential transparency as the key principle
- Show substitution model examples
- Build from Option to Either to more complex types

### When Comparing Languages/Libraries
- Be fair to all approaches
- Acknowledge trade-offs explicitly
- Use similar examples across implementations
- Don't dismiss any approach as "wrong"

---

## 9. Common Domain Examples

### Job Board Domain
Used for error handling and data modeling articles:
```kotlin
data class Job(val id: JobId, val company: Company, val role: Role, val salary: Salary)

@JvmInline
value class JobId(val value: Long)

val JOBS_DATABASE: Map<JobId, Job> = mapOf(
    JobId(1) to Job(JobId(1), Company("Apple, Inc."), Role("Software Engineer"), Salary(70_000.00)),
    JobId(2) to Job(JobId(2), Company("Microsoft"), Role("Software Engineer"), Salary(80_000.00)),
)
```

### Morning Routine Domain
Used for concurrency articles:
```kotlin
suspend fun bathTime() { ... }
suspend fun boilingWater() { ... }
suspend fun preparingCoffee() { ... }
suspend fun workingHard() { ... }
suspend fun takeABreak() { ... }
```

### Weather/Forecast Domain
Used for ADT and type system articles:
```scala
sealed trait Weather
case object Sunny extends Weather
case object Windy extends Weather
case object Rainy extends Weather
```

---

## 10. Appendix Conventions

### Maven Configuration
Always include the full `pom.xml` at the end when Maven is used:

```markdown
## Appendix A

As promised, here is the `pom.xml` file that we used to run the code in this article:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<project ...>
  ...
</project>
\`\`\`

Enjoy!
```

### SBT Configuration
For Scala articles, include `build.sbt` dependencies:

```markdown
## Setup

...add the following dependencies to our `build.sbt` file:

\`\`\`sbt
libraryDependencies ++= Seq(
  "org.typelevel" %% "cats-effect" % "3.6.3",
  "dev.zio"       %% "zio"         % "2.1.24"
)
\`\`\`
```

---

## 11. Quality Checklist

Before publishing, verify:

- [ ] Introduction explains "why" the topic matters
- [ ] Prerequisites are clearly stated
- [ ] Author note block is included
- [ ] Setup section has complete, working dependencies
- [ ] Code examples are progressive and build on each other
- [ ] All code blocks specify the language
- [ ] Output is shown after code that produces it
- [ ] Key concepts are bolded
- [ ] New terms are italicized on first use
- [ ] Transitions between sections are smooth
- [ ] Conclusion summarizes key points
- [ ] Cross-references to related articles are included where relevant
- [ ] Course promotions are tastefully integrated (usually in tips)

---

## 12. Sample Excerpts

### Technical Explanation with Bold Emphasis
> The JVM is a multithreaded environment. As we may know, the JVM gives us an abstraction of OS threads through the type `java.lang.Thread`. **Until Project Loom, every thread in the JVM is just a little wrapper around an OS thread**. We can call such implementation of the `java.lang.Thread` type as _platform thread_.

### Transition with Question
> So, we understood that we need a better approach to handle errors, at least in functional programming. Let's see how we can do it.

### Introducing a New Concept
> To start, you can think of a coroutine as a lightweight thread, which means it's not mapped directly to an OS thread. It's a computation that can be suspended and resumed at any time. So, before we can start looking at how to build a coroutine, we need to understand how to suspend and resume a coroutine.

### Comparing Approaches Fairly
> All three approaches are an elegant implementation of the Effect Pattern. They track effects in types, giving us compile-time safety. They defer execution until we're ready, separating description from action. They provide rich algebras for composing effects. They're used in production systems worldwide and have proven their worth. **But they share a challenge that we can't ignore: monadic composition has a steep learning curve.**

### Acknowledging Difficulty
> The execution of the `Continuation.run()` method performs a lot of native calls, and it's not easy to follow the execution flow. However, we can still look at some concepts at the roots of virtual threads.

### Empathetic Teaching
> If we noticed, in the logs we've seen so far, the execution control always changed when calling the `delay` suspending function. However, to understand it better, let's see another example.

---

## Usage Notes

When using this guide:
1. Start with the structure template
2. Use the voice and tone consistently
3. Apply formatting conventions systematically
4. Include domain examples that match the article topic
5. Review against the quality checklist before finalizing

This guide is based on analysis of 22+ articles written by Riccardo Cardin for Rock the JVM, covering Kotlin, Scala, Java, and functional programming topics.
