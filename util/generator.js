import { randomBytes, createHmac } from 'crypto'

export const generateHash = () => {

    const hash = randomBytes(21).toString('base64')
    return hash
}

export const encryptPass = (pass) => {
    const hmac = createHmac('sha256', pass)
    // hmac.update(salt)
    return hmac.digest('hex')
}