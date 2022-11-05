import 'reflect-metadata';

import { Request, Response, Router } from 'express';
import { app } from './app';
import { GetSpentsController } from './App/Spents/Infra/Http/Controllers/GetSpentsController';
import { getBootstrapStarted } from './main';


const router = Router()
app.use(router);

getBootstrapStarted()

router.get('/spents', function (req: Request, res: Response) {
    return new GetSpentsController().getSpent(req, res)
})

export { router };

