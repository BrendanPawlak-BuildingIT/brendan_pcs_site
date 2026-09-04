---
title: 'The $1,400 build I keep recommending'
description: 'A 7800X3D gaming build that has not changed much in a year, the parts I would still buy today, and the two I would swap.'
pubDate: 2026-08-18
tags: ['builds', 'hardware']
cover: '../../assets/sample-cover.jpg'
coverAlt: 'A completed PC build on a workbench, side panel off.'
featured: true
---

Every few weeks someone asks for a parts list around $1,400. I have been sending the same one since
last autumn with only two changes, which is unusual — most lists rot in a month. Here is the current
version, what each part is actually doing, and where I would spend more if the budget moved.

## The list

| Part    | Pick                           | Price | Why                                               |
| ------- | ------------------------------ | ----- | ------------------------------------------------- |
| CPU     | Ryzen 7 7800X3D                | $339  | Still the best 1440p gaming chip per watt         |
| Cooler  | Thermalright Peerless Assassin | $35   | Matches $90 air coolers within 2 °C               |
| Board   | B650 (DDR5, 2× M.2)            | $145  | Nothing exotic; VRM is fine for a non-OC X3D      |
| Memory  | 32 GB DDR5-6000 CL30           | $88   | The sweet spot for AM5 — EXPO on and forget       |
| GPU     | RTX 4070 Super                 | $589  | 1440p at high settings without a PSU upgrade      |
| Storage | 2 TB Gen4 NVMe                 | $110  | One drive, no games-on-a-second-disk nonsense     |
| PSU     | 750 W ATX 3.0                  | $95   | Headroom for a future GPU, native 12V-2×6         |
| Case    | Mid tower, mesh front          | $80   | Airflow beats looks; you will hear the difference |

That lands at **$1,481** before rebates and roughly **$1,400** if you are patient about the GPU.

## What I would change

The two swaps, in order of how much they matter:

1. **The case.** I originally specced a tempered-glass front panel because it looked good in the
   video. Under load the CPU ran 6 °C hotter than the same parts in a mesh case. Looks lost.
2. **The PSU.** 650 W was enough on paper and is still enough. But every second build I do ends
   with someone dropping in a bigger GPU eighteen months later, and 750 W costs $12 more.

## Why the X3D still wins here

The short version: games are usually waiting on memory, not on clock speed. The extra L3 cache means
fewer trips to RAM, and the effect is large enough that a chip clocked lower than its non-X3D
sibling beats it in most titles while pulling noticeably less power under a gaming load.

> If you are building for compiling, rendering, or anything that scales with cores, this is the
> wrong chip and you should ignore everything above.

## Things people get wrong on this build

- **Skipping EXPO.** Out of the box the DDR5-6000 kit runs at 4800. Turning EXPO on in the BIOS is
  the single biggest free performance gain in the whole build, and about a third of the people who
  message me have not done it.
- **Front-mounting the cooler's fan.** The Peerless Assassin ships with two fans. Both go on the
  heatsink, pointing at the rear exhaust, not at the front intake.
- **Buying a second SSD for games.** One 2 TB drive is faster, cheaper per gigabyte, and one less
  thing to fail.

That is the whole build. It is boring, and boring is the point — nothing in here is a part I would
have to defend in a comment thread.
