import { loadAllCustomer, saveCustomer, loadCustomer } from "../services/customerService.js"

export const addCustomer = async (req, res) => {
    try {
        const customer = req.body
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

