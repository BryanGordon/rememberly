import sql from '../db-supa.js'

export class ModelSupaImages { 
  static getImages = async() => {
    const images = await sql`SELECT * FROM images`
    return images
  }
}
