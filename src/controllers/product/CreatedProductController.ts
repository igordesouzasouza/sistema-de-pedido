import { Request, Response } from "express";
import { CreatedProductServices } from "../../services/product/CreatedProductServices";

class CreatedProductController {
    async handle(req: Request, res: Response) {
        const { name, description, price, category_id } = req.body;

        const createdProductServices = new CreatedProductServices();

        if(req.file){
            throw new Error("File not found")
        }else{

            const {originalname, filename} = req.file;
            const product = await createdProductServices.execute({
                name,
                banner: '',
                description,
                price,
                category_id,
            })
            return res.json(product);
        }
        
    }
}

export { CreatedProductController };