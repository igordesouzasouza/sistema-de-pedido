import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategorieService {
    async execute({name}: CategoryRequest) {
       if(name === '') {
        throw new Error("Name is required")
       }

       const category = await prismaClient.category.create({
        data: {
            name,
        }, select:{
            id: true,
            name: true,
        }
       })
       return category;
    }
}


export { CreateCategorieService };