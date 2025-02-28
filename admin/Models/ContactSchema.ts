import mongoose, { Schema } from "mongoose";


 const ContactSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        Subject: {
            type: String,
            required: true,
        },
        Message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
 )


 const ContactUs = mongoose.models.ContactUs || mongoose.model('ContactUs',ContactSchema)


 export default ContactUs