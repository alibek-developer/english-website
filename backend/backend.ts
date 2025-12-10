import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import mysql from 'mysql2/promise'

dotenv.config()

const app = express()
app.use(express.json())
app.use(
	cors({
		origin: '*',
	})
)

// MySQL Pool
export const db = mysql.createPool({
	host: process.env.MYSQLHOST,
	user: process.env.MYSQLUSER,
	password: process.env.MYSQLPASSWORD,
	database: process.env.MYSQLDATABASE,
	port: Number(process.env.MYSQLPORT),
})

// TEST ROUTE
app.get('/', (req: Request, res: Response) => {
	res.send('Backend running...')
})

// GET COURSES
app.get('/courses', async (req: Request, res: Response) => {
	try {
		const [rows] = await db.query('SELECT * FROM courses')
		res.json(rows)
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Database error' })
	}
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
