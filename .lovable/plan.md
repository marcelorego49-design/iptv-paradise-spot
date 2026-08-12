---
name: Deployment preparation
description: Configure the project for Cloudflare Pages/Vercel and prepare files for local download.
type: feature
---

# Deployment Preparation

## Build Configuration
- TanStack Start uses Nitro as the underlying server engine.
- Nitro supports multiple deployment presets (Cloudflare Pages, Vercel, Node.js).
- For Cloudflare Pages, set `NITRO_PRESET=cloudflare-pages` during the build process.
- For Vercel, set `NITRO_PRESET=vercel`.

## Project Export
- The project is ready for local download via the "Export" or "Download" buttons in the Lovable interface.
- Includes `package.json`, source files, and configuration for standard React/TanStack Start environments.

## Technical Details
- Framework: TanStack Start v1
- Build Tool: Vite
- Deployment Engine: Nitro
- Package Manager: Bun (standard in the sandbox) or NPM/Yarn/PNPM for local use.
