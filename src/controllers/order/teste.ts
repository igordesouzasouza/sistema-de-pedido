//adicionar item dentro do pedido
import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController{
  async handle(req: Request, res: Response){
    const item_id = req.query.item_id as string;
    const order_id = req.query.order_id as string;

    const addItem = new AddItemService();
    //Verifica se o item existe e se o pedido existe

    const item = await addItem.execute({
      item_id,
      order_id,
    });  
  }

}