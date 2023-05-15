import express from 'express'
import { usuariosRouter } from '../src/routers/usuarios.router.js'
import { productosRouter } from '../src/routers/productos.router.js'
import { ventasRouter } from '../src/routers/ventas.router.js'

export const app = express()

app.use(express.json())

app.use('/api/usuarios', usuariosRouter)
app.use('/api/productos', productosRouter)
app.use('/api/ventas', ventasRouter)