import prismaClient from "../../prisma";

interface ItemRequest{
  item_id: string;
  order_id: string;

}
class AddItemService{
  async execute({ item_id, order_id }: ItemRequest){
    const item = await prismaClient.item.update({
      where: {
        id: item_id,
      },
      data: {
        order_id: order_id,
      }
    })

    return item;
  } 
}

export { AddItemService }