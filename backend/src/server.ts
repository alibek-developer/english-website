import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// routelar misol uchun
app.get('/', (req, res) => {
	res.send('Backend ishlayapti!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`Server ${port}-portda ishga tushdi`)
})
