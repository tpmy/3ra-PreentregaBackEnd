import { Router } from 'express'

import * as productosController from '../controllers/productos.controller.js'

export const productosRouter = Router()

productosRouter.get('/:id?', productosController.handleGet)
productosRouter.post('/', productosController.handlePost)