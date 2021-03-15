const {
  addNewUser,
  getSingleUserById,
  getSingleUserByEmail,
  deleteUser,
  updateUserProfile,
} = require('./user');

const {
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllProductsForSingleUser,
} = require('./product');

module.exports = {
  addNewUser,
  getSingleUserById,
  getSingleUserByEmail,
  deleteUser,
  updateUserProfile,
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllProductsForSingleUser,
};
