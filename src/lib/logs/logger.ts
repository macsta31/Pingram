
export const logger = {
	info: (message: string, meta?: any) => {
		console.log(`ℹ️ [INFO]: ${message}`, meta || '')
	},
	warn: (message: string, meta?: any) => {
		console.warn(`⚠️ [WARN]: ${message}`, meta || '')
	},
	error: (message: string, meta?: any) => {
		console.error(`❌ [ERROR]: ${message}`, meta || '')
	},
	debug: (message: string, meta?: any) => {
		if (process.env.NODE_ENV !== 'production') {
			console.debug(`🐛 [DEBUG]: ${message}`, meta || '')
		}
	}
}

