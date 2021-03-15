const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

const convertDataToToken = (data) => jwt.sign(data, jwtSecret, { expiresIn: '1h' });

const verifyToken = (token) => jwt.verify(token, jwtSecret, (err, data) => ({ err, data }));

module.exports = { convertDataToToken, verifyToken };