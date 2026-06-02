# Personal Portfolio - Lucas Giavelli

Personal portfolio built with [Astro](https://astro.build/), designed to showcase my projects and skills as a full-stack developer.

## Features

- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS 4.x
- **Internationalization**: Multi-language support (es, en, it)
- **Deployment**: GitHub Pages via GitHub Actions
- **Optimization**: Static site generation with optimized performance

## Project Structure

```text
/
├── src/
│   ├── assets/              # Static assets (images, favicon)
│   ├── components/          # Reusable UI components
│   ├── data/                # Typed data (projects, experience, skills)
│   ├── i18n/                # Translation files (es.ts, en.ts, it.ts)
│   ├── layouts/             # Page layouts
│   │   └── Layout.astro     # Main layout (nav, footer, head)
│   ├── pages/               # Route pages
│   │   ├── [lang]/
│   │   │   ├── index.astro  # Home page
│   │   │   └── about.astro  # About page
│   │   └── index.astro      # Redirect to default locale
│   └── styles/              # Global styles
│       └── global.css       # Tailwind + custom theme
├── public/                  # Static files
│   ├── favicon.svg
│   └── favicon.ico
├── package.json
└── astro.config.mjs
```

## Commands

| Command            | Action                                           |
| :----------------- | :----------------------------------------------- |
| `npm install`      | Install dependencies                             |
| `npm run dev`      | Start local server at `localhost:4321`            |
| `npm run build`    | Build static site to `./dist/`                   |
| `npm run preview`  | Preview production build locally                  |
| `npm run astro`    | Run Astro CLI commands                           |

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions.

## Links

- [Astro Documentation](https://docs.astro.build)
- [GitHub Repository](https://github.com/Nbks/mi-portafolio)
