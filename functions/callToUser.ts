import { Response } from 'express'
import { config } from 'dotenv'
import api from '../config/api'

// Inicializa o dotenv para podermos acessar informações do arquivo .env
config()

const callToUser = (mensagem: string, numero_destino: string, response: Response) => {
	api
		.post(
			'/tts',
			{
				numero_destino,
				mensagem,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'access-token': `${process.env.VOICE_TOKEN}`,
				},
			}
		)
		.then((res: any) => {
			// Armazena o campo sucesso da resposta da API de voz
			const { sucesso } = res.data

			// Verifica se o sucesso é verdadeiro
			if (sucesso === true) {
				// Se sim, exibe status de sucesso no console da aplicação
				console.log('Sucesso! A chamada está sendo realizada.')

				// Retorna uma resposta de sucesso para quem chamou nossa API
				response.send(
					`Sucesso, resposta da API de torpedos de voz: ${JSON.stringify(
						res.data,
						null,
						4
					)}`
				)
			} else {
				// Se não, exibe status de erro no console da aplicação
				console.log('Erro na chamada.')

				// Retorna uma resposta de erro para quem chamou nossa API
				response.send(
					`Erro na chamada para a API de torpedos de voz: ${JSON.stringify(
						res.data,
						null,
						4
					)}`
				)
			}
		})
		.catch((error: any) => {
			// Caso não seja possível chamar a API de voz, exibe um status de erro no console
			console.log('Error:', error)

			// Retorna uma resposta de erro para quem chamou nossa API
			response.send('Erro desconhecido ao chamar a API de voz.')
		})
}

export default callToUser
