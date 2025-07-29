import imagesLocal from '../images.json' with {type: 'json'}

export class ModelLocalImages { 
  static getImages = () => {
    const images = imagesLocal
    return images
  }
}
