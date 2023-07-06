import Joi from 'joi';

export const Product: Joi.Schema = Joi.object({
  sku: Joi.number().required(),
  category_id: Joi.number().required(),
  product_name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  status_id: Joi.number().valid(1, 2).required(),
});
