import * as functions from 'firebase-functions';
import express from 'express';

import ping from './api/ping';

import { corsMiddleware } from './middlewares';

const router = express.Router();
const app = express();

// register middlewares here
router.use(corsMiddleware);

// register api endpoint here
router.use('/ping', ping);

// mount app here
app.use('/v1', router);

export const api = functions.https.onRequest((req, res) => app(req, res));
