import { Request, Response, Router } from 'express'
import { app } from './app'

const router = Router()
app.use(router);

router.get('/finances', (request: Request, response: Response) => {
    return response.send({message: 'ELE GOSTAA'})
})

export { router }