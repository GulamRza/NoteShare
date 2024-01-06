import prisma from "@/prisma/prismaClient";


export async function GET({ params }){

    const id = new URL(req.url).searchParams.get("id");
    const note = await prisma.note.findUnique({
        where : {
            id : params.id
        }
    })

    if(note){
        return Response.json({
            msg : "Here's the result",
            note : note
        }, {status : 201})
    }
    
    return Response.json({
        msg : "Note not found",
    }, { status : 201 })
}