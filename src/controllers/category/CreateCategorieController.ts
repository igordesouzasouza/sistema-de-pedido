import { Request, Response } from "express";
import { CreateCategorieService } from "../../services/category/CreateCategorieService";

class CreateCategorieController {
   async handle(req: Request, res: Response) {
    const createCategorieService = new CreateCategorieService();

    const category = await createCategorieService.execute()
    return (category)
   }    
}

export { CreateCategorieController };