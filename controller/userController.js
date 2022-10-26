import { userLogin } from "../services/userService.js"
import { createToken } from "../util/token.js";

export const login = async (req, res) => {
    const user = req.body

    const result = await userLogin(user)
    console.log(result);
    if (result.password === user.pass) {
        const token = createToken({ user: result._id, role: result.roles })
        res.status(200).json({ token: token })
    }
    else {
        res.status(403).json({ message: 'Fehler beim Anmelden' })
    }
}