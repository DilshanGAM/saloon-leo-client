import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){

    const name = req.nextUrl.searchParams.get("name")
    const age = req.nextUrl.searchParams.get("age")
    const city = req.nextUrl.searchParams.get("city")

    console.log(name)
    console.log(age)
    console.log(city)
    
    return NextResponse.json({
        message : "Get request received into /api/products"
    })
}