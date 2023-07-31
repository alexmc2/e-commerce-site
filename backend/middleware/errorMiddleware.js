const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404); // 404 is not found
  next(error); // pass error to error handler
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;


  // Check for Mongoose bad ObjectId

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
      message = 'Resource not found!';
      statusCode = 404;
  }
  
  res.status(statusCode);
  res.json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
export { notFound, errorHandler };
