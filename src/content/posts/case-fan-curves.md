---
title: 'Your fan curve is probably too aggressive'
description: 'Most stock fan curves react to a temperature that does not matter, and the fix takes about four minutes in the BIOS.'
pubDate: 2026-06-11
tags: ['hardware', 'cooling']
---

Stock fan curves ramp on CPU package temperature, which spikes to 80 °C for a quarter of a second
every time something opens a browser tab. The fans hear about it and surge. You hear the surge.
Nothing was ever actually hot.

Two changes fix almost every noisy build I have been sent:

1. **Add a fan-step delay.** Most boards call it _Fan Step Up/Down Time_ or _Smoothing_. Set it to
   2–4 seconds. The fans now ignore spikes shorter than the delay, which is all of them.
2. **Curve off the right sensor.** If your board can drive case fans from a motherboard or VRM
   sensor instead of CPU package, use it. Those move slowly, which is the entire point.

A curve that sits at 40% until 60 °C, ramps gently to 70% by 80 °C, and only goes past that in a
genuine emergency is quieter and — measured over a half-hour load test — lands within about 2 °C of
an aggressive curve. Two degrees is not worth listening to a jet engine every time Discord loads.

Set it, run something demanding for twenty minutes, and check that the fans settle rather than
oscillate. If they oscillate, the delay is still too short.
