import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import {AuthUserController} from './controllers/user/AuthUserController'
import { CreateCategorieController } from './controllers/category/CreateCategorieController'

import { isAuth } from './middlewares/isAuth';

const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/me', isAuth, new DetailUserController().handle)

//rotas de cateogorias
router.post('/category', isAuth, new CreateCategorieController().handle)

export { router }; 