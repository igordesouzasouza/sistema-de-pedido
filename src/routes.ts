import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import {AuthUserController} from './controllers/user/AuthUserController'
import { CreateCategorieController } from './controllers/category/CreateCategorieController'
import { ListCategorieController } from './controllers/category/ListCategorieController'
import multer from 'multer';
import uploadConfig from './config/multer'

import { isAuth } from './middlewares/isAuth';
import { CreatedProductController } from './controllers/product/CreatedProductController';
import { ListByCategorieController } from './controllers/product/ListByCategorieController'

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

//rotas de usuarios
router.post('/users', new CreateUserController().handle)

//rotas de autenticacao
router.post('/session', new AuthUserController().handle)

//rotas de detalhes do usuario
router.get('/me', isAuth, new DetailUserController().handle)

//rotas de cateogorias
router.post('/category', isAuth, new CreateCategorieController().handle)

//listagem de categorias
router.get('/category', isAuth, new ListCategorieController().handle)

//rotas de produtos
router.post('/product', isAuth, upload.single('file'), new CreatedProductController().handle)

router.get('/product', isAuth, new ListByCategorieController().handle)

export { router }; 