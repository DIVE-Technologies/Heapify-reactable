import React from "react";
import PageHeading from "../Components/Resources/PageHeading";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.css";
import ContentCard from "../Components/Resources/ContentCard";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <PageHeading>Heapify React-Able</PageHeading>
      <Container className="d-flex flex-wrap justify-content-center pageSection">
        <ContentCard
          title="Basics & Installation"
          navigate={() => history.push("/react-able/basics")}
          data={[
            "What is React?",
            "Benefits of React",
            "Installation",
            "Writing First React Project",
          ]}
        />
        <ContentCard
          title="Elements & Components"
          navigate={() => history.push("/react-able/elements-components")}
          data={["Elements", "Components", "Class Components", "Functional Components"]}
        />
        <ContentCard
          title="JSX"
          navigate={() => history.push("/react-able/JSX")}
          data={["createElement()", "What is JSX?", "Features of JSX"]}
        />
        <ContentCard
          title="State & Props"
          navigate={() => history.push("/react-able/State-Props")}
          data={[
            "What is State?",
            "How to use and manage state?",
            "Props",
            "Use of super keyword",
          ]}
        />
      </Container>
    </div>
  );
};

export default Home;
