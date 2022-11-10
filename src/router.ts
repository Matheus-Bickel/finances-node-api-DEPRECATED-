import 'reflect-metadata';

import { Request, Response, Router } from 'express';
import { app } from './app';
import { CreateSpentController } from './App/Spents/Infra/Http/Controllers/CreateSpentController';
import { GetSpentsController } from './App/Spents/Infra/Http/Controllers/GetSpentsController';
import { getBootstrapStarted } from './main';

const router = Router()

app.use(router)

async () => {
    await getBootstrapStarted()
}

router.get('/spents', async function (req: Request, res: Response) {
    return res.send(await GetSpentsController.from().getSpents(req, res))
})

router.get('/spents/:id', async function (req: Request, res: Response) {
   return res.send(await GetSpentsController.from().getSpentById(req, res))
})

router.post('/spents/createSpent', async function (req: Request, res: Response) {
    return await CreateSpentController.from().create(req, res)
})  