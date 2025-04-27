import express, { Application, Request, Response, NextFunction } from 'express'
import './setupAliases'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { logger } from './lib/logs/logger'
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

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000


if (process.env.NODE_ENV !== 'test') {

	import('./lib/queue/workers/reminderWorker')

	app.listen(PORT, () => {
		logger.info(`API running on port ${PORT}`)
	})
}

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction): void => {
	if (err instanceof Error) {
		logger.error(err?.stack ?? err.message)
		res.status(500).json({ error: err.message })
	}
	else {
		res.status(500).json({ error: 'Unknown error occured' })
	}
})

app.use('/api', apiRouter)

export default app

