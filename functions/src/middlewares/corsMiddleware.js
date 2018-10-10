const corsMiddleware = (req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,HEAD,DELETE',
    'Access-Control-Allow-Headers':
      'Content-Type,Accept,Accept-Language,Content-Encoding,X-Requested-With,authorization',
  });

  return next();
};

export default corsMiddleware;
