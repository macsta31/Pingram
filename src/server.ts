import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
// Load env vars
dotenv.config()

import apiRouter from './api'

const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Health Check
app.get('/health', (_req, res) => {
	res.status(200).send('OK')
})

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction): void => {
	if (err instanceof Error) {
		console.error(err.stack)
		res.status(500).json({ error: err.message })
	}
	else {
		res.status(500).json({ error: 'Unknown error occured' })
	}
})

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

import './lib/queue/workers/reminderWorker'

app.listen(PORT, () => {
	console.log(`API running on port ${PORT}`)
})

app.use('/api', apiRouter)

