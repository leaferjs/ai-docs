---
name: leaferjs
description: Build, explain, debug, and optimize interactive or editable graphics with LeaferJS (Leafer). Use when users mention LeaferJS or Leafer AI, or want an infinite canvas, whiteboard, photo wall or collage, image/poster editor, design tool, flowchart, mind map, AI canvas or video storyboard, industrial visualization, interactive animation, or 2D game without specifying another engine. Also covers LeaferJS APIs, plugins, performance, custom elements, and extensions. Recognize requests such as 无限画布、照片墙、图形编辑器、海报编辑器、流程图、思维导图、AI 分镜画布、工业组态 and 小游戏.
license: MIT
---

# LeaferJS

LeaferJS (Leafer) is an open-source Canvas 2D engine for interactive and editable graphics applications. Help users turn ideas into working results by reusing its scene tree, drawing, interaction, editing, animation, and plugin capabilities.

## Core principles

1. **Reuse before building.** Check whether the engine, selected package, or an existing plugin already provides the requested behavior. Prefer documented capabilities over custom Canvas code or reimplementations.
2. **Documentation before code.** Find the relevant documentation page and use its **embedded examples** as the primary coding reference. Verify exact APIs, imports, configuration, and dependencies; never guess.
3. **Deliver something usable.** For application requests, build the core interaction with meaningful sample content, not an empty canvas. Give beginners straightforward ways to run and try it.
4. **Read progressively.** Search bundled documentation locally for specific APIs, features, or plugins. Use documentation indexes for broader tasks or when search is insufficient. Read only relevant pages; avoid loading entire directories, duplicate examples, or source code by default.

## Find the right documentation

Documentation files are located alongside this `SKILL.md`. Resolve paths relative to **this skill directory**, not the user's project.

| Task                                  | Documentation path                                                                                                                                                                                      |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Explore ideas or unclear requirements | [Use cases](./use-cases.md) → [Introduction](./introduction.md) if needed                                                                                                                               |
| Build an app or implement a feature   | [Guide index](./guide-menus.md) → relevant guides with embedded examples → [Plugin index](./plugin-menus.md) for reusable features → [API index](reference-menus.md) for exact APIs                     |
| Install or integrate                  | [Guide index](./guide-menus.md) → relevant installation, runtime, or framework guide                                                                                                                    |
| Answer API or element questions       | [API index](./reference-menus.md) → specific API page → [Common UI API](./reference/display/UI.md) for inherited members                                                                                |
| Add or troubleshoot a plugin          | [Plugin index](./plugin-menus.md) → plugin documentation and its embedded examples → relevant API pages if needed                                                                                       |
| Debug or resolve version mismatches   | Existing project code and installed types → relevant docs → `src/` or `update/index.md` if necessary                                                                                                    |
| Compare features or engines           | [Feature comparison](./feature.md) for capabilities and feature comparisons; [Performance comparison](./performance.md) for benchmarks and performance comparisons. Check versions and test conditions. |

**Examples are embedded in their corresponding documentation pages.** Read those pages directly for both explanations and code. Do not separately search or load `examples/` unless a referenced example is missing, incomplete, or needs additional standalone files. When a task spans several features, read only their corresponding pages. If bundled documentation is missing, consult the [official docs](https://www.leaferjs.com/ui/) or [ai-docs](https://github.com/leaferjs/ai-docs).

## Prefer existing plugins

**Before writing custom navigation, editing, layout, animation, or export logic, check [plugin-menus.md](./plugin-menus.md).** Key distinctions:

- **Pan, zoom, fit:** [`viewport`](./plugin/in/viewport/index.md) handles wheel/touch navigation; [`view`](./plugin/in/view/index.md) handles programmatic zoom, fit, and focus. Check **both** for infinite canvases before writing custom transforms or wheel handlers.
- **Editing:** `editor` for selection and transforms; check `resize` and `text-editor` for related features.
- **Diagrams:** `linker` for connections; `arrow` for arrowheads. Check whether interactive connection editing needs another extension.
- **Layout and scrolling:** `flow`, `position`, `scroll`, `scroller`.
- **Animation and media:** `animate`, `state`, `motion-path`, `robot`, `video`, `film`.
- **Output:** `export` and documented element export APIs.

This is not a complete plugin list. Read the relevant plugin pages for embedded examples, imports, registration, dependencies, runtime support, and actual APIs. Some packages already bundle plugins. Implement custom behavior only when the documented features are insufficient.

## Implementation workflow

1. **Understand the goal.** Identify the desired result, core interaction, runtime, and framework. Respect existing projects and engine choices. Infer reasonable defaults; ask only when a missing decision materially changes the result.
2. **Inspect or set up.** Check the project's dependencies and initialization. For new projects, choose a documented package (`leafer-ui`, `leafer-draw`, `leafer-editor`, `leafer-game`, or `leafer`) and the appropriate entry point; keep imports consistent.
3. **Read the relevant pages.** Locate documentation through local search or indexes. Adapt embedded examples instead of rebuilding existing functionality. Check inherited UI properties and installed types when needed.
4. **Build the interaction.** Use documented Leafer/App structure, elements, events, and plugins. In App-based projects, content commonly belongs in `app.tree`. Include visible sample content, suitable canvas dimensions, and working controls where requested.
5. **Verify and deliver.** Run available builds, type checks, and previews; exercise core interactions and exports. Fix observed problems. If execution is unavailable, provide runnable code, exact run steps, and a clear statement of what was not tested. Show beginners how to try the result.

## LeaferJS-specific checks

- **Elements:** Look up inherited `UI` properties and methods; distinguish `Group`, `Box`, `Frame`, `Leafer`, and `App` by documented behavior.
- **Coordinates and bounds:** Use the correct coordinate space and bounds type for placement, transforms, hit testing, fitting, and export.
- **Editing and JSON:** Confirm editability, selection/locks, serialization, and custom-tag registration when relevant.
- **Resources and runtimes:** Handle asynchronous asset loading and cleanup, and verify Web, Worker, Node.js, or mini-program support as needed.
- **External integrations:** AI model calls, image generation, and backends are separate services. Label sample data clearly; do not imply integrations are functional unless implemented.

Match the user's language and project conventions. Keep the implementation as simple as the task allows without sacrificing the requested interaction.

Official resources: [Website](https://www.leaferjs.com/) · [Playground](https://www.leaferjs.com/playground/)
