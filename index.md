## History and Theory of Dynamic Media

### Creative Project 1: Fluxus Score

#### Mock Interview

For performance by three (3) people with four (4) Zoom enabled video/audio devices with four (4) Zoom accounts.

The three (3) participants will discuss necessary materials and decide who will take each role (one (1) role per participant).

Roles:
1. [Technical Difficulties (TD)](./technical_difficulties.html) - Requires two (2) Zoom enabled devices with two (2) Zoom accounts.
2. [Recruiter (R)](./recruiter.html) - Requires one (1) Zoom enabled device and one (1) Zoom account.
3. [Candidate (C)](./candidate.html) - Requires one (1) Zoom enabled device and one (1) Zoom account.

Once roles are decided, each participant should open the link to their role and proceed from there.

(**NOTE:** For demonstration purposes, this score may be performed in a single Zoom meeting via two breakout rooms, rather than two individual Zoom meetings, so long as one room contains both (R) and one (TD) account, and the other room contains both (C) and the other (TD) account. Any spectators in either room should ensure their audio is muted/disabled.)

### Creative Project 2: Chance Operations

#### Seed

Seed is an art prototype prompting contemplation of the nature of chance operations (herein pseudo-random number generation, or PRNG, functions) in a digital environment. It begins by calculating and displaying to the user the seconds passed since 00:00:00 UTC January 1, 1970 using the JavaScript Date.now function and invites them to choose a moment to seed various PRNGs.

Each PRNG function currently included generates a different initial root and branch (colored subtly differently) based off identical 32-bit hashed values created from the input seed. Seed suggests the user consider the appearance of chance as a literal function of time, but, after accepting an initial time-based seed, allows the user to enter their own values to playfully explore the different generated trees they can produce.

The background, an array of ever shifting circles, is meant to both colorfully suggest to the user they are experiencing Seed in a transitional period (e.g., dawn or dusk) and also to create a sense of nature ever shifting.

Depending on the volume at which one observes Seed, they may or may not notice a low-level "electrical" hum (potentially overwhelming at high volumes?) intentionally generated in juxtaposition of the more natural visual shapes and to create a sense of dissonant unease.

<iframe src="https://thatwhichis.github.io/history-and-theory-of-dynamic-media/cp2_chance-operations/" width="600" height="500"></iframe>

Attributions:

- JavaScript implementations of jsf32, sfc32, xmur3, and xoshiro128** by Stack Overflow user bryc
  - [User profile](https://stackoverflow.com/users/815680/bryc)
  - [Source](https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316)
  - These implementations subject to [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) per [Stack Overflow's Licensing Policies](https://stackoverflow.com/help/licensing) and [Source Timeline](https://stackoverflow.com/posts/47593316/timeline) as of June 12 2021
  - No changes were made

- jsf32 was designed by Robert Jenkins
  - [Source and Public Domain License](http://burtleburtle.net/bob/rand/smallprng.html)

- sfc32 was designed by Chris Doty-Humphrey
  - sfc32 is part of [PractRand](http://pracrand.sourceforge.net/)
  - [Public Domain License](http://pracrand.sourceforge.net/license.txt)

- xoshiro128** was designed by David Blackman and Sebastiano Vigna
  - [Source](https://prng.di.unimi.it/xoshiro128starstar.c)
  - [Public Domain License](https://creativecommons.org/publicdomain/zero/1.0/)

- MurmurHash was designed by Austin Appleby
  - [Source](https://github.com/aappleby/smhasher/tree/master/src)
  - [Public Domain License](https://github.com/aappleby/smhasher)

To my knowledge these attributions satisfy the requirements of their individual licenses but please let me know if there are any errors I can correct.