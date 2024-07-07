---
title: "DEPLOY/23"
description: "The first hackathon hosted by my computer science club compsigh, and our biggest event of the Fall 2023 semester. An entirely student-bootstrapped, three-day event, bringing together the best minds in CS, design, and engineering to hack on a project for a weekend."
published: true
og_image: "/og/deploy23.png"
---

# DEPLOY/23

The first hackathon hosted by [my computer science club compsigh](/projects/compsigh), and our biggest event of the Fall 2023 semester. An entirely student-bootstrapped, three-day event, bringing together the best minds in CS, design, and engineering to hack on a project for a weekend.

<TableOfContents
  entries={[
    "Story",
    "Trailer",
    "Platform"
  ]}
/>

<GalleryCard
  src="/assets/deploy-intro.gif"
/>

## Story

A hackathon is a life-changing experience.

For three days, you put yourself through hell, make lifelong memories with friends, and feel like a rebellious group of misfits, trying to make the world a better place. And when you get up on that stage, and you give it your all, you become the main character, sharing your Hero's Journey.

Despite the fact compsigh is one of the more chill clubs at the University of San Francisco, we knew we couldn't skimp on quality. Cyberpunk vibes. AI-generated trailer. Custom-built platform for participants. DEPLOY/23 was about delivering that life-changing experience through pixels & prose.

## Trailer

For a hackathon with a cyberpunk vibe, I felt it'd be appropriate to make an event trailer using AI. In collaboration with our friends at Game Design Club (shoutout to Andrew, Jake, Dorian, Lauren, and Lillian), we wrote up some lore, and crafted a storyboard.

<GalleryCard
  src="/assets/deploy-storyboard.jpg"
  alt="A picture of the DEPLOY/23 trailer storyboard, drawn out on a whiteboard"
/>

We drew inspiration from games, aesthetics, and stories we'd all grown up with. Those included:

- [VALORANT Protocol 781-A trailer](https://youtube.com/watch?v=h6i8lM3egvI)
- [Revenant from Apex Legends](https://youtube.com/watch?v=75szF5i41Bw)
- Orwellian dystopia stories
- [Ghost in the Shell](https://en.wikipedia.org/wiki/Ghost_in_the_Shell_(1995_film))
- [Winter Soldier](https://youtube.com/watch?v=2bWWBjKEiZA)
- [Watch Dogs 2](https://ubisoft.com/en-us/game/watch-dogs/watch-dogs-2)
- Cybernetics
- [The Matrix](https://en.wikipedia.org/wiki/The_Matrix)
- [Rust](https://rust.facepunch.com)
  - Thanks to OST artist [Alex Rehberg](https://alexrehberg.com) for the track Wastes, used in the trailer

I used [Midjourney](https://midjourney.com) to create each shot as a static image. Then, I used [Runway](https://runwayml.com) to give it life. Finally, I upscaled all outputs using [Topaz Labs](https://topazlabs.com).

[Watch the DEPLOY/23 trailer](https://youtube.com/watch?v=EepB7ZA1zNw) on YouTube.

## Platform

If we're going to up the quality, Devpost and Google Forms won't cut it. I set out to design-engineer a custom platform for participant registration, team formation, and project submission. We also needed it to accommodate our logistics and workflow for the event, which was in Notion.

Here's the result, written in React & Next.js, auth via NextAuth, forms via Tally, and logistics via Notion API:

<GalleryCard
  src="/assets/deploy-platform.gif"
  alt="A gif of the DEPLOY/23 landing page"
/>

<Spacer size={10} />

<GalleryCard
  src="/assets/deploy-platform-console.png"
  alt="A screenshot of the DEPLOY/23 Console, where participants can register, form their teams, and submit their projects"
/>

<Spacer size={10} />

<GalleryCard
  src="/assets/deploy-platform-submission.png"
  alt="A screenshot of the DEPLOY/23 project submission form"
/>

You can [read the technical breakdown](https://github.com/compsigh/deploy) on our GitHub repo.

Shoutout to <Mention name="Jet" avatar="/avatars/jet.jpg" link="https://jetpham.com" />, Quinn, Calvin, and Ani for helping organize this event and keep things running throughout the weekend. All in all, it was exhilerating putting it on, and I look forward to DEPLOY/24.

<GalleryCard
  src="/assets/deploy-presenters.jpeg"
  alt="A picture of the DEPLOY/23 presenters on stage"
/>
