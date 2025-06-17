import postgres from 'postgres'
import 'dotenv/config'

const connection = process.env.DATABASE_URL
const sql = postgres(connection, {
  ssl: 'require'
})

export default sql
