import {NextResponse} from "next/server"

import ConnectToDb from "@/lib/connectToDb";

import ContactUs from '@/models/ContactModel'

export async function POST(req: Request) {
    const{
      Name,
      Email,
       Subject,
       Message
      } = await req.json();

   await ConnectToDb()
   await ContactUs.create({
    Name,
     Email,
     Subject,
     Message
   }) 
  
   return NextResponse.json({message:"Contact Form Submited"})
}
//  export async function GET(req: Request) {
  //   const{
  //     Name,
  //     Email,
  //      Subject,
  //      Message
  //     } = await req.json();

  //  await ConnectToDb()
  //  await ContactUs.create({
  //   Name,
  //    Email,
  //    Subject,
  //    Message
  //  }) 