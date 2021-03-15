const { productNameSchema } = require('../validation');
const { getSingleProduct } = require('../services');

const validateProductName = (req, res, next) => {
  try {
    const { error } = productNameSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const checkIfProductExists = (req, res, next) => {
  try {
    const selectedProduct = getSingleProduct(req.params.productId);
    if (selectedProduct) {
      return next();
    }
    return res.status(404).json({ status: 'fail', message: 'Product does not exist.' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const checkProductOwner = (req, res, next) => {
  try {
    const selectedProduct = getSingleProduct(req.params.productId);
    if (req.user.email === selectedProduct.ownerEmail) {
      console.log(req.user);
      return next();
    }
    return res.status(403).json({ status: 'fail', message: 'Sorry, you cannot access this product.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
  validateProductName,
  checkIfProductExists,
  checkProductOwner,
};
