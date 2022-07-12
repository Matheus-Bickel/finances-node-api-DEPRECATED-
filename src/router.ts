import 'reflect-metadata'

import { app } from './app'
import { Router } from 'express'

const GetSpentsController = require('./Modules/Spents/Infra/Http/Controllers/GetSpentsController')
const router = Router()
app.use(router);

router.get('/spents', GetSpentsController.getSpent)

export { router }