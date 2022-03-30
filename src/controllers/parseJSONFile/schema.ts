import Joi from 'joi';

const dataSchema = Joi.object({
  user: Joi.string().required(),
  amount: Joi.number().required(),
});

export const inputSchema = Joi.array().items(dataSchema).required();
