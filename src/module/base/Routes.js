import { Router } from 'express';
import deleteById from './deleteById';
import search from './search';
import getById from './getById';
import updateById from './updateById';
import create from './create';
import deleteAll from './deleteAll';

const router = Router();

router.post('/', create);
router.delete('/', deleteAll);
router.get('/', search);
router.get('/:baseId', getById);
router.patch('/:baseId', updateById);
router.delete('/:baseId', deleteById);

export default router;
