import { app } from './app';
import { logger } from './logger';

const PORT: string = process.env.PORT || '3000';

app.listen(PORT, () => {
  logger.info(`Started on port ${PORT}`);
});
