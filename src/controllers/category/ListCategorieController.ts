import prismaClient from "../../prisma";
import { Request, Response } from "express";
import { ListCategorieService } from "../../services/category/ListCategorieService";

class ListCategorieController {
    async handle(req: Request, res: Response) {
        const listCategorieService = new ListCategorieService();
        const categories = await listCategorieService.execute();
        return res.json(categories);
    }
}
export { ListCategorieController };