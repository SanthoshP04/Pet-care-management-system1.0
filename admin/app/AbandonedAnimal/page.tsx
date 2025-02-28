import Wrapper from '@/Components/Wrapper/Wrapper';
import React from 'react';
import styles from './page.module.css';

const AbandonedData = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/Abandoned", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return { AbandonedFormData: [] }; // Fallback for error
  }
};

const AbandonedAnimalPage = async () => {
  const { AbandonedFormData } = await AbandonedData();
  console.log(AbandonedFormData); // Log the data to check its structure

  return (
    <Wrapper>
      <h6 className={styles.h6text}>Abandoned Animal Data</h6>
      <div className={styles.Abandoned_Main}>
        <div className={styles.Abandoned_Rows}>
          {AbandonedFormData.length > 0 ? (
            AbandonedFormData.map((data: any) => (
              <div key={data._id} className={styles._Box}>
                {/* Display Image */}
                <div >
                  <img
                    src={data.uploadImageURL}
                    alt="Abandoned Pet"
                    className={styles.PetImage}
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                {/* Pet Information */}
                <h6>
                  <span>Pet Breed: </span>
                  {data.petBreed}
                </h6>
                <h6>
                  <span>Location: </span>
                  {data.location}
                </h6>
                <h6>
                  <span>Phone Number: </span>
                  {data.phoneNumber}
                </h6>
                <p>
                  <span>Pet Condition: </span>
                  {data.petCondition}
                </p>

                {/* Display Created At */}
                <p className={styles.CreatedAt}>
                  <span>Created At: </span>
                  {
                    new Intl.DateTimeFormat('en-IN', {
                      year: 'numeric', month: '2-digit', day: '2-digit'
                    }).format(new Date(data.createdAt))
                  }
                </p>
              </div>
              </div>
            ))
          ) : (
            <p>No abandoned pet data available.</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default AbandonedAnimalPage;
