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
router.get('/:bookId', getById);
router.patch('/:bookId', updateById);
router.delete('/:bookId', deleteById);

export default router;
