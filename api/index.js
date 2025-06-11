import express from 'express'
import Images from './images.json' with {type: 'json'}
import { corsMiddleware } from './middleware/cors.js'
import postgres from 'postgres'
import 'dotenv/config'

const allImages = Images
const connection = process.env.DATABASE_URL
const sql = postgres(connection)
const app = express()

app.use(corsMiddleware())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: 'Inicio del server'})
})
/*
app.get('/images', (req, res) => {
  res.json(allImages)
})
*/

// Conexion con la bdd
app.get('/images', (req, res) => {
  sql`SELECT * FROM Images`
    .then(images => {
      res.json(images)
    })
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})