import { Router } from 'express'
import bodyParser from 'body-parser'

const router = Router()
const jsonParser = bodyParser.json()

router.post('/createspent', jsonParser, (request, response) => {
    return response.status(201).send('Created')
})

export { router }
