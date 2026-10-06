import { findAuthById } from "../DAL/auth.dal.js";



export async function authExsist(req, res, next) {
    try {

        const { id } = req.params;
        const result = await findAuthById(id);
        if(result.length === 0) return res.status(404).json({message:"auth not found"})
        next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}