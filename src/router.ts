import { Request, Response, Router } from 'express'

const router = Router()

router.post('/spent', (request: Request, response: Response) => {
    return response.status(201).send('Created')
})

export { router }
