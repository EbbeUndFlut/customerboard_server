import { loadAllCustomer, saveCustomer, loadCustomer, generateCredentials, deleteCustomer } from "../services/customerService.js"
import { generateHash } from "../util/generator.js"

export const addCustomer = async (req, res) => {
    try {
        const customer = req.body
        customer.registeredAt = new Date()
        const result = await saveCustomer(customer)
        console.log(result);
        res.status(200).json({ state: true })
    } catch (error) {
        res.status(500).json({ state: false })
    }

}
export const getAllCustomer = async (_, res) => {
    try {
        const result = await loadAllCustomer()

        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ state: false })
    }
}
export const getCustomer = async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id

    try {

        const result = await loadCustomer(id)
        res.status(200).json(result)

    } catch (error) {
        console.log(error)
        res.status(500).json({ state: false })
    }

}

export const createCustomerLogin = (req, res) => {
    try {
        const id = req.body.id
        const result = generateCredentials(id)

        res.status(200).json({ state: true })
    } catch (error) {
        res.status(500).json({ error })
    }

}

export const removeCustomer = async (req, res) => {
    try {
        const id = req.body.id
        const result = await deleteCustomer(id)
        res.status(200).json({ state: true })
    } catch (error) {
        console.log('Error', error);
        res.status(500).json({ state: false })
    }
}


