import express from 'express'
import Images from './images.json' with {type: 'json'}

const app = express()
const allImages = Images

app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: 'Inicio del server'})
})

app.get('/images', (req, res) => {
  res.json(allImages)
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})