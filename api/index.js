import express, { json } from 'express'
import { corsMiddleware } from './middleware/cors.js'
import { routerImages } from './routes/routesImages.js'

const app = express()

app.use(corsMiddleware())
app.use(json())

app.get('/', (req, res) => {
  res.json({message: 'Inicio del server'})
})

app.get('/images', routerImages)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
