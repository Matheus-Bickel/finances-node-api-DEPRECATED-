import 'reflect-metadata'

import { app } from './app'
import { Request, Response, Router } from 'express'
import { GetSpentsController } from './Modules/Spents/Infra/Http/Controllers/GetSpentsController';
import { SpentsData } from './Modules/Spents/Domain/SpentsData';


const router = Router()


app.use(router);

router.get('/spents', (req: Request, res: Response) => {
    let data: SpentsData
    const spent = new GetSpentsController().getSpents(data)

    console.log(spent)
    res.send(spent)
})

export { router }