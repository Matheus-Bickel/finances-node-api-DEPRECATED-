import 'reflect-metadata'

import { app } from './app'
import { Router } from 'express'
import { BoostrapStart } from './App/Spents/Bootstrap/BootstrapStart'

const GetSpentsController = require('./App/Spents/Infra/Http/Controllers/GetSpentsController')
const router = Router()
app.use(router);

async function startBoostrap() {
    return new BoostrapStart().getStarted()
}

router.get('/spents', GetSpentsController.getSpent)

startBoostrap()

export { router }