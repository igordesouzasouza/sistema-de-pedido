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
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';

const router = Router(); //instanciando o router do express

const upload = multer(uploadConfig.upload('./tmp')); //configurando o multer para o upload de arquivos

//rotas de usuarios
router.post('/users', new CreateUserController().handle) //criação de usuario

//rotas de autenticacao
router.post('/session', new AuthUserController().handle) //autenticação de usuario

//rotas de detalhes do usuario
router.get('/me', isAuth, new DetailUserController().handle) // detalhes do usuario autenticado

//rotas de cateogorias
router.post('/category', isAuth, new CreateCategorieController().handle) //criação de categorias

//listagem de categorias
router.get('/category', isAuth, new ListCategorieController().handle) //listagem de categorias

//rotas de produtos
router.post('/product', isAuth, upload.single('file'), new CreatedProductController().handle) //criação de produtos

router.get('/category/product', isAuth, new ListByCategorieController().handle) //listagem de produtos por categoria

router.post('/order', isAuth, new CreateOrderController().handle) // create order

router.delete('/order', isAuth, new RemoveOrderController().handle) //remove order

router.post('/order/add', isAuth, new AddItemController().handle) //add item to order





export { router }; 
                        