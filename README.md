## Project Set Up

First clone the repo and install dependancies, simple :)

```bash
git clone https://github.com/Adam-S-J/base-next-project.git
npm i
npm run dev
```

## Commands

```bash
    dev: Starts the development server on http://localhost:3000
    build: Builds the project for production
    start: Starts the production server on http://localhost:3000 (if a build has been generated)
    test: Runs the Jest testing library
    lint: Runs ESLint on all files
    storybook: Opens storybook in the browser
```

## Housekeeping

Before jumping into development;

    - Update the name of the root component in _app.tsx from 'MyApp' to something more relevant.
    - Also update the title of the project in the <Head> tag in Layout.tsx
    - update the favicaon in `/api/*` for an app specific icon.

## API

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Documentation

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Dependancies

-   React "18.2.0"
-   Next "12.2.3"
-   Typescript "4.7.4"
-   Tailwind "^3.1.6",
-   sass "^1.54.0",
-   Zustand "^4.0.0"
-   Storybook "^6.5.10" (Current version has 21 vulnerabilities. Most of these will be fixed with the release of version 7)
-   Jest "^28.1.3"
-   Eslint "^8.2.0"
-   Prettier "^2.7.1"
