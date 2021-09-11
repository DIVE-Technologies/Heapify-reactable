import React from "react";
import PageHeading from "../Components/PageHeading";
// import ReactCardFlip from "react-card-flip";
import { Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './styles.css';

const Home = () => {
  const history = useHistory();
  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsFlipped(!isFlipped);
  // };

  const navigateWeek2 = () => {
    history.push("/react-able/week2");
  };

  return (
    <div>
      <PageHeading>Heapify React-Able</PageHeading>
      {/* <ReactCardFlip isFlipped={isFlipped}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Front</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Back</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </ReactCardFlip> */}
      <Container className='d-flex justify-content-center pageSection'>
      <Card style={{ width: "18rem" }} className="shadow-lg">
        <Card.Body>
          <Card.Title>Week 2</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Basics of React
          </Card.Subtitle>
          <Card.Text>
            <ul>
              <li>What is React?</li>
              <li>Benefits of React</li>
              <li>Installation</li>
              <li>Writing First React Project</li>
              <li>Elements and Components</li>
            </ul>
          </Card.Text>
          <Card.Link style={{ textDecoration: 'none' }} onClick={navigateWeek2}>Resources</Card.Link>
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
};

export default Home;
