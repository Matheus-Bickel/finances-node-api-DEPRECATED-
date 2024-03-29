import 'reflect-metadata';

import { Request, Response, Router } from 'express';
import { app } from './app';
import { CreateSpentController } from './App/Spents/Infra/Http/Controllers/CreateSpentController';
import { GetSpentsController } from './App/Spents/Infra/Http/Controllers/GetSpentsController';
import { UpdateSpentController } from './App/Spents/Infra/Http/Controllers/UpdateSpentController';
import { getBootstrapStarted } from './main';

const router = Router()

app.use(router)

async () => {
    await getBootstrapStarted()
}

router.get('/spents', async function (req: Request, res: Response) {
    return await GetSpentsController.from().getformatedResponse(req, res)
})

router.get('/spents/:id', async function (req: Request, res: Response) {
    return await GetSpentsController.from().getformatedResponse(req, res)
})

router.put('/spents/:id', async function (req: Request, res: Response) {
    return await UpdateSpentController.from().getformatedResponse(req, res)
})

router.post('/spents/create', async function (req: Request, res: Response) {
    res.send({
        status: 200,
        body:  {
            data: await CreateSpentController.from().create(req)
        }
    })
})