This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This web application is designed to be a mutli-form front-end with user inputs that are merged into pre-made formats for sending to OpenAI. The response from OpenAI is then received and displayed in the textarea box on each selected form. There is also an optional Stripe paywall integration. As such there are multiple ENV variables that will be needed for each part of the app to function.

**Needed ENV Variables:**
NODE_ENV
OPENAI_API_KEY
AI_ORG_ID

NEXTAUTH_URL
NEXTAUTH_SECRET

AUTH0_ISSUER
AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET

STRIPE_SECRET_KEY

## Current API For AI

This app utilizes several api calls. To the backend, OpenAI, Stripe, and Auth0. After forking you will need to have these app accounts setup and use your own account to access them.

This project best displays my use of Next.js App Router, RestAPIs, a grasp of Promises and Await in Javascript, and React. Further you'll find that you can probably integrate a MongoDB step in the API to save responses and redeliver them on a per user basis, keyed into their emails from the session object.

## Deploy via Vercel

This app was designed to deploy to Vercel with a .env.local file containing the envoironment variables. Feel free to re-design or make it your own. Add more functionality or just appreciate the code.

Email - anthony.r.programmer at gmail.com
https://www.linkedin.com/in/anthony-ra1/
