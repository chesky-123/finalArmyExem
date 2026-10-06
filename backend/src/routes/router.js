import { Router } from 'express'
import { createAlert, deleteAlert, getAlertByld, getAllAlerts, putAlert } from '../ctrls/alert.ctrl.js';
import { alertExsist, latLonToNumber } from '../midllwares/alert.midll.js';

export const router = Router();

router.get('/', getAllAlerts)

router.get('/:id', getAlertByld)

router.post('/',latLonToNumber, createAlert)

router.delete('/:id',alertExsist,  deleteAlert)

router.put('/:id',alertExsist ,putAlert)
