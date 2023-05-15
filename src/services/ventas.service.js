import { productosRepository } from '../repositories/productos.repository.js'
import { usuariosRepository } from '../repositories/usuarios.repository.js'
import { ventasRepository } from '../repositories/ventas.repository.js'

import { randomUUID } from 'crypto'
import { emailService } from './email.service.js'
import { Venta } from '../models/Venta.js'

class VentasService {
  async realizarVenta({ idUsuario, idProducto }) {
    const usuario = await usuariosRepository.readOne({ id: idUsuario })
    const producto = await productosRepository.readOne({ id: idProducto })
    const venta = new Venta({ idProducto, idUsuario })
    await ventasRepository.create(venta)
    usuario.ventas.push(venta.id)
    await usuariosRepository.updateOne({ id: idUsuario }, usuario)
    await emailService.enviarMail({ datos: venta })
  }
}

export const ventasService = new VentasService()