import { ventasRepository } from '../repositories/ventas.repository.js'
import { ventasService } from '../services/ventas.service.js'

export async function handleGet(req, res, next) {
  try {
    if (req.params.id) {
      const buscado = await ventasRepository.readOne({ id: req.params.id })
      res.json(buscado)
    } else {
      const buscados = await ventasRepository.readMany(req.query)
      res.json(buscados)
    }
  } catch (error) {
    next(error)
  }
}

export async function handlePost(req, res, next) {
  try {
    const venta = await ventasService.realizarVenta(req.body)
    res.status(201).json(venta)
  } catch (error) {
    next(error)
  }
}