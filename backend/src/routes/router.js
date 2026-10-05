import { Router } from 'express'
import { createAlert, deleteAlert, getAlertByld, getAllAlerts, putAlert } from '../ctrls/alert.ctrl.js';

export const router = Router();

router.get('/', getAllAlerts)

router.get('/:id', getAlertByld)

router.post('/', createAlert)

router.delete('/:id', deleteAlert)

router.put('/:id', putAlert)
