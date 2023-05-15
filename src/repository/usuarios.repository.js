import { usuariosDaoMemoria } from '../../daos/usuarios.dao.memoria.js'
import { usuariosDaoMongoose } from '../../daos/usuarios.dao.mongoose.js'

class UsuariosRepository {
  constructor(dao) {
    this.dao = dao
  }
  create(data, options) {
    return this.dao.create(data)
  }

  readOne(criteria, options) {
    return this.dao.readOne(criteria)
  }

  readMany(criteria, options) {
    return this.dao.readMany(criteria)
  }

  updateOne(criteria, newData, options) {
    return this.dao.updateOne(criteria)
  }

  updateMany(criteria, newData, options) {
    return this.dao.updateMany(criteria)
  }

  deleteOne(criteria, options) {
    return this.dao.deleteOne(criteria)
  }

  deleteMany(criteria, options) {
    return this.dao.deleteMany(criteria)
  }
}

// export const usuariosRepository = new UsuariosRepository(usuariosDaoMemoria)
export const usuariosRepository = new UsuariosRepository(usuariosDaoMongoose)