## Getting Started

## Resources and credits

This system is fully coded and built on top of Open Source, more details here:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [tailwindcss](https://tailwindcss.com/docs/installation)
- [headless ui](https://headlessui.com)
- [tinacms](https://tina.io)

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

Run the development server:

```bash
npm run dev -w packages/frontend
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content schema changes

If you make a change to the content schema in `packges/frontend/tina/config.js` these changes will need to be manually syned to the content repo. You can do this by copying over:

- packages/frontend/tina/config.ts
- packages/frontend/tina/tina-lock.json

Then creating a commit, this commit will need to be pushed before merging your PR.
