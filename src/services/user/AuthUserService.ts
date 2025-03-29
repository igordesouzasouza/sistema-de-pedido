import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthUserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    
    const user = await prismaClient.user.findFirst({
        where: {
            email: email
        }
    })
    if(!user){
        throw new Error("User not found")
    }

    //verificação de senha 
    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch){
        throw new Error("Invalid password")
    }

    

    return { ok: true };
  }
}


export {AuthUserService}