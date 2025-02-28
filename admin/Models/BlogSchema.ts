import mongoose,{Schema} from "mongoose";



const BlogSchema =new Schema (
    {
        BlogTitle:{
            type: String,
            required: true,
        },
        BlogIntro:{
            type: String,
            required: true,
        },
        BlogDesc:{
            type: String,
            required: true,
        },
        UploadImage:{
            type: String,
            required: true,
        }, 
    },{
        timestamps: true
    }
)

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs",BlogSchema)


export default Blogs