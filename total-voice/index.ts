import { Request, Response } from 'express'
import { config } from 'dotenv'
import callToUser from '../functions/callToUser'
import { generateVerificationCode } from '../functions/generateVerificationCode'

// Inicializa o dotenv para podermos acessar informações do arquivo .env
config()

// Chama a função que gera um código aleatório de 4 dígitos e armazena em uma variável
const generatedCode = generateVerificationCode()

// Divide o código com vírgulas para melhorar a reprodução do áudio
const splittedCode = generatedCode.split('')
const code = `${splittedCode[0]}, ${splittedCode[1]}, ${splittedCode[2]}, ${splittedCode[3]}`

// Armazena a mensagem que será reproduzida em uma variável
const message = `Olá, tudo bem? Eu sou a Vitoria da Loja Prensa e estou te ligando para lhe dizer o código de autenticação de 2 fatores para o login na plataforma. Pegue algo para anotar o código que lhe direi, fique tranquilo pois repetirei o código. Lá vai: ${code}. Repetindo: ${code}. Última vez: ${code}. Agora basta inserir este código de login e pronto. Até mais.`

// Declaração da função que lida com o envio do código
export const handleSendCode = (request: Request, response: Response) => {
	// Armazena o telefone passado no URL da nossa API em uma variável
	const { phone } = request.params

	// Exibe um status no console da nossa aplicação
	console.log('Efetuando a chamada')

	// Chama a função que faz a chamada à API da Zenvia
	callToUser(message, phone, response)
}
