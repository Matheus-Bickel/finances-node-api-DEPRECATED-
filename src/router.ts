import 'reflect-metadata';

import { Request, Response, Router } from 'express';
import { app } from './app';
import { CreateSpentController } from './App/Spents/Infra/Http/Controllers/CreateSpentController';
import { GetSpentsController } from './App/Spents/Infra/Http/Controllers/GetSpentsController';
import { getBootstrapStarted } from './main';


const router = Router()
app.use(router);

getBootstrapStarted()

router.get('/spents', function (req: Request, res: Response) {
    return GetSpentsController.from().getSpents(req, res)
})

router.get('/spents/:id', function (req: Request, res: Response) {
   return GetSpentsController.from().getSpentById(req, res)
})

router.post('/spents/createSpent', function (req: Request, res: Response) {
    return CreateSpentController.from().create(req, res)
})  