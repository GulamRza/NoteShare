
export async function POST(req){
    const id = parseInt(new URL(req.url).searchParams.get("id")) || -1;
    const note = await prisma.note.update({
        where : {
            id : id
        },
        data : {
            downvotes : {
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
