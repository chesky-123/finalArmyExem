import { ObjectId } from "mongodb";
import { authCollection } from "../db/db.js";


export async function insertAuth(auth) {
    
    const result = await authCollection.insertOne(auth);

    return result
};


export async function findAllAuths() {
    return await authCollection.find().toArray();
};


export async function findAuthByEmail(email) {
    return await authCollection.find({ email: email }).toArray();
};


export async function deleteAuthById(id) {
    return await authCollection.deleteOne({ _id: new ObjectId(id) });
};


export async function updateAuth(id, data) {
    const result = await authCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    )
    return result
};




