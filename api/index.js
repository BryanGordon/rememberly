import express from 'express'
import { corsMiddleware } from './middleware/cors.js'
import postgres from 'postgres'
import 'dotenv/config'

const connection = process.env.DATABASE_URL
const sql = postgres(connection, {
  ssl: 'require'
})
const app = express()

app.use(corsMiddleware())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: 'Inicio del server'})
})

app.get('/images', async (req, res) => {
  try {
    const images = await sql`SELECT * FROM images`
    res.json(images)
  }
  catch (error) {
    res.status(500).json({error: 'Something went wrong'})
  }
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
