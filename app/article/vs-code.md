---
title: "VS Code: an Artist's Canvas"
description: "Extending aesthetics to the developer experience"
published: true
---

# VS Code: an Artist's Canvas

VS Code needs no introduction as one of the best code editors out there, but it ships with a lot of cruft out of the box.

"We want our editor to feel more like an artist's canvas than a pilot's cockpit." — Caleb Porzio

If you're using VS Code, you've probably played around with well-designed apps like Arc, Notion, Linear, and other staples of the developer's toolkit. There's a certain *cleanliness* to them — hardly anything vies for your attention or gets in your way. It's a stellar user experience we've come to know & love. It's time we extend this grace to the *developer experience*.

I'll walk you through taking your VS Code from a fresh install to this:

<GalleryCard
  src="/assets/vs-code.png"
  alt="My VS Code setup"
/>

## Make it unobtrusive

Who needs [Subway Surfers](https://marketplace.visualstudio.com/items?itemName=jirkavrba.subway-surfers) when you've got the VS Code UI? Hit the Command Palette and jump into your `User Settings (JSON)`. Let's get trimming.

Remove the minimap:

```json
"editor.minimap.enabled": false,
"editor.scrollbar.vertical": "hidden",
```

Remove the top, bottom, and sidebar clutter:

```json
"breadcrumbs.enabled": false,
"window.commandCenter": false,
"workbench.editor.showTabs": "none",
"workbench.statusBar.visible": false,
"workbench.layoutControl.enabled": false,
"workbench.activityBar.location": "hidden",
"workbench.editor.editorActionsLocation": "hidden",
```

## Make it legible

I've seen a lot of "aesthetic VS Code" screenshots and they always seem to leave it here. I'm not sure why. For starters, we're able to read around 75 characters in one line before it becomes cumbersome. Notion's UI intentionally centers the page at a specific length, making it pleasant to read. Here's how I would recreate that:

- Launch the Command Palette and `Toggle Centered Layout`. Now, you can drag the sliders to your preferred reading length.
- Add a bit of top padding:

```json
"editor.padding.top": 200,
```

Note that when you enable Centered Layout, you'll notice some remnants from our subtraction earlier, such as the slider for Centered Layout. I personally prefer to hide these, so let's do that. You'll want to install the [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) extension, and follow the instructions to get the following snippet injected into VS Code:

```css
canvas.decorationsOverviewRuler {
  display: none !important;
}

div.split-view-view.visible::before {
  display: none !important;
}
```

## Make it look good

Font & theme choice is too subjective to be prescriptive, but if you're curious, I'm rocking [Commit Mono](https://commitmono.com) (my other picks are [Monaspace Neon](https://github.com/githubnext/monaspace), [iA Writer Mono](https://github.com/iaolo/iA-Fonts), and [Monocraft](https://github.com/IdreesInc/Monocraft)), [Vesper](https://github.com/raunofreiberg/vesper) (this site uses [Vercel](https://marketplace.visualstudio.com/items?itemName=achaq.vercel-theme)), and [Chalice](https://marketplace.visualstudio.com/items?itemName=artlaman.chalice-icon-theme).

You'll notice that regardless of which font & theme you choose, it's not quite there yet. We need to *let it breathe*. I keep font size at `15`, line height at `2.5`, and word wrap `on`.

```json
"editor.fontSize": 15,
"editor.lineHeight": 2.5,
"editor.wordWrap": "on",
```

Feel free to play around with the cursor:

```json
"editor.cursorSmoothCaretAnimation": "on",
"editor.cursorBlinking": "phase",
```

Lastly, I use a custom title bar:

```json
"window.titleBarStyle": "custom",
"window.title": "${folderName}: ${activeFolderShort} / ${activeEditorShort} ${dirty}",
"window.titleSeparator": " — ",
```

There's so much tinkering you could do. Making your dev environment feel like home is worth the extra half hour. Just don't forget to do the work. ;)
