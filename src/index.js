import express from 'express';
import errorHandler from './module/core/arrowHandler';
import logger from './module/core/logger';
import parseResponse from './module/core/parseResponse';
import cors from './module/core/cors';
import routes from './module/core/routes';

const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
cors(app);
routes(app);

// app.get('/', home);
// app.post('/info', info);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
