import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { login } from './controller/userController.js'
import { encrypt } from './middleware/encryptMiddleware.js'
import { verifyBearer } from './controller/authController.js'
import { kontostand } from './controller/kontoController.js'
import { checkToken } from './middleware/verifyMiddleware.js'


// Falls ihr multer oder den express validator nutzt, importiert diese einfach auch
const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// hier ist genung Platz für alle eure Routen
app.post('/api/login', encrypt, login)

app.get('/api/verify', verifyBearer)

app.get('/api/konto', checkToken, kontostand)


// dann werfen wir den Server mal an
app.listen(PORT, () => console.log('Server runs on Port:', PORT))