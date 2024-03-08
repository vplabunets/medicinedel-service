const createError = require('http-errors');

function validateBody(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(createError(404, error.message));
    }
    return next();
  };
}

module.exports = { validateBody };
