import prismaClient from "../../prisma";

class CreateCategorieService {
    async execute(){
        return {ok: true}
    }
}


export { CreateCategorieService };