import { Usuario } from '../models/Usuario.js'
import { usuariosRepository } from '../repositories/usuarios.repository.js'
import { emailService } from './email.service.js'

class UsuariosService {
  async registrarUsuario(datosUsuario) {
    const usuario = new Usuario(datosUsuario)
    await usuariosRepository.create(usuario)
    await emailService.enviarMail({ datos: usuario })
    return usuario
  }
}

export const usuariosService = new UsuariosService()