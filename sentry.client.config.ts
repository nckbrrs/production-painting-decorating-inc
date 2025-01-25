// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://a29dad77689ec81fb4ebf97dfd0de4b9@o4508701979181056.ingest.us.sentry.io/4508701981671424",

	// Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
	tracesSampleRate: 1,

	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,

	integrations: [Sentry.replayIntegration()],

	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0
});
