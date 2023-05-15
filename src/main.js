import { PORT } from './config/server.config.js'
import { app } from '../app/app.js'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/coderhouse')

app.listen(PORT, () => { console.log(`escuchando en puerto ${PORT}`) })