import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body; // Pega os dados do corpo da requisicao
        const createOrderService = new CreateOrderService(); // Cria uma instancia da classe CreateOrderService
        const order = await createOrderService.execute({ table, name }); // Chama o metodo execute da classe CreateOrderService
        return res.json(order); // Retorna a resposta em formato JSON
    }

}

export { CreateOrderController };

//o handle server para receber a requisicao e o response para devolver a resposta
//o express ja faz isso automaticamente, mas o controller serve para organizar o codigo