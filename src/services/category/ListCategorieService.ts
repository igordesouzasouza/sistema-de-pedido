import prismaClient from "../../prisma";


class ListCategorieService {
    async execute() {
        const category = await prismaClient.category.findMany({
            select: {                
                id: true,
                name: true,
                created_at: true, 
            },
        })
        return category;
    }
}

export { ListCategorieService };