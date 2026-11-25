import cors from 'cors'

const ACCEPTED_ORINGINS = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://rememberly-0f5c70.netlify.app'
]

export const corsMiddleware = ({ accepted_origins = ACCEPTED_ORINGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (accepted_origins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})