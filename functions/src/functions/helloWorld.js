import * as functions from 'firebase-functions';
import express from 'express';

import { corsMiddleware, optionsMiddleware } from '../middlewares';

const app = express();

app.use(corsMiddleware);
app.use(optionsMiddleware);

app.get('/', (req, res) => res.json({
  success: true,
  data: {
    message: 'Hello from Firebase!',
  },
}));

export const helloWorld = functions.https.onRequest(app);
