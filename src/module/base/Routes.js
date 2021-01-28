import { Router } from 'express';
import baseCreate from './create';
import baseDeleteAll from './deleteAll';
import baseGetAll from './baseGetAll';
import baseGetById from './baseGetById';
import baseUpdateById from './baseUpdateById';

const router = Router();

router.post('/', baseCreate);
router.delete('/', baseDeleteAll);
router.get('/', baseGetAll);
router.get('/:baseId', baseGetById);
router.patch('/:baseId', baseUpdateById);

export default router;
