const { validationResult } = require("express-validator/check");

exports.requestValidation = (req, res) => {
  return new Promise((resolve, reject) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      reject();
    }
    resolve();
  });
};
