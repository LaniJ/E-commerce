const { addNewUser, getSingleUserByEmail } = require('../services');
const { convertDataToToken } = require('../utils');

const registerUser = (req, res) => {
  try {
    const userInfo = addNewUser(req.body);
    res
      .status(201)
      .json({ status: 'success', message: 'Registration successful.', data: userInfo });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const loginUser = (req, res) => {
  try {
    const { email, password } = req.body;
    const user = getSingleUserByEmail(email);

    if (user && user.password === password) {
      // added username
      const token = convertDataToToken({ email, username: user.username, isAdmin: user.isAdmin });
      return res.status(200).json({ status: 'success', message: 'Login successful.', data: { token, user } });
    }
    return res.status(401).json({ status: 'fail', message: 'Invalid login details' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
