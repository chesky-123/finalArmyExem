import { findAlertById } from "../DAL/alerts.dal.js";


export async function alertExsist(req, res, next) {
    try {
        const { id } = req.params;
        const result = await findAlertById(id);
        if(result.length === 0) return res.status(404).json({message:"alert not found"})
        next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}

export async function latLonToNumber(req, res, next) {
    try {
        const {lat,lon} = req.body;
        if(isNaN(lat) || isNaN(lon)) return res.status(401).json({message:"קווי מידה חייבים להיות מספר"})
        req.body.lat = Number(lat);
        req.body.lon = Number(lon);
        
        next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ message: "server faild" })
    }
}


