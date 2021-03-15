const { loginUser, registerUser } = require('./user');
const {
  createProduct,
  editProduct,
  getProduct,
  deleteSelectedProduct,
  allProducts,
  getUserProducts,
} = require('./product');

module.exports = {
  loginUser,
  registerUser,
  createProduct,
  editProduct,
  getProduct,
  deleteSelectedProduct,
  allProducts,
  getUserProducts,
};
