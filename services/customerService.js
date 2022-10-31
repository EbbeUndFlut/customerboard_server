import { ObjectId } from "mongodb"
import { getDb } from "../util/db.js"
import { encryptPass, generateHash } from "../util/generator.js"

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

export const generateCredentials = async (id) => {
    const pass = generateHash()

    console.log('das ist das passwort:', pass);
    // pass per mail an customer

    const encryptPassword = encryptPass(pass)
    const db = await getDb()
    const result = await db.collection('customer').updateOne({ _id: new ObjectId(id) }, { $set: { password: encryptPassword } })
    console.log('das ist:'
        , result);
    return result
}
export const customerLogin = async (customer) => {
    const db = await getDb()
    const result = await db.collection('customer').findOne({ email: customer.email })
    return result
}
export const deleteCustomer = async (id) => {
    const db = await getDb()
    const result = await db.collection('customer').deleteOne({ _id: new ObjectId(id) })
    return result
}
