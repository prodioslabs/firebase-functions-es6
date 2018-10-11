import express from 'express';

import { optionsMiddleware } from '../middlewares';

const router = express.Router();

router.use(optionsMiddleware);

router.get('/', (req, res) => res.json({
  success: true,
  data: 'pong',
}));

export default router;
