# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Veda Javalagi's personal website, a static site hosted via GitHub Pages at https://vjavalagi.github.io/. It is plain HTML/CSS/JS with no build tooling, package manager, or framework — files are served as-is.

## Development

There is no build, lint, or test process. To preview changes, open the HTML files directly in a browser or serve the directory with any static file server, e.g.:

```
python3 -m http.server
```

Changes are published by pushing to `main` (GitHub Pages serves directly from the repo).

## Structure

- `index.html` — home/landing page
- `Technical.html` — resume page; embeds the resume via a Google Drive `iframe` and lists technical skills inline
- `CampusInvolvement.html` — organizations, service, and mentorship activities
- `function.js` — shared script included on every page (see Stylesheet toggling below)
- `images/` — all image assets referenced by the pages

Each HTML page duplicates the same `<header>`/`<nav>` and `<footer>` markup rather than sharing a template/partial, since there's no build step to compose includes. When editing nav links or footer social links, update all three HTML files together.

## Stylesheet toggling

`style.css` is the default stylesheet. `function.js` implements a toggle (bound to the 🎀 nav link via `onclick="toggleStyleSheet()"`) that swaps the page's `<link id="mainStyleSheet">` between `style.css` and `bowstyle.css`, persisting the choice in `localStorage` under `selectedStyleSheet` so it applies across page loads/navigation.

`aggiestyle.css` and `accessiblestyles.css` exist in the repo but are not referenced by any HTML file or by `function.js` — they are not part of the live toggle and are effectively unused/legacy.
