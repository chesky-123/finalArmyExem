import { Router } from 'express'
import { authExsist } from '../midllwares/auth.midll.js';
import { createAuth, deleteAuth, getAllAuth, getAuthByEmail, loginUser, putAuth } from '../ctrls/auth.strl.js';
import { authenticate } from '../utils/verifyToken.js';


export const router = Router();

router.get('/', getAllAuth)

router.post("/login",authExsist ,loginUser)

router.get('/me',authenticate , getAuthByEmail)

router.post('/register', createAuth)

router.delete('/users/:id', authExsist, deleteAuth)

// router.put('/users/:id',authExsist ,putAuth)
