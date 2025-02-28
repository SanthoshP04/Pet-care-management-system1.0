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
