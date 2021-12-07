import React from "react";
import PageHeading from "../Components/PageHeading";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getLocalData } from "../Utils/LocalStorage";
import "./styles.css";
import ContentCard from "../Components/ContentCard";
import Footer from "../Components/Footer";

const Home = () => {
  const history = useHistory();
  const flag =
    getLocalData("heapifyUser")["role"] === "reactable" ? true : false;

  return (
    <div>
      <PageHeading>Heapify ReactAble</PageHeading>
      <Container className="d-flex flex-wrap justify-content-center pageSection">
        <ContentCard
          show={flag}
          title="Basics & Installation"
          navigate={() => history.push("/ReactAble/basics")}
          data={[
            "What is React?",
            "Benefits of React",
            "Installation",
            "Writing First React Project",
          ]}
        />
        <ContentCard
          show={flag}
          title="Elements & Components"
          navigate={() => history.push("/ReactAble/elements-components")}
          data={[
            "Elements",
            "Components",
            "Class Components",
            "Functional Components",
          ]}
        />
        <ContentCard
          show={flag}
          title="JSX"
          navigate={() => history.push("/ReactAble/JSX")}
          data={["createElement()", "What is JSX?", "Features of JSX"]}
        />
        <ContentCard
          show={flag}
          title="State & Props"
          navigate={() => history.push("/ReactAble/state-props")}
          data={[
            "What is State?",
            "How to use and manage state?",
            "Props",
            "Use of super keyword",
          ]}
        />
        <ContentCard
          show={flag}
          title="Styles in React"
          navigate={() => history.push("/ReactAble/Styles")}
          data={[
            "Inline styles",
            "JavaScript Object",
            "CSS stylesheet",
            "CSS Modules",
          ]}
        />
        <ContentCard
          show={flag}
          title="DOM & Virtual DOM"
          navigate={() => history.push("/ReactAble/DOM")}
          data={[
            "What is DOM?",
            "What is Virtual DOM?",
            "Working of Virtual DOM",
          ]}
        />
        <ContentCard
          show={flag}
          title="Lifecycle Methods"
          navigate={() => history.push("/ReactAble/lifecycle-methods")}
          data={[
            "What are Lifecycle Methods?",
            "Mounting Phase",
            "Updating Phase",
            "Unmounting Phase",
          ]}
        />
        <ContentCard
          show={flag}
          title="React Hooks"
          navigate={() => history.push("/ReactAble/hooks")}
          data={[
            "What are React Hooks?",
            "Use of React Hooks",
            "Various React Hooks",
          ]}
        />
        <ContentCard
          show={flag}
          title="Npm & Array methods"
          navigate={() => history.push("/ReactAble/npm-array-methods")}
          data={[
            "What are npm packages?",
            "map & filter methods",
            "Lists & Keys",
          ]}
        />
        <ContentCard
          show={flag}
          title="Event Handling"
          navigate={() => history.push("/ReactAble/event-handling")}
          data={["Handling events in React", "What are synthetic events?"]}
        />
        <ContentCard
          show={flag}
          title="Context API"
          navigate={() => history.push("/ReactAble/context-API")}
          data={[
            "What is Context API?",
            "createContext",
            "Providers",
            "Consumers",
          ]}
        />
        <ContentCard
          show={flag}
          title="React Router"
          navigate={() => history.push("/ReactAble/react-router")}
          data={[
            "What is React Router?",
            "Installation",
            "Routes",
            "Route Matchers",
            "Route Changers",
          ]}
        />
        <ContentCard
          show={flag}
          title="APIs"
          navigate={() => history.push("/ReactAble/API")}
          data={[
            "What are APIs?",
            "Fetch & Axios",
            "HTTP methods",
            "Status codes",
          ]}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
