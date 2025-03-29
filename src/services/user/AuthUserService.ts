import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken";

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

    //gerar token jwt e devolver para o frontend
    const token = sign(
        {
        name: user.name,
        email: user.email,
    },
    process.env.JWT_SECRET,
    {
        subject: user.id,
        expiresIn: "30d"

    }
)

    return { 
        id: user.id,
        name: user.name,
        email: user.email,
        token: token
     };
  }
}


export {AuthUserService}