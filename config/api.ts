import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api2.totalvoice.com.br',
})

export default api
