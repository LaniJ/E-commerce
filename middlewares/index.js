const { validateSignup, validateLogin, checkIfUserExists } = require('./user');
const { validateProductName, checkIfProductExists, checkProductOwner } = require('./product');
const { authenticate, adminAccessValidator } = require('./auth');

module.exports = {
  validateLogin,
  validateSignup,
  checkIfUserExists,
  validateProductName,
  checkIfProductExists,
  authenticate,
  adminAccessValidator,
  checkProductOwner,
};
