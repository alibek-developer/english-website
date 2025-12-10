import axios from 'axios'

const backend = axios.create({
	baseURL: 'https://backend-c28d.onrender.com',
	withCredentials: true,
})

export default backend
