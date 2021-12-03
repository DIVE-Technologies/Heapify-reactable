import React from "react";
import { Card } from "react-bootstrap";

const ContentCard = (props) => {
  const visible = { width: "18rem", margin: 10 };
  const invisible = { width: "18rem", margin: 10, visibility: "hidden" };
  const stl = props.show === "true" ? visible : invisible;
  return (
    <Card style={stl} className="shadow-lg">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <ul>
              {props.data.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </Card.Text>
        </div>
        <Card.Link style={{ textDecoration: "none" }} onClick={props.navigate}>
          Resources
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;
