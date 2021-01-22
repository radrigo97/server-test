import { Router } from 'express';
import info from './info';

const infoRouter = Router();

infoRouter.post('/', info);

export default infoRouter;
