import { Router } from 'express'

import * as ventasController from '../controllers/ventas.controller.js'

export const ventasRouter = Router()

ventasRouter.get('/:id?', ventasController.handleGet)
ventasRouter.post('/', ventasController.handlePost)