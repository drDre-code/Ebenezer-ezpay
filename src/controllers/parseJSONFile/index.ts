import { Context } from 'koa';
import { inputSchema } from './schema';

export const parseJSONFile = async (ctx: Context): Promise<void> => {
  const { error, value } = inputSchema.validate(ctx.request.body);
  if (error) {
    ctx.response.status = 400;
    ctx.response.body = {
      success: false,
      message: error.details.map(({ message }) => message),
    };
    return;
  }
  ctx.response.status = 200;
  ctx.response.body = {
    success: true,
    data: value,
  };
};
