import prisma from "@/prisma/prismaClient";


export async function GET(req){

    const id = new URL(req.url).searchParams.get("id");
    const note = await prisma.note.findUnique({
        where : {
            id : id
        },
        select : {
            title : true,
            upvotes : true
        }
    })

    if(note){
        return Response.json({
            msg : "Here's the result",
            title : note.title,
            upvotes : note.upvotes
        }, {status : 201})
    }
    
    return Response.json({
        msg : "Note not found",
    }, { status : 201 })
}

export async function POST(req){
    const id = new URL(req.url).searchParams.get("id");
    const note = await prisma.note.update({
        where : {
            id : id
        },
        data : {
            upvotes : {
                increment: 1
            }
        }
    });

    if(note){
        return Response.json({
            msg : "Here's the result",
            title : note.title,
            upvotes : note.upvotes
        }, {status : 201})
    }
    
    return Response.json({
        msg : "Note not found",
    }, { status : 201 }) 
}