# Tessera — Tile Gallery

A tile showcase website built with Next.js. Browse tiles by category, search the gallery, view detailed product pages, and manage your profile after signing in.

**🔗 Live URL:** [b13-a08-apple-tile.vercel.app](https://b13-a08-apple-tile.vercel.app/)

## Features

- Home page with banner, marquee, and featured tiles
- Searchable tile gallery
- Tile details page with price, dimensions, and stock info
- Auth (email/password + Google) via BetterAuth
- Profile page with name/image update
- Loading, error, and not-found states
- Fully responsive

## Tech Stack

Next.js (App Router) · HeroUI · BetterAuth · MongoDB · Tailwind CSS

## Routes

- **Public:** `/`, `/tiles`, `/signin`, `/signup`
- **Private:** `/tiles/[id]`, `/profile`

## Getting Started

```bash
npm install
npm run dev
```

Add a `.env.local` with your `MONGODB_URI`, `BETTER_AUTH_SECRET`, and Google OAuth keys.