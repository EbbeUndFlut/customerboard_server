import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URI
const DB = 'customerboard'

const client = new MongoClient(URI)
let db

export const getDb = async () => {
    if (db) return db
    await client.connect()
    db = client.db(DB)
    return db
}
