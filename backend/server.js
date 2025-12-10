import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mysql from 'mysql2'
dotenv.config()

const app = express()

app.use(
	cors({
		origin: ['http://localhost:5173', 'https://backend-c28d.onrender.com'],
		credentials: true,
	})
)

app.use(express.json())

// Parse MySQL URL
const dbUrl = new URL(process.env.DATABASE_URL)

export const db = mysql.createPool({
	host: dbUrl.hostname,
	user: dbUrl.username,
	password: dbUrl.password,
	database: dbUrl.pathname.slice(1),
	port: dbUrl.port || 3306,
})

db.getConnection((err, connection) => {
	if (err) {
		console.log('❌ MySQL ERROR:', err)
		return
	}
	console.log('✅ MySQL connected!')
	connection.release()
})

app.get('/', (req, res) => {
	res.send('Backend running...')
})

app.listen(8080, () => console.log('Server running on 8080'))
