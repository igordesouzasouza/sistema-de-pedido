import { Response, Request } from "express";
import { ListByCategorieService } from "../../services/product/ListByCategorieService";

class ListByCategorieController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listByCategory = new ListByCategorieService();
        
        const products = await listByCategory.execute({
            category_id
        })
        return res.json(products);
    }
}

export { ListByCategorieController }

