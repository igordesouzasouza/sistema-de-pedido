import { Request, Response } from "express";
import { CreatedProductServices } from "../../services/product/CreatedProductServices";

class CreatedProductController {
    async handle(req: Request, res: Response) {
        const { name, description, price, category_id } = req.body;
        let banner = '';

        const createdProductServices = new CreatedProductServices();
        const product = await createdProductServices.execute({
            name,
            banner,
            description,
            price,
            category_id,
        })
        return res.json(product);
    }
}

export { CreatedProductController };