# Voice Profile: Riccardo Cardin

*Extracted from 21 articles authored by Riccardo Cardin (`author: riccardo-cardin`) on the Rock the JVM blog. Corpus: 73,629 words of prose, 3,963 sentences. Templated promo blocks and the third-person "brought to you by" bios were stripped before lexical analysis. The two co-authored or mention-only pieces (`a-scala-project-with-akka-cats-and-cassandra`, `2021-retrospective`) were excluded, since their prose is Daniel's.*

## Data quality

Well above the thresholds for a reliable profile (100+ turns, 5,000+ words, multiple contexts). Topics span Java concurrency, Kotlin functional error handling, Scala effect systems, ZIO, Kafka, doobie, and value classes. Patterns below are consistent across all of them.

## Speaking style at a glance

- **Sentence length**: moderate, ~18.6 words average. Distribution: 14% short (under 8 words), 48% medium, 25% long, 12% very long. He varies rhythm deliberately, pairing a long explanatory sentence with a short punch ("So far, so good.").
- **Questions**: rare in prose (2.5%), and almost always rhetorical setups for the problem he is about to solve, never filler.
- **Person**: overwhelmingly first-person plural. He teaches by walking *with* the reader, not lecturing at them.
- **Tone**: confident and direct, low on hedging, low on overt enthusiasm. He earns trust through clarity, not exclamation marks.

## Communication style (share of style markers)

1. **Directness** (~40%): "we need to", "we must", "we want", "let's". He states what to do plainly.
2. **Storytelling** (~24%): "So,", "Now,", "First,", "then" sequencing. He narrates the build step by step.
3. **Certainty** (~13%): "always", "never", "of course", "indeed". States opinions as settled.
4. **Empathy** (~9%): "imagine", "every developer", "we all". Anchors abstract ideas in shared experience.
5. **Hedging** (~7%): low. "probably", "might", "i.e." used surgically, not to soften claims.
6. **Analytical** (~5%): "because", "however", "therefore", "in other words".
7. **Enthusiasm** (~2%): deliberately sparse. When it appears ("Ladies and gentlemen, please welcome..."), it lands because it is rare.

## Signature structural moves

These are the real fingerprint of his voice, more than any single word.

1. **The universal opener.** Every article starts with a broad, relatable claim that every developer recognizes, then narrows to the tension.
   - "Concurrency is a beast that every developer must face at some point in their career."
   - "Every Java developer has been there."
   - "The vast majority of applications today connect with some form of a persistent layer, and, sooner or later, every developer faces the challenge of connecting to a database."
   - "We love functional programming for good reasons. Pure functions are predictable. ... But here's the tension that every functional programmer faces: the real world is messy."

2. **The rescue beat.** After framing the problem, a "Fortunately..." sentence introduces the tool that saves the day.
   - "Fortunately, Project Loom is here to help."
   - "Fortunately, a library called doobie provides a higher-level API on top of JDBC."

3. **The roadmap.** A closing intro sentence states exactly what the article will cover: "In this article, we will explore...".

4. **Checkpoints.** Short reassurance markers that pace the tutorial: "So far, so good.", "As we can see,", "As we said,".

5. **The setup ritual.** "As usual, we'll start by...", "First, let's define an example to work with.", "let's add the following dependencies".

6. **The sign-off transition.** "So, without further ado, let's get started." / "let's introduce...".

7. **Occasional playful flourish.** A theatrical line breaks the technical register just enough: "Ladies and gentlemen, please welcome the value classes."

## Characteristic expressions

Ranked by frequency in the cleaned corpus:

- "As we..." (237x) and "As we can see" / "As we said" (the dominant connective)
- "For example" (82x), "In fact" (64x)
- "So we...", "If we...", "Then we...", "First we...", "Now we..." (step sequencing)
- "In detail," (28x) before a deep dive
- "However, the..." (26x) for the pivot
- "Let's see..." (23x)
- "That is," and "i.e.," for restating precisely
- "the problem is", "the trick is"

## Sentence starters

- "We can..." (160x), by far the most common
- "As we..." (92x)
- "For example..." (82x)
- "In fact..." (64x)
- "So we..." (50x), "If we..." (41x), "Then we..." (39x)
- "First we...", "Now we...", "We need...", "We want...", "Let's see..."

## Vocabulary

The frequency-ranked nouns are **domain terms, not voice**: type, library, code, example, effect, value, class, types, compiler, object, pattern, data, result, functional. Treat these as the subject matter of JVM tutorials, not a stylistic signal.

The genuinely stylistic vocabulary is the connective and pedagogical layer: **let's, as, we, first, following, in detail, however, moreover, fortunately, indeed, hence, in fact**.

## Punctuation and register

- Formal connectors over casual ones: "Hence,", "Moreover,", "However,", "Thus,". The register is professional but warm.
- He builds long sentences with **commas and clauses rather than em dashes**. Prose is comma-rich, dash-free. (This matches the house rule of avoiding dash characters in prose.)
- Inline emphasis is reserved for the one key term in a sentence, not scattered.

## Italian-inflected personality (the axis the lexical pass missed)

The frequency analysis above captures his grammar and connective layer accurately, but it smooths out a real part of the voice: Riccardo is a native Italian speaker, and his English carries a warm, lightly non-native personality. A profile that only counts words reads him as "restrained and clean" (enthusiasm 2%), which undercounts the asides, the calques, and the gentle humor that make the prose recognizably his. When matching the voice, restore these deliberately; they are sparse but load-bearing.

1. **Parenthetical asides.** He interrupts himself to editorialize, qualify, or wink at the reader.
   - "(to tell the truth, structured concurrency is still in the incubator module)"
   - "(don't use it in production!)"
   - A correctly-placed aside per section or two, never more.

2. **Italian calques and idioms.** Constructions carried over from Italian phrasing.
   - "to tell the truth" (*a dire il vero*) before a candid qualification.
   - Late placement of "also": "...bring modern concurrency paradigms ... also in the mainstream language of the JVM" (*anche* word order).
   - Slightly non-native connector use: "Whereas still in a preview phase, ...".

3. **Rhetorical question, snap answer.** A short doubt voiced, then dismissed in three words.
   - "Is it all doom and gloom? Not at all."
   - "So, are we doomed to write this forever? Not at all."

4. **Warm intensifiers and casual register.** The enthusiasm the lexical count misses lives in adjectives, not exclamation marks.
   - "a lot of exciting stuff", "one of the coolest", "very handy", "cool features", "a lot easier".

5. **Concrete, slightly playful vignettes.** Domain examples carry a human or comic hook, not just abstract entities.
   - "Imagine a drunk gambler at a casino who wants to flip a coin."

6. **Gentle knocks at the language under discussion.** Especially Java versus Scala/Kotlin, he names a limitation with a light editorial touch ("Java makes us pay a small tax here") rather than a neutral statement.

These do not contradict the restraint noted above. The register stays professional; the personality shows in *placement* (asides, vignettes) and *idiom* (calques), not in volume or punctuation. The failure mode in both directions is real: too little and the prose reads like polished native English that is not his; too much and it becomes a parody. Aim for roughly one personality beat per section.

---

## Recommendations for an author profile

If you maintain a structured author/voice profile for content generation, these settings reproduce the voice:

```yaml
tone:
  formality: 6        # professional, full words, formal connectors; never stiff
  opinionated: 7      # states claims as settled, low hedging
  enthusiasm: 3       # restrained in punctuation; warmth lives in adjectives + asides, not "!"
  directness: 8       # tells the reader what to do plainly
  italian_inflection: 6  # native-Italian warmth: asides, calques, vignettes, gentle knocks
person: first-person-plural   # "we", teaching alongside the reader

structure:
  opener: "universal relatable claim -> narrow to a concrete tension -> roadmap sentence"
  rescue_beat: "introduce the tool with 'Fortunately, ...'"
  pacing: "checkpoints ('So far, so good.', 'As we can see,') between build steps"
  setup_ritual: "'As usual, we'll start by...' before the first code block"

phrases:
  signature:
    - "As we can see"
    - "In fact"
    - "So far, so good"
    - "Fortunately, ..."
    - "without further ado, let's get started"
    - "In detail,"
    - "Let's see..."
    - "every developer has been there"
  italian_personality:
    - "to tell the truth"
    - "Is it all doom and gloom? Not at all."
    - "(don't use it in production!)"   # parenthetical aside
    - "one of the coolest", "very handy", "a lot of"  # warm intensifiers

vocabulary:
  use_freely: [let's, however, moreover, hence, in fact, in detail, fortunately, indeed]
  italian_seasoning: [to tell the truth, asides in parentheses, warm adjectives, playful vignettes]
  avoid: [em dashes in prose, exclamation-heavy enthusiasm, filler hedging, over-polished native phrasing that erases the asides and calques]

sentence:
  avg_length: 18-19 words
  variety: "mix long explanatory clauses with short punchy checkpoints"
  questions: "rare, only rhetorical problem-setups"
```

> Note: the repo's `authors` content collection schema (`src/collections/authors.ts`) is `.strict()` and the loader globs only `**/*.yaml`. These voice fields cannot be added to `index.yaml` without a schema error. This profile therefore lives as a standalone `.md` next to the author entry, which the loader safely ignores.

*Generated 2026-06-24 by the voice-extractor skill.*
