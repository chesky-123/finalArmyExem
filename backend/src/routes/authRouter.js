import { Router } from 'express'
import { authExsist } from '../midllwares/auth.midll.js';
import { createAuth, deleteAuth, getAllAuth, getAuthByld, putAuth } from '../ctrls/auth.strl.js';


export const router = Router();

router.get('/', getAllAuth)

router.get('/:id', getAuthByld)

router.post('/', createAuth)

router.delete('/:id',authExsist,  deleteAuth)

router.put('/:id',authExsist ,putAuth)
