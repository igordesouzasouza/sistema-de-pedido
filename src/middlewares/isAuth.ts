import { Response, Request } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}


export function isAuth(req: Request, res: Response, next: Function) {
    
    //receber o token
    const authToken = req.headers.authorization;
    //verificar se o token está preenchido
    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");
   //      , ignora o primiro valor e pega o segundo
   //validado o token
   try{
    //validando o token
        const {sub} = verify(token, process.env.JWT_SECRET) as IPayload;
        // recuperar o id do usuario e colocar em uma variavel
        req.user_id = sub;

        return next();
   }catch(err) {
       return res.status(401).end();
   }
}
