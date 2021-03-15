const { Router } = require('express');

const {
  createProduct,
  editProduct,
  getProduct,
  deleteSelectedProduct,
  allProducts,
  getUserProducts,
} = require('../controllers');

const {
  validateProductName, checkIfProductExists, authenticate, checkProductOwner,
} = require('../middlewares');

const productRouter = Router();

productRouter.get('/products', allProducts);

productRouter.use(authenticate);

// create product
productRouter.post('/addproduct', validateProductName, createProduct);

productRouter.use('/product/:productId', checkIfProductExists, checkProductOwner);

productRouter.put('/product/:productId', validateProductName, editProduct);
productRouter.get('/product/:productId', getProduct);
productRouter.delete('/product/:productId', deleteSelectedProduct);

// productRouter.get('/product', allProducts);
productRouter.get('/userproduct', getUserProducts);

module.exports = productRouter;
