---
title: "Make your VS Code as Canvas"
description: "Extending aesthetics to the developer experience"
published: true
---

# Make your VS Code as Canvas

**Hey there!** 👋
Let's chat about making VS Code look awesome and work even better for you. You know, Caleb Porzio had this great quote about wanting editors to feel more like an artist's canvas than a complicated cockpit. That's exactly what we're going for with VS Code!

So, VS Code is like the go-to canvas for developers these days. Millions of us use it every day to build cool stuff. And just like how an artist wants a clean canvas to work their magic, we developers want our VS Code to be neat, tidy, and not get in our way.

**Want to know how I set up my VS Code? It's pretty sweet, and I can walk you through it:**

### Remove the clutter

There are so many bits and pieces every side of the VS code. I call them clutter. Cause they've never been used, rather they obstruct our productivity. that's why remove the clutter from the every side (top, bottom and sidebar) by following the command:

Go to `View` > `Command Pallete` > `Open User Setting (JSON)` :

```json
{
  "editor.wordWrap": "on",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "files.autoSave": "onWindowChange",
  "editor.scrollbar.vertical": "hidden",
  "breadcrumbs.enabled": false,
  "window.commandCenter": false,
  "workbench.statusBar.visible": false,
  "workbench.layoutControl.enabled": false,
  "workbench.activityBar.location": "hidden",
  "workbench.editor.editorActionsLocation": "hidden",
  "editor.fontSize": 15,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "phase",
  "editor.minimap.enabled": false,
  "workbench.editor.showTabs": "single"
}
```

### Change the default font and theme

Your VS code fonts and theme could be different than mine. It's all depend on personal preference. But I use `Menlo, Monaco, monospace` as my font and `Dark theme` as default theme.

Regardless of variation theme and font, you should keep your font size `15` and line height at `2.5` and word wrap `on`.

### Code formatter

Who doesn't love `prettier` to format the code. It needs no evidence to be the best format till date.

### Extentions

`Auto Close Tag` to automatically close HTML tags.

`Auto Rename Tag` to automatically update matching HTML tags.

`Color Highlight` to highlight colors in CSS code.

`Image Preview` to display an image preview next to the code

`Prettier` to automatically format code.

`Live Server` to create a live preview for the current project.

### Other settings

`Auto Save` set to `onFocusChange`, to automatically save files

`Default Formatter` set to `Prettier - Code formatter (esbnp.prettier-vscode)`, to enable the Prettier extension to format our code

`Format on Save` set to `true`, to have Prettier format our code each time we save it

`Word Wrap` set to `on`, to avoid vertical scrollbars for long content

`Tab Size` set to `2`, for better code readability
