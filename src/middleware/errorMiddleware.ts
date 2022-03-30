import { Next, ParameterizedContext } from 'koa';
import { Logger } from 'winston';

interface ErrorMiddlewareParams {
  logger: Logger;
}

export const errorMiddleware =
  ({ logger }: ErrorMiddlewareParams) =>
  async (ctx: ParameterizedContext, next: Next) => {
    try {
      await next();
    } catch (err: any) {
      logger.error(
        `Internal server error: ${err.message as string}\n${
          err.stack as string
        }\n`,
      );

      ctx.status = 500;
      ctx.body = {
        error: {
          success: false,
          message: err.message,
        },
      };
    }
  };
