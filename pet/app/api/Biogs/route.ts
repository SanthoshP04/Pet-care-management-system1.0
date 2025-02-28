import ConnectToDb from "@/lib/connectToDb"
import Blogs from "@/models/BlogsSchema"
import { NextResponse } from "next/server"


// for getting data blogs
export async function GET() {
    await ConnectToDb()
    const AllBlogsData = await Blogs.find({})
    return NextResponse.json({AllBlogsData })
 
}