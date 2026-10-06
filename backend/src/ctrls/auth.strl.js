import jwt from 'jsonwebtoken'
import { deleteAuthById, findAllAuths, findAuthByEmail, insertAuth, updateAuth } from "../DAL/auth.dal.js";
import { authSchema, updateAuthSchema } from "../validations/auth.validation.js";
import { email } from 'zod';



export async function createAuth(req, res) {
    try {
        const user = req.body
        const result = await insertAuth(user);


        res.status(201).json({ message: 'משתמש נוצר בהצלחה', id: result.insertedId })

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "server faild" })
    }
}


export async function loginUser(req, res) {
    try {
        const user = req.body

        const token = jwt.sign(
            { email: user.email, password: user.password },
            process.env.JWT_SECRET || 'sxerdctfvygbhjnkjmlk',
            { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
        )
        res.status(200).json({ success: true, token })
    } catch (e) {
        return res.status(500).json({ success: false, message: "server faild" })

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


export async function getAuthByEmail(req, res) {
    try {
        const { email } = req.user;
        const auth = await findAuthByEmail(email);
        console.log(auth);

        res.status(200).json({ success: true, data: auth[0] })
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


