const { v4: uuidv4 } = require('uuid');
const { productArray } = require('../models');

const addNewProduct = (data, owner, username) => {
  const id = uuidv4();
  const obj = {
    ...data,
    id,
    ownerEmail: owner,
    ownerUsername: username,
    rating: 0,
  };
  productArray.push(obj);
  return obj;
};

const getSingleProduct = (id) => productArray.find((el) => el.id === id);

const findProductIndex = (id) => productArray.findIndex((el) => el.id === id);

const updateProduct = (data, id) => {
  const productDetails = getSingleProduct(id);
  const updatedProduct = { ...productDetails, ...data };
  const index = findProductIndex(id);
  console.log(index);
  console.log(id);
  productArray[index] = updatedProduct;
  // console.log(productArray);
  return updatedProduct;
};

const deleteProduct = (id) => {
  const index = findProductIndex(id);
  console.log(id);
  return productArray.splice(index, 1);
};

const getAllProducts = () => productArray;
const getAllProductsForSingleUser = (email) => productArray.filter((el) => el.ownerEmail === email);

module.exports = {
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllProductsForSingleUser,
};
