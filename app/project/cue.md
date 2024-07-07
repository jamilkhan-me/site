---
title: "Cue"
description: "A minimalist active recall study app focused on helping students ask the right questions. Transform your notes into actionable study cards for easy pasting back into Google Docs or Notion, or export to Anki."
published: true
og_image: "/og/cue.png"
---

# Cue

Cue is a minimalist active recall study app focused on helping students ask the right questions. Transform your notes into actionable study cards for easy pasting back into Google Docs or Notion, or export to Anki.

<GalleryCard
  src="/og/cue.png"
  alt="Cue wordmark banner"
/>

<TableOfContents
  entries={[
    "Inspiration",
    "Hackathon",
    "Features"
  ]}
/>

## Inspiration

Cue was born at Dons Hack 2023 — an annual Spring hackathon, hosted by our friends at the Association for Computing Machinery × Women in Tech, at the University of San Francisco.

The timing for an AI-powered study app was just right:

- It was March–April 2023, and [OpenAI had just announced GPT-4](https://openai.com/research/gpt-4)
- That semester, I was taking European history, a note-heavy course
- The theme for the hackathon was ed-tech: build a solution that solves a problem in education

So, what's the problem we're solving? There are plenty of flashcard apps out there. The thing is, they assume you already know what to study. My friend & teammate <Mention name="Sanjana" avatar="/avatars/sanjana.jpeg" link="https://github.com/sanjanarattan" /> and I thought to leverage what we know about active recall — one of the most efficient, science-backed study methods — to create a tool that **helps students ask the right questions**.

## Hackathon

I had about three months' worth of web dev experience at this point, and had to learn a lot, fast. That's one of the great things about hackathons — win or lose, you'll likely walk away knowing a hell of a lot more than you did coming in. And learn I did. Cue was my first production project writing:

- [React](https://react.dev) & [Next.js](https://nextjs.org)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- OpenAI API
- [Vercel KV](https://vercel.com/docs/storage/vercel-kv)
- [NextAuth](https://github.com/nextauthjs/next-auth)
- [Sass](https://sass-lang.com)

Around this time, I was also getting into UI design, so I really wanted to push myself and have it stand out from the crowd.

<GalleryCard
  title="Cue icon set"
  description={<p>I may or may not have spent 50% of our hackathon time in Figma. :p</p>}
  src="/assets/cue-icons.png"
/>

The vibes were great:

<GalleryCard
  title="compsigh teams at Dons Hack 2023"
  description={<p>Even though we were all competing, we knew a win for any team from <Link href="/projects/compsigh">my computer science club compsigh</Link> was a win for all of us. So, we'd work together in one room and would help each other out.</p>}
  src="/assets/cue-donshack-compsigh-teams.JPG"
/>

<Spacer size={32} />

<GalleryCard
  title="Saturday night desk setup"
  description={<p>It was time to lock in.</p>}
  src="/assets/cue-donshack-latenight.JPG"
  alt="My desk setup on Saturday night. Pictured is my dual-monitor setup (code on one, API docs and live preview on the other) and a cup of tea."
/>

Oh, and we won, too. :)

<GalleryCard
  src="/assets/cue-donshack-certificate.JPG"
  alt="A certificate congratulating me for winning Best App at Dons Hack 2023."
/>

## Features

So, what does Cue actually do?

Its primary function is to take your study notes, and return the most relevant questions to quiz yourself on.

<GalleryCard
  title="Cue beta demo from May 2023, not long after the hackathon"
  src="/assets/cue-may2023-beta-demo.gif"
/>

I'm happy to say we continued working on Cue after Dons Hack, and shipped some pretty cool features.

### Invite system

<GalleryCard
  title="In-app invites"
  description={<p>From day one, we made the app open to all USF students for free, but we wanted an invite system for our friends &amp; family elsewhere. Here we hooked up Typeform to an API that would generate an invite code like <code>gaius-julius-caesar</code> (I was really into that European history class).</p>}
  src="/assets/cue-invite-demo.gif"
/>

<Spacer size={32} />

<Grid columns={2} columnSizeDistribution={["1fr", "3fr"]}>
  <GalleryCard
    src="/assets/cue-invite-cards.gif"
    alt="A demo of physical Cue invite cards with unique QR codes on the back"
  />
  <div>
    <p>We really liked the idea of invites, and we went all out, because why not?</p>
    <p>We produced a set of 50 <em>physical</em> invite cards, each with their own unique invite linked via QR code.</p>
    <p>Invites had conditions like <code>no-invite</code> (invited students can&apos;t also +1) to help us scale reasonably.</p>
    <p>We also gave these out at USF&apos;s annual Spring event for incoming freshmen.</p>
  </div>
</Grid>

### Waitlist

I [posted about Cue on X](https://x.com/edwardshturman/status/1662181707955486722) and we got a decent amount of students signing up for the beta. In August 2023, we sent out the invites.

<GalleryCard
  title="Waitlist invite email"
  src="/assets/cue-waitlist-email.gif"
/>

Since then, we've put development on pause as we push through a heavy junior year in computer science. We hope to return shortly thereafter!

In the meantime, you can check out Cue's [landing page](https://cue.study), [documentation](https://docs.cue.study), and [source code](https://github.com/compsigh/cue).
