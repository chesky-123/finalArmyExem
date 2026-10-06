import { ObjectId } from "mongodb";
import { collection } from "../db/db.js";


export async function insertAlert(alert) {
    
    const result = await collection.insertOne(alert);

    return result
};


export async function findAllAlerts() {
    return await collection.find().toArray();
};


export async function findAlertById(id) {
    return await collection.find({ _id: new ObjectId(id) }).toArray();
};


export async function deleteAlertById(id) {
    return await collection.deleteOne({ _id: new ObjectId(id) });
};


export async function updateAlert(id, data) {
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    )
    return result
};




