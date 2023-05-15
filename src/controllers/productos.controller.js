import { Producto } from '../models/Producto.js'
import { productosRepository } from '../repositories/productos.repository.js'

export async function handleGet(req, res, next) {
  try {
    if (req.params.id) {
      const buscado = await productosRepository.readOne({ id: req.params.id })
      res.json(buscado)
    } else {
      const productos = await productosRepository.readMany(req.query)
      res.json(productos)
    }
  } catch (error) {
    next(error)
  }
}

export async function handlePost(req, res, next) {
  try {
    const producto = new Producto(req.body)
    await productosRepository.create(producto)
    res.status(201).json(producto)
  } catch (error) {
    next(error)
  }
}