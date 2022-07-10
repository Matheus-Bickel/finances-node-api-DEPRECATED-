import 'reflect-metadata'
import { Request, Response, Router } from 'express'
import { app } from './app'

const jsonSpents = require('../mocks/json/spents.json')
const router = Router()
app.use(router);

router.get('/finances', async (request: Request, response: Response) => {
    return response.send(jsonSpents)
})

export { router }