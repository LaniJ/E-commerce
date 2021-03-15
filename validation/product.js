const Joi = require('joi');

const productNameSchema = Joi.object({
  name: Joi.string().min(3).max(70).required(),
  size: Joi.number().required(),
  color: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(7).required(),
});

// id: '719a6c77-f46e-43ba-bbdb-fd7fa890af72',
//     name: 'shoes',
//     size: 8,
//     color: 'blue',
//     description: 'Asos shoes made with original leather.',
//     ownerUsername: 'lan',
//     createdAt: Date.now(),
//     rating: 0,

module.exports = productNameSchema;
