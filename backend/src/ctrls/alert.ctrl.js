import { deleteAlertById, findAlertById, findAllAlerts, insertAlert, updateAlert } from "../DAL/alerts.dal.js";
import { alertSchema, updateAlertSchema } from "../validations/alert.validation.js";


export async function createAlert(req, res) {
    try {
        const validData = alertSchema.parse(req.body)
        console.log(validData);

        const result = await insertAlert(validData);
        res.status(201).json({ message: 'alert created successfuly' })

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "server faild" })
    }
}


export async function getAllAlerts(req, res) {
    try {
        const alerts = await findAllAlerts();
        res.status(200).json(alerts)
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}


export async function getAlertByld(req, res) {
    try {
        const { id } = req.params;
        const alert = await findAlertById(id);
        res.status(200).json(alert)
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}


export async function deleteAlert(req, res) {
    try {
        const { id } = req.params;
        const result = await deleteAlertById(id);
        res.status(200).json({ message: 'alert deleted successfuly' })
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}



export async function putAlert(req, res) {
    try {
        const { id } = req.params;
        
        const validData = updateAlertSchema.parse(req.body)
        
        const result = await updateAlert(id, validData);
        if(!result.acknowledged) return res.status(403).json({message:"Unable to update"})
        res.status(200).json({ message: 'alert updated successfuly' })
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}


