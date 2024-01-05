import prisma from "@/prisma/prismaClient";

export async function POST(req){
    
    const { email, name } = await req.json();
    
    if (email != "" && name != ""){
        const user = await prisma.user.create({
            data: {
                email : email,
                name : name,
                username : name,
                password : "secret"
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