import { getDb } from "../util/db.js"

export const userLogin = async (user) => {
    const db = await getDb()
    const result = await db.collection('user').findOne({ email: user.email })
    return result
}