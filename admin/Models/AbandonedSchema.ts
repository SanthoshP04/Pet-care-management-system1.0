// // models/AbandonedSchema.js
// import mongoose,{Schema} from "mongoose";


// const AbandonedSchema = new Schema(
//   {
//     PetBreed: {
//       type: String,
//       required: true,
//     },
//     Location: {
//       type: String,
//       required: true,
//     },
//     PhoneNumber: {
//       type: String,
//       required: true,
//     },
//     PetCondition: {
//       type: String,
//       required: true,
//     },
//     UploadImageURL: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true, // Automatically add createdAt and updatedAt fields
//   }
// );

// // Create the model from the schema
// const Abandoned= mongoose.models.Abandoned || mongoose.model("Abandoned", AbandonedSchema);
// export default Abandoned
// models/AbandonedSchema.js
import mongoose,{Schema} from "mongoose";


const AbandonedSchema = new Schema(
  {
    petBreed: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    petCondition: {
      type: String,
      required: true,
    },
    uploadImageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the model from the schema
const Abandoneds= mongoose.models.Abandoned || mongoose.model("Abandoned", AbandonedSchema);
export default Abandoneds
