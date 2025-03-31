import prismaClient from "../../prisma/index";


interface ProductRequest {
    name: string;
    banner: string;
    description: string;
    price: number;
    category_id: string;
}

class CreatedProductServices {
    async execute({name, banner, description, price, category_id}: ProductRequest) {
        return {ok: true}
        }
}

export { CreatedProductServices };