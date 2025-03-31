import { Request, Response } from "express";
import { CreateCategorieService } from "../../services/category/CreateCategorieService";

class CreateCategorieController {
   async handle(req: Request, res: Response) {
      const { name } = req.body;
    const createCategorieService = new CreateCategorieService();

    const category = await createCategorieService.execute({
         name
    })
    return res.json(category)
   }    
}

export { CreateCategorieController };