import { findAuthByEmail } from "../DAL/auth.dal.js";
import { loginSchema } from "../validations/auth.validation.js";



export async function authExsist(req, res, next) {
    try {
        const validData = loginSchema.parse(req.body)
        const { email } = validData;
        const result = await findAuthByEmail(email);
        if (!result) {
            return res.status(401).json({ message: "אחד או יותר מהנתונים שגויים" })
        }
        if (result.length === 0) return res.status(404).json({ message: "משתמש לא נמצא" })
        next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}