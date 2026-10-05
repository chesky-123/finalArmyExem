import { MongoClient } from 'mongodb'

const MONGO_URI = process.env.MONGO_URI

const client = new MongoClient(MONGO_URI);

try {
    client.connect
    console.log('connect to db');
    
} catch (e) {
    console.error("Failed connect the MongoDB", e)
    process.exit(1)
};

const db = client.db('alertsSystem');

export const collection = db.collection('alerts')
