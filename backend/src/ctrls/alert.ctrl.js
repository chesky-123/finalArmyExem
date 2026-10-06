import { deleteAlertById, findAlertById, findAllAlerts, insertAlert, updateAlert } from "../DAL/alerts.dal.js";



export async function createAlert(req, res) {
    try {

        const result = await insertAlert(req.body);
        res.status(201).json({ message: 'ההתראה נוצרה בהצלחה', id: result.insertedId })

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
        console.log(alert);
        
        res.status(200).json(alert[0])
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

        const result = await updateAlert(id, req.body);
        if (!result.acknowledged) return res.status(403).json({ message: "לא ניתן לעדכן" })
        res.status(200).json({ message: 'התראה עודכנה בהצלחה' })
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}


