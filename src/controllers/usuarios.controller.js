import { Usuario } from '../models/Usuario.js'
import { usuariosRepository } from '../repositories/usuarios.repository.js'
import { usuariosService } from '../services/usuarios.service.js'

export async function handleGet(req, res, next) {
  try {
    if (req.params.id) {
      const buscado = await usuariosRepository.readOne({ id: req.params.id })
      res.json(buscado)
    } else {
      const buscados = await usuariosRepository.readMany(req.query)
      res.json(buscados)
    }
  } catch (error) {
    next(error)
  }
}

export async function handlePost(req, res, next) {
  try {
    const usuario = new Usuario(req.body)
    await usuariosService.registrarUsuario(usuario)
    res.status(201).json(usuario)
  } catch (error) {
    next(error)
  }
}