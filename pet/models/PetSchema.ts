import mongoose, { Schema } from "mongoose";

const PetSchema = new Schema(
    {
        PetName:{
            type: String,
            required: true,
        },
        PetBreed:{
            type: String,
            required: true,
        },
        PetGender:{
            type: String,
            required: true,
        },
        PetAge:{
            type: Number,
            required: true,
        },
        PetIntro:{
            type: String,
            required: true,
        },
        PetDesc:{
            type: String,
            required: true,
        },
        UploadImageURL:{
            type: String,
            required: true,
        },
    }
)


const Pet = mongoose.models.Pet || mongoose.model("Pet", PetSchema)

export default Pet