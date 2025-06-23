import { Router } from 'express'
import { ControllerSupaImges } from '../controllers/controllerSupaImages.js'

export const routerImages = Router()

routerImages.get('/images', ControllerSupaImges.getImages)