import cors from 'cors'
import express from 'express'
import mysql from 'mysql2'

const app = express()

app.use(
	cors({
		origin: 'http://localhost:5173', // frontend manzili
		credentials: true,
	})
)

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Backend running...')
})

app.post('/admin/login', (req, res) => {
	console.log(req.body)
	res.json({ message: 'OK' })
})

app.listen(8080, () => console.log('Server running on 8080'))

export const db = mysql.createConnection({
	host: process.env.MYSQLHOST,
	user: process.env.MYSQLUSER,
	password: process.env.MYSQLPASSWORD,
	database: process.env.MYSQLDATABASE,
	port: process.env.MYSQLPORT,
})

db.connect(err => {
	if (err) {
		console.log('❌ MySQL ERROR:', err)
		return
	}
	console.log('✅ MySQL connected!')
})
