import prisma from "@/prisma/prismaClient";
import bcrypt from 'bcrypt';

export async function POST(req){
    
    const { email, name, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    
    if (email != "" && name != "" && password != ""){
        const user = await prisma.user.create({
            data: {
                email : email,
                name : name,
                username : name,
                password : hashedPassword
            },
        });

        if (user){
            return Response.json(JSON.stringify({
                msg : "User Created Successfully!",
                user : user
            }), {status : 201});
        }
    }

    return Response.json(JSON.stringify({
        msg : "Something Went Wrong!",
        user : "Not Found"
    }), {status : 501});
    
}

export async function GET(req){
    return Response.json(JSON.stringify({
        msg : "cannot get",
        user : {}
    }));
    
}