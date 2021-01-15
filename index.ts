import express from 'express'
import { handleSendCode } from './total-voice/index'

const app = express()

app.get('/sendCode/:phone', handleSendCode)

app.listen(4000, () => console.log('Servidor rodando na porta 4000.'))
