[![Seed Status](https://api.seed.run/sourcierltd/friendly-broccoli/stages/staging/build_badge)](https://console.seed.run/sourcierltd/friendly-broccoli) [![Seed Status](https://api.seed.run/sourcierltd/friendly-broccoli/stages/prod/build_badge)](https://console.seed.run/sourcierltd/friendly-broccoli)

## Getting Started

## Quickstart

```bash
git clone git@github.com:sourcier/uk.sourcier.content.git
git clone git@github.com:sourcier/friendly-broccoli.git
cd friendly-broccoli
touch .env
```

Add:

- `TINACMS_CLIENT_ID`
- `TINACMS_TOKEN`
- `TINACMS_REMOTE_ROOT_PATH` - relative path (from packages/frontend) to the markdown content store on your machine

env variables, `TINACMS_CLIENT_ID` and `TINACMS_TOKEN` can be found in 1Password or the tinacms dashboard.

To get images to load correctly from the content repo you do the following:

```back
cd friendly-broccoli/packages/frontend/public
ln -s $TINACMS_REMOTE_ROOT_PATH/public/media/ media
```

Run the development server:

```bash
npm run dev -w packages/frontend
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environments

Staging: [staging.sourcier.uk](https://staging.sourcier.uk), [d2aqywhkdsx1tj.cloudfront.net](https://d2aqywhkdsx1tj.cloudfront.net)

## Resources and credits

This system is fully coded and built on top of Open Source, more details here:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [tailwindcss](https://tailwindcss.com/docs/installation)
- [headless ui](https://headlessui.com)
- [tinacms](https://tina.io)
