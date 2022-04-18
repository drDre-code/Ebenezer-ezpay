import Joi from 'joi';

export const paymentAuthSchema = Joi.object({
  service: Joi.string().required(),
});
