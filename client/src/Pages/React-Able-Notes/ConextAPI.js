import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";
import SubHeading from "../../Components/SubHeading";
import CodeSnippet from "../../Components/CodeSnippet";
import TabSpace from "../../Components/TabSpace";

const ConextAPI = () => {
  return (
    <div>
      <PageHeading>Context API</PageHeading>
      <Container className="pageSection">
        <ol>
          <li className="listItem">
            <Heading title="What is Context API" />
            <Content>
              In a typical React application, data is passed top-down (parent to
              child) via props, but such usage can be cumbersome for certain
              types of props (e.g. locale preference, UI theme) that are
              required by many components within an application. Context
              provides a way to share values like these between components
              without having to explicitly pass a prop through every level of
              the tree. Context is designed to share data that can be considered
              “global” for a tree of React components, such as the current
              authenticated user, theme, or preferred language. <br />
              The Context API can be used to share data with multiple
              components, without having to pass data through props manually.
            </Content>
            <ul>
              <li>
                <SubHeading title="createContext" />
                <Content>
                  To start with the Context API, the first thing we need to do
                  is create a context using the createContext function from
                  React.
                </Content>
                <CodeSnippet>
                  const NotesContext = createContext([]);
                </CodeSnippet>
                <Content>
                  The createContext function accepts an initial value, but this
                  initial value is not required. After creating the context,
                  this context now has two React components that are going to be
                  used: Provider and Consumer.
                </Content>
              </li>
              <li>
                <SubHeading title="Provider" />
                <Content>
                  The Provider component is going to be used to wrap the
                  components that are going to have access to our context. The
                  Provider component receives a prop called value, which can be
                  accessed from all the components that are wrapped inside
                  Provider, and it will be responsible to grant access to the
                  context data.
                </Content>
                <CodeSnippet>
                  {"<NotesContext.Provider value={this.state.notes}>"}
                  <br />
                  <TabSpace />
                  {"// the context goes here"}
                  <br />
                  {"</Notes.Provider> "}
                </CodeSnippet>
                <Content>
                  All consumers that are descendants of a Provider will
                  re-render whenever the Provider’s value prop changes. The
                  propagation from Provider to its descendant consumers is not
                  subject to the shouldComponentUpdate method, so the consumer
                  is updated even when an ancestor component skips an update.
                </Content>
              </li>
              <li>
                <SubHeading title="Consumer" />
                <Content>
                  After we wrap all the components that are going to need access
                  to the context with the Provider component, we need to tell
                  which component is going to consume that data. The Consumer
                  component allows a React component to subscribe to the context
                  changes. The component makes the data available using a render
                  prop.
                </Content>
                <CodeSnippet>
                  {"<NotesContext.Consumer>"}
                  <br />
                  <TabSpace />
                  {"{values => <h1>{value</h1>}"}
                  <br />
                  {"</Notes.Consumer>"}
                </CodeSnippet>
                <Content>
                  Consumer require a function as a child. The function receives
                  the current context value and returns a React node. The value
                  argument passed to the function will be equal to the value
                  prop of the closest Provider for this context above in the
                  tree.
                </Content>
              </li>
            </ul>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default ConextAPI;
