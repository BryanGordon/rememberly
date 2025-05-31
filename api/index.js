import express from 'express'

const app = express()
const allImages = []

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