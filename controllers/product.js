const {
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllProductsForSingleUser,
} = require('../services');

const createProduct = async (req, res) => {
  try {
    const product = await addNewProduct(req.body, req.user.email, req.user.username);
    res
      .status(201)
      .json({
        status: 'success',
        message: 'Product created successfully.',
        data: product,
      });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const editProduct = async (req, res) => {
  try {
    const newProduct = await updateProduct(req.body, req.params.productId);
    // console.log(newProduct);
    // console.log(req.params.productId);
    res
      .status(200)
      .json({ status: 'success', message: 'Product successfully modified now.', data: newProduct });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const getProduct = async (req, res) => {
  try {
    const currentProduct = getSingleProduct(req.params.productId);
    res
      .status(200)
      .json({ status: 'success', message: 'Product fetched ', data: currentProduct });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const getUserProducts = async (req, res) => {
  try {
    const products = await getAllProductsForSingleUser(req.user.id);
    res.status(200).json({
      status: 'success',
      message: 'Users products fetched successfully.',
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong while fetching products.',
    });
  }
};

const allProducts = async (req, res) => {
  try {
    const productList = await getAllProducts();
    res.status(200).json({
      status: 'success',
      message: 'All shop products fetched ',
      data: productList,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong while getting products.',
    });
  }
};

const deleteSelectedProduct = async (req, res) => {
  try {
    await deleteProduct(req.params.productId);
    res.status(200).json({ status: 'success', message: 'Product deleted ' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
  createProduct,
  editProduct,
  getProduct,
  deleteSelectedProduct,
  allProducts,
  getUserProducts,
};
