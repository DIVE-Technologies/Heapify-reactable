import React from "react";
import styles from "./styles.module.css";

const FeatureCards = (props) => {
  return (
    <div className="col-12 col-md-4 mt-5 d-flex flex-column justify-content-center align-items-center">
      <div className={styles.featureImageContainer}>
        <img src={props.image} alt="featureIcon" height="100" width="100" />
      </div>
      <div className={`${styles.featureCardHeading} text-center`}>
        {props.title}
      </div>
      <div className={`${styles.featureSectionData} text-center`}>
        {props.data}
      </div>
    </div>
  );
};

export default FeatureCards;
