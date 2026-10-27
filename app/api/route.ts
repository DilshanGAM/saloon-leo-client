import { NextRequest, NextResponse } from "next/server";

export function GET(){

    console.log("Get request received");
    return NextResponse.json({
        message : "Get request received in to /api"
    })
    
}

export async function POST(req : NextRequest){
    const body = await req.json()

    const message = "Good morning "+body.designation+" "+body.student+" Welcome to the "+body.subject+" class"

    console.log(message);

    return NextResponse.json(
        {
            welcomeNote : message
        }
    )

}


export function PUT(){

    console.log("Put request received");

}

export function DELETE(){

    console.log("Delete request received");

}