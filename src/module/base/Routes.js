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
router.get('/:baseId/', getById);
router.patch('/:baseId/', updateById);
router.delete('/:baseId/', deleteById);
router.delete('/', deleteAll);

export default router;
