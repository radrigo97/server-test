import { Router } from 'express';
import deleteAll from './deleteAll';
import deleteById from './deleteById';
import search from './search';
import getById from './getById';
import create from './create';
import update from './update';

const router = Router();

router.post('/', create);
router.post('/search', search);
router.get('/:bookId/', getById);
router.patch('/:bookId/', update);
router.delete('/:bookId/', deleteById);
router.delete('/', deleteAll);

export default router;
