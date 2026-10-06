import { deleteAuthById, findAllAuths, findAuthById, insertAuth, updateAuth } from "../DAL/auth.dal.js";
import { authSchema, updateAuthSchema } from "../validations/auth.validation.js";



export async function createAuth(req, res) {
    try {
        const validData = authSchema.parse(req.body)
        console.log(validData);

        const result = await insertAuth(validData);
        res.status(201).json({ message: 'משתמש נוצרה בהצלחה', id: result.insertedId })

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "server faild" })
    }
}


export async function getAllAuth(req, res) {
    try {
        const auths = await findAllAuths();
        res.status(200).json(auths)
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}


export async function getAuthByld(req, res) {
    try {
        const { id } = req.params;
        const auth = await findAuthById(id);
        console.log(auth);
        
        res.status(200).json(auth[0])
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}


export async function deleteAuth(req, res) {
    try {
        const { id } = req.params;
        const result = await deleteAuthById(id);
        res.status(200).json({ message: 'המשתמש נמחק בהצלחה' })
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}



export async function putAuth(req, res) {
    try {
        const { id } = req.params;

        const validData = updateAuthSchema.parse(req.body)

        const result = await updateAuth(id, validData);
        if (!result.acknowledged) return res.status(403).json({ message: "Unable to update" })
        res.status(200).json({ message: 'משתמש עודכן בהצלחה' })
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}


