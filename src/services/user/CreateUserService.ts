import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //verificação dos dados enviados
    if (!email) {
      throw new Error("Email incorrect");
    }
    //dados estão cdastrados
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userAlreadyExists) {
      throw new Error("Usuários já existe");
    }
    //criptografia da senha
    //a senha é criptografada com o bcryptjs, e o número 8 é a quantidade de vezes que a senha será criptografada
    const passwordHash = await hash(password, 8);


    //criação do usuário
    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true,
      }
    })



    return user;
  }
}

export { CreateUserService };
