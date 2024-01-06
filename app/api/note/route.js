import prisma from "@/prisma/prismaClient";


export async function POST(res){
    const { title, content, email } = await res.json();

    if (title != "" && content != "" && email){

        const note = await prisma.note.create({
            data: {
                title: title,
                content : content,
                writerEmail : email,
                published : true
            }
        })

        if (note){
            return Response.json({
                msg : "posted successfully",
                note : note
            }, {status: 201})
        }

    }

    return Response.json(JSON.stringify({
        msg : "unable to post"
    }), {status : 501})
    
}


export async function GET(res){
    const notes = await prisma.note.findMany({
        where : {
            published : true
        },
        select : {
            id : true,
            title : true,
            content : true,
            writer : {
                select : {
                    name : true,
                    username : true
                }
            },
            writerEmail : true,
            upvotes : true,
            downvotes : true,
            shareCount : true
        }
    });


    if(notes){
        return Response.json({
            notes : notes
        }, {status : 201})
    }
}