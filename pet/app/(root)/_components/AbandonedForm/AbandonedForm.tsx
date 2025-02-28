"use client";

import React, { useState } from "react";
import styles from "./AbandonedForm.module.css";
import { InputBox, TextAreaBox } from "@/Components/Inputboxes/Inputboxes";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import Link from "next/link";
//import { useRouter } from "next/navigation";
import { CustomBg } from "@/Components/CustomBg/CustomBg";

 export const AbandonedForm = () => {

  const [petBreed, setPetBreed] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [petCondition, setPetCondition] = useState("");
  const [uploadImageURL, setUploadImageURL] = useState("");
  const[Success,SetSuccess]=useState("")
  const handleAbandonedSubmission = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/Abandoned", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          petBreed,
          location,
          phoneNumber,
          petCondition,
          uploadImageURL,
        }),
      });

      if (res.ok) {
        SetSuccess("Form Data Saved SuccessFully")
        setPetBreed("");
        setLocation("");
        setPhoneNumber("");
        setPetCondition("");
        setUploadImageURL("");

        // Navigate to the thank you or confirmation page
       
      } else {
        alert("Failed to report the abandoned Animal. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
  <div>
     <CustomBg
         ImgUrl='abandonedPet.jpg'
         h6Text='Abandoned Pets!'
         h5Text='Your Best Friend is Just a Click Away!'
         ButtonLinkText='Find Your Pet'
         ButtonLinkTo='/Pets'/>
    <div className={styles.AbandonedForm_Main}>
      <div className={styles.AbandonedForm_Row}>
        <form onSubmit={handleAbandonedSubmission}>
          <h6 className={styles.Report}>Report Abandoned Animal</h6>

          <InputBox
            labelText="Enter Pet Breed"
            Type="text"
            Id="petBreed"
            Value={petBreed}
            OnChange={(e: any) => setPetBreed(e.target.value)}
          />

          <InputBox 
            labelText="Enter Location"
            Type="text"
            Id="location"
            Value={location}
            OnChange={(e: any) => setLocation(e.target.value)}
          />

          <InputBox
            labelText="Enter Phone Number"
            Type="tel"
            Id="phoneNumber"
            Value={phoneNumber}
            OnChange={(e: any) => setPhoneNumber(e.target.value)}
          />

          <TextAreaBox
            labelText="Describe Pet's Condition"
            Id="petCondition"
            Value={petCondition}
            OnChange={(e: any) => setPetCondition(e.target.value)}
          />

          <div className={styles.ImageUpload}>
            <label htmlFor="uploadImg">Upload Image</label>
            <div className={styles.UploadDropzone_WithImg} id="uploadImg">
              <UploadDropzone
                appearance={{
                  container: {
                    width: "300px",
                    height: "300px",
                  },
                  uploadIcon: {
                    color: "var(--main)",
                  },
                  button: {
                    background: "var(--main)",
                  },
                  label: {
                    color: "var(--main)",
                  },
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files", res);
                  setUploadImageURL(res[0].url);
                }}
                onUploadError={(error) => {
                  console.error("Error uploading image:", error);
                }}
              />
              {uploadImageURL && (
                <Link href={uploadImageURL} target="_blank">
                  <Image
                    src={uploadImageURL}
                    alt="Uploaded Image"
                    height={300}
                    width={300}
                  />
                </Link>
              )}
            </div>
          </div>
          <p className={styles.Success}>{Success}</p>
     

          <button className={styles.btn} type="submit">
            Report Abandoned Animal
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AbandonedForm;
