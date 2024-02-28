import React from "react";
import styles from "../home.module.css";
import Image from "next/image";

const Activities = ({ actCard }) => {
  return (
    <div className={`md:container md:mx-auto ${styles.activitiesContainer}`}>
      <h1>Activities</h1>

      <div className={styles.activities}>
        {actCard.map((data, index) => (
          <div key={index} className={styles.card}>
            <Image
              className={styles.cardImage}
              alt={data.title}
              src={data.image}
            />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
