import { ObjectId } from "mongodb"
import { getDb } from "../util/db.js"

export const saveCustomer = async (customer) => {
    const db = await getDb()
    const result = await db.collection('customer').insertOne(customer)
    return result
}

export const loadAllCustomer = async () => {
    const db = await getDb()
    const result = await db.collection('customer').find().toArray()
    return result
}

export const loadCustomer = async (id) => {
    const db = await getDb()
    const result = await db.collection('customer').findOne({ _id: new ObjectId(id) })
    return result
}