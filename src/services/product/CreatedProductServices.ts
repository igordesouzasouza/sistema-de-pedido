import prismaClient from "../../prisma/index";


interface ProductRequest {
    name: string;
    banner: string;
    description: string;
    price: string;
    category_id: string;
}

class CreatedProductServices {
    async execute({name, banner, description, price, category_id}: ProductRequest) {
        const product = await prismaClient.product.create({
            data:{
                name: name,
                banner  : banner,
                description: description,
                price: price,
                category_id: category_id,
            }
        })
        return product;
        }
}

export { CreatedProductServices };