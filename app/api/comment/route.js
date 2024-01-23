import prisma from "@/prisma/prismaClient";

export async function GET(req) {

    const parentId = new URL(req.url).searchParams.get("parentId") || null;

    if(parentId && parentId != ""){
        const comments = await prisma.comment.findMany({
            where : {
                parentId : parentId
            },
            select : {
                id : true,
                value : true,
                writtenBy : true,
                _count: {
                    select: { replies : true },
                  },             
            }
        });
    
        if (comments){
            return Response.json({
                msg: "comment found!",
                comments : comments
            }, { status: 201 });
        }
    }

    return Response.json({
        msg: "Comment Not Found!",
    }, { status: 200 });
}

export async function POST(req) {
    const { value, writtenBy, parentId } = await req.json();

    if (value != "" && writtenBy != "" && parentId != ""){

        const comment = await prisma.comment.create({
            data: {
                value,
                writtenBy,
                parentId
            },
            select : {
                id : true,
                value : true,
                writtenBy : true,
                _count: {
                    select: { replies : true },
                  },             
            }
        })

        if (comment){
            return Response.json({
                msg : "commented successfully",
                comment : comment
            }, {status: 201})
        }

    }

    return Response.json(JSON.stringify({
        msg : "unable to post"
    }), {status : 501})

}