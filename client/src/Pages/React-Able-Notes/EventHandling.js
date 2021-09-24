import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import CodeSnippet from "../../Components/CodeSnippet";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";
import TabSpace from "../../Components/TabSpace";

const EventHandling = () => {
  return (
    <div>
      <PageHeading>Event Handling</PageHeading>
      <Container className="pageSection">
        <ol>
          <li>
            <Heading title="Events" />
            <Content>
              An event is an action that could be triggered as a result of the
              user action or a system-generated event. Handling events with
              React elements is very similar to handling events on DOM elements.
              We only need to keep two things in mind:
              <ul>
                <li>React events are named using camelCase.</li>
                <li>
                  With JSX we pass a function as the event handler, rather than
                  a string.
                </li>
              </ul>
              We create a method in the component and then pass that method to
              the event handler.
            </Content>
            <CodeSnippet>
              {"<button onClick={shoot}>Take the Shot!</button>"}
            </CodeSnippet>
            <Content>
              In class components, this keyword is not defined by default, so
              with regular functions this keyword represents the object that
              called the method, which can be the global window object, a HTML
              button, or anything else. So, if we have to use regular functions
              instead of arrow functions then we have to bind this to the
              component instance using the bind() method:
            </Content>
            <CodeSnippet>
              {"class Football extends React.Component {"}
              <br />
              <TabSpace />
              {"constructor(props) {"}
              <br />
              <TabSpace />
              <TabSpace />
              {"super(props);"}
              <br />
              <TabSpace />
              <TabSpace />
              {"this.shoot = this.shoot.bind(this);"}
              <br />
              <TabSpace />
              {"}"}
              <br />
              <TabSpace />
              {"shoot() { alert(this); }"}
              <br />
              <br />
              <TabSpace />
              {"render() {"}
              <br />
              <TabSpace />
              <TabSpace />
              {
                "return ( <button onClick={this.shoot}>Take the shot!</button> ); "
              }
              <br />
              <TabSpace />
              {"}"}
              <br />
              {"}"}
            </CodeSnippet>
            <Content>
              So a better way is to use arrow functions instead of using the
              older JavaScript functions. With arrow functions, this will always
              represent the object that defined the arrow function. In simple
              words, binding with this keyword is not required if we are using
              arrow functions.
            </Content>
            <CodeSnippet>
              {"class Football extends React.Component {"}
              <br />
              <TabSpace />
              {"shoot = () => { alert(this); }"}
              <br />
              <TabSpace />
              {"render() {"}
              <br />
              <TabSpace />
              <TabSpace />
              {
                "return ( <button onClick={this.shoot}>Take the shot!</button> );"
              }
              <br />
              <TabSpace />
              {"}"}
              <br />
              {"}"}
            </CodeSnippet>
          </li>
          <li>
            <Heading title="Synthetic Events" />
            <Content>
              React has its own event handling system which is known as
              Synthetic Events. The synthetic event is a cross-browser wrapper
              of the browser's native event. Every React event is an instance of
              the Synthetic Event. React reuses the event objects, by pooling
              them, which results in performance gains.
              <br />
              Some of the very common events present in React are:
            </Content>
            <ul>
              <li>onKeyDown</li>
              <li>onKeyPress</li>
              <li>onKeyUp</li>
              <li>onFocus</li>
              <li>onChange</li>
              <li>onInput</li>
              <li>onSubmit</li>
              <li>onScroll</li>
              <li>onLoad</li>
              <li>onToggle</li>
            </ul>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default EventHandling;
