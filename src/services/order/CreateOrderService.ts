import prismaClient from "../../prisma";

interface OrderRequest{
    table: number;
    name: string;
}

class CreateOrderService {
    async execute({ table, name }: OrderRequest) {
        const order = await prismaClient.order.create({
            data:{
                table,
                name,
            }
        })
        return order;
    }
}

export { CreateOrderService };

//o execute serve para executar alguma coisa no caso criar um pedido