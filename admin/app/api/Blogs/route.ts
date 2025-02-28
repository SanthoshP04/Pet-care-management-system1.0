

import {NextResponse} from "next/server"

import ConnectToDb from "@/utils/connectToDb";

import Blogs from "@/Models/BlogSchema";

export async function POST(req: Request) {
    const{
        BlogTitle,
                BlogIntro,
                BlogDesc,
                UploadImage
      } = await req.json();

   await ConnectToDb()
   await Blogs.create({
    BlogTitle,
            BlogIntro,
            BlogDesc,
            UploadImage
   }) 
   return NextResponse.json({
             message: "New Blog Created"
        })
    }
// for getting data blogs
    export async function GET() {
            await ConnectToDb()
            const AllBlogsData = await Blogs.find({})
            return NextResponse.json({AllBlogsData })
         
    }