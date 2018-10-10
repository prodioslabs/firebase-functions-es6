const optionsMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).send();
  }
  return next();
};

export default optionsMiddleware;
