import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import styles from "./styles.module.css";
import Btn from "../Btn";

const PricingCards = (props) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className={`${styles.pricingCard} col-10 col-md-3 m-5`}
    >
      <ListGroup variant="flush">
        <ListGroup.Item className={`${styles.pricingCardHeading} text-center`}>
          {props.title}
        </ListGroup.Item>
        <ListGroup.Item className="pb-5">
          <div className={`${styles.pricingCardCost} text-center`}>
            &#8377; {props.cost}
          </div>
          <div>
            {props.features.map((feature, index) => (
              <div key={index} className="d-flex justify-content-around align-items-center mt-3">
                <i className={`${styles.pricingCardpricingIcon} fas fa-check`}></i>
                <span className={styles.pricingCardpricingText}>{feature}</span>
              </div>
            ))}
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="text-center p-4">
          <Btn title="Apply" onClick={props.onClick} />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PricingCards;

// <i class="fas fa-check"></i>
