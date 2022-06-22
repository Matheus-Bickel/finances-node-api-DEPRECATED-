import { Request, Response, Router } from 'express'
import { app } from './app'
import { SpentServiceImpl } from './Modules/Spents/Application/SpentsServiceImpl';

const router = Router()
app.use(router);

router.get('/finances', (request: Request, response: Response) => {
    response = new SpentServiceImpl()
})

export { router }