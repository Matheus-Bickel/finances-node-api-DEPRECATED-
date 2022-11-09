import 'reflect-metadata';

import { Request, Response, Router } from 'express';
import { app } from './app';
import { CreateSpentController } from './App/Spents/Infra/Http/Controllers/CreateSpentController';
import { GetSpentsController } from './App/Spents/Infra/Http/Controllers/GetSpentsController';
import { getBootstrapStarted } from './main';

const bodyParser = require('body-parser')

const router = Router()
app.use(router)
app.use(bodyParser.json())

async () => {
    await getBootstrapStarted()
}

router.get('/spents', function (req: Request, res: Response) {
    console.log(req.query)
    return GetSpentsController.from().getSpents(req, res)
})

router.get('/spents/:id', function (req: Request, res: Response) {
    console.log(req.params.id)
   return GetSpentsController.from().getSpentById(req, res)
})

router.post('/spents/createSpent', function (req: Request, res: Response) {
    console.log(req.body)
    return CreateSpentController.from().create(req, res)
})  