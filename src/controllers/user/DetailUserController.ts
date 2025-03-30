import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";


class DetailUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id; // Pega o id do usuario que está no token

        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(user_id); // Passa o id do usuario para o service
        return res.json(user)
        


    }
}

export { DetailUserController };