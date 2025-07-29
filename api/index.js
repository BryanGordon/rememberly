import express, { json } from 'express'
import { corsMiddleware } from './middleware/cors.js'
import { routerImages } from './routes/routesImages.js'
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.use(corsMiddleware())
app.use(json())
/** Code for use local assets (e.g imgs) on api */
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.json({message: 'Inicio del server'})
})

app.get('/images', routerImages)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
