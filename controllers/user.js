const { addNewUser, getSingleUserByEmail } = require('../services');
const { convertDataToToken, hashPassword, comparePassword } = require('../utils');

const registerUser = async (req, res) => {
  try {
    const hashedPassword = hashPassword(req.body.password);
    const userInfo = await addNewUser({ ...req.body, password: hashedPassword });
    res
      .status(201)
      .json({ status: 'success', message: 'Registration successful.', data: userInfo });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getSingleUserByEmail(email);

    if (user && comparePassword(password, user.password)) {
      delete user.password;
      // added username
      const token = convertDataToToken({ email, id: user.id, isAdmin: user.isAdmin });
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
