import { ModelSupaImages } from '../models/modelSupaImages.js'

export class ControllerSupaImges {
  static getImages = async (req, res) => {
    try {
    const images = await ModelSupaImages.getImages()
    res.json(images)
  }
  catch (error) {
    res.status(500).json({error: 'Something went wrong'})
  }
  }
}