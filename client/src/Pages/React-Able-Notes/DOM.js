import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import CodeSnippet from "../../Components/CodeSnippet";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";

const DOM = () => {
  return (
    <div>
      <PageHeading>DOM & Virtual DOM</PageHeading>
      <Container className="pageSection">
        <ol>
          <li className="listItem">
            <Heading title="What is DOM?" />
            <Content>
              DOM Stands for Document Object Model. When a web page is loaded,
              the browser creates a Document Object Model of the page. The W3C
              Document Object Model (DOM) is a platform and language-neutral
              interface that allows programs and scripts to dynamically access
              and update the content, structure, and style of a document. It is
              a structured representation of the HTML elements that are present
              in a webpage or web-app. DOM represents the entire UI of your
              application. The DOM is represented as a tree data structure. It
              contains a node for each UI element present in the web document.
              <br />
              It defines:
              <ul style={{ listStyleType: "disc" }}>
                <li className="listItem">The HTML elements as objects</li>
                <li className="listItem">
                  The properties of all HTML elements
                </li>
                <li className="listItem">
                  The methods to access all HTML elements
                </li>
                <li className="listItem">The events for all HTML elements</li>
              </ul>
            </Content>
          </li>
          <li>
            <Heading title="What is Virtual DOM?" />
            <Content>
              In React, for every DOM object, there is a corresponding virtual
              DOM object. A virtual DOM object is a representation of a DOM
              object, like a lightweight copy. A virtual DOM object has the same
              properties as a real DOM object, but it lacks the real thing’s
              power to directly change what’s on the screen. Manipulating the
              DOM is slow. Manipulating the virtual DOM is much faster, because
              nothing gets drawn on screen. Think of manipulating the virtual
              DOM as editing a blueprint, as opposed to moving rooms in an
              actual house.
            </Content>
          </li>
          <li>
            <Heading title="Working of Virtual DOM" />
            <Content>
              In react, everything is treated as a component be it a functional
              component or class component. A component can contain a state.
              Each time we change something in our JSX file or let’s put it in
              simple terms, whenever the state of any component is changed,
              react updates it’s Virtual DOM tree. Though it may sound that it
              is ineffective, the cost is not very significant as updating the
              virtual DOM doesn’t take much time. React maintains two Virtual
              DOM at each time, one contains the updated Virtual DOM and one
              which is just the pre-update version of this updated Virtual DOM.
            </Content>
            <Content>
              Now it compares the pre-update version with the updated Virtual
              DOM and figures out what exactly has changed in the DOM like which
              components have been changed. This process of comparing the
              current Virtual DOM tree with the previous one is known as{" "}
              <strong>diffing.</strong> Once React finds out what exactly has
              changed then it updates those objects only, on real DOM. The
              changes to the real DOM are sent in batches instead of sending any
              update for a single change in the state of a component. We know
              that the re-rendering of the UI is the most expensive part and
              React manages to do this most efficiently by ensuring that the
              Real DOM receives batch updates to re-render the UI. This entire
              process of transforming changes to the real DOM is called{" "}
              <strong>Reconciliation.</strong>
            </Content>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default DOM;
