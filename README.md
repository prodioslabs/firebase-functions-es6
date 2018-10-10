# firebase-functions-es6

Boilerplate code for developing firebase functions with es6 support and live reload.

## Setup

- In the `.firebaserc` file update, change `projects.default` to the firebase project that you would be using.
- Run `firebase use <project-name>` to use a firebase project.

## Scripts

To run any `npm` script change the root directory to `functions`. Run

- `npm run build`: To transpile source code
- `npm run serve`: To serve (and watch) functions
- `npm run deploy`: To deploy firebase functions. Make sure to update `projects.default` in `.firebaserc` file to deploy correctly.
