import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import cors from '@koa/cors';
import KoaRouter from 'koa-router';
import { logger } from './logger';
import { errorMiddleware } from './middleware';
import { parseJSONFile } from './controllers';

const app = new Koa();

app.use(koaBody());
app.use(cors());

app.use(errorMiddleware({ logger }));

const router = new KoaRouter();

router.post('/parse-json', parseJSONFile);

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
