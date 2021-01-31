import { Router } from 'express';
import deleteAll from './deleteAll';
import deleteById from './deleteById';
import getAll from './getAll';
import getById from './getById';
import create from './create';
import updateById from './updateById';

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:authorId/', getById);
router.patch('/:authorId/', updateById);
router.delete('/:authorId/', deleteById);
router.delete('/', deleteAll);

export default router;
