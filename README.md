# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start (Nitro)
- TypeScript
- React
- Tailwind CSS

## Deployment

This project uses TanStack Start, which is powered by [Nitro](https://nitro.unjs.io/). You can deploy it to various platforms by setting the `NITRO_PRESET` environment variable during the build process.

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages.
2. Set the build command to `npm run build`.
3. Set the output directory to `.output/public`.
4. Add an environment variable `NITRO_PRESET=cloudflare-pages`.

### Vercel

1. Connect your repository to Vercel.
2. Vercel should auto-detect the configuration, but if needed:
3. Set the build command to `npm run build`.
4. Set the output directory to `.output/public`.
5. Add an environment variable `NITRO_PRESET=vercel`.

### Local Use

To download and run this project on your notebook:
1. Click the **Export** or **Download** button in the Lovable interface.
2. Extract the ZIP file.
3. Open your terminal in the project folder.
4. Run `npm install` (or `bun install`).
5. Run `npm run dev` to start the development server.
