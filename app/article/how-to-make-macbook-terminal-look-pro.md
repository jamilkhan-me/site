---
title: "How I Made the Default MacBook Terminal Look Pro"
description: "Build and harden your first EC2 instance — security groups, key pairs, user data bootstrapping, and the core concepts behind AWS SAA-C03's secure architecture domain."
published: true
date: "June 03, 2026"
tags: ["iTerm2", "Terminal",]


---


When I first started using my MacBook for development, the default Terminal worked perfectly fine—but it didn't feel inspiring. The plain appearance, basic prompt, and lack of useful information made it feel outdated compared to the modern development environments used by professional engineers.

After spending some time customizing it, I transformed the default macOS Terminal into a clean, modern, and highly productive workspace. In this article, I'll walk through the exact setup I use and how you can do the same.

## Why Customize Your Terminal?

As developers, we spend a significant portion of our day in the terminal. Whether you're working with Git, AWS, Docker, Node.js, or Linux servers, a well-configured terminal can:

* Improve productivity
* Reduce mistakes
* Make important information visible at a glance
* Create a more enjoyable development experience

A good terminal setup should provide:

* Git branch information
* Command suggestions
* Better file navigation
* Modern fonts and icons
* Clean visual design

## Step 1: Install Oh My Zsh

macOS uses Zsh as its default shell, and one of the best ways to enhance it is with Oh My Zsh.

Open Terminal and run:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Oh My Zsh adds:

* Hundreds of plugins
* Themes
* Improved command completion
* Git shortcuts

Immediately after installation, you'll notice a cleaner and more powerful shell experience.

---

## Step 2: Install the Powerlevel10k Theme

Powerlevel10k is one of the most popular terminal themes among developers.

Install it with:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Then edit your configuration:

```bash
nano ~/.zshrc
```

Update the theme setting:

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Save the file and reload:

```bash
source ~/.zshrc
```

Powerlevel10k adds useful information directly into your prompt, such as:

* Current Git branch
* Git status
* Execution time
* Programming language versions
* AWS profile
* Current directory

---

## Step 3: Install a Nerd Font

Many modern terminal themes use icons that require special fonts.

Powerlevel10k recommends the Meslo Nerd Font.

After installing the font:

1. Open Terminal Settings
2. Navigate to Profiles
3. Select Text
4. Change the font to MesloLGS Nerd Font

The result is a cleaner and more visually appealing terminal with icons that display correctly.

---

## Step 4: Enable Useful Plugins

One of the biggest advantages of Oh My Zsh is its plugin ecosystem.

Open:

```bash
nano ~/.zshrc
```

Update your plugins:

```bash
plugins=(git aws docker npm)
```

Reload:

```bash
source ~/.zshrc
```

These plugins provide shortcuts and productivity enhancements for commonly used tools.

For example:

```bash
gst
```

Instead of:

```bash
git status
```

---

## Step 5: Add Command Autosuggestions

This feature feels almost like autocomplete for your terminal.

Install:

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions \
${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Add it to your plugins list:

```bash
plugins=(git zsh-autosuggestions)
```

Reload:

```bash
source ~/.zshrc
```

As you type, previous commands appear as suggestions that can be accepted with a single key press.

This saves a surprising amount of time during daily development work.

---

## Step 6: Upgrade Common Commands

Several modern alternatives make terminal commands more useful and visually appealing.

Install Homebrew if you haven't already:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install some helpful tools:

```bash
brew install eza bat htop
```

### eza

A modern replacement for `ls`.

```bash
alias ls="eza --icons"
alias ll="eza -lah --icons"
```

### bat

A better version of `cat` with syntax highlighting.

```bash
bat app.js
```

### htop

An interactive process viewer.

```bash
htop
```

These small improvements make everyday terminal usage significantly more pleasant.

---

## Step 7: Customize the Appearance

A good color scheme can reduce eye strain and improve readability.

Some popular options include:

* Tokyo Night
* Catppuccin
* Dracula
* Nord
* Gruvbox

Experiment with different themes and choose one that fits your workflow and personal preference.

---

## My Final Setup

Today my terminal setup includes:

* macOS Terminal
* Zsh
* Oh My Zsh
* Powerlevel10k
* Meslo Nerd Font
* Git Plugin
* AWS Plugin
* zsh-autosuggestions
* eza
* bat
* htop

The result is a clean, modern terminal that provides useful information without feeling cluttered.

## Final Thoughts

Customizing your terminal isn't just about aesthetics. A well-designed terminal can make you faster, reduce context switching, and create a more enjoyable development environment.

If you're learning web development, cloud computing, or DevOps, investing a little time into your terminal setup is absolutely worth it. It's one of those small improvements that you'll benefit from every single day.

The best part? You can achieve all of this using the default macOS Terminal without installing heavy software or complex tools.

Happy coding!
