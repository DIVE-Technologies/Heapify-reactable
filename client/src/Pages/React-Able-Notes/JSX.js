import React from "react";
import "./styles.css";
import PageHeading from "../../Components/Resources/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import CodeSnippet from "../../Components/Resources/CodeSnippet";
import Content from "../../Components/Resources/Content";
import Heading from "../../Components/Resources/Heading";
import SubHeading from "../../Components/Resources/SubHeading";

const JSX = () => {
  return (
    <div>
      <PageHeading>JSX</PageHeading>
      <Container className="pageSection">
        <ol>
          <li className="listItem">
            <Heading title="React.createElement()" />
            <Content>
              Initially when React was launched, the syntax for writing elements
              was very complex because it used .createElement():
            </Content>
            <CodeSnippet>
              React.createElement(type, [props], [children])
            </CodeSnippet>
            <Content>
            This is the syntax for React.createElement function. Let’s take a
            deeper look at the parameters that are being passed to it.</Content>
            <ul className="listItem">
              <li>
                Type is an HTML tag like h1, div or it can be a React component
                as well.
              </li>
              <li>
                Props are the attributes that we want the element to have. They
                could be the className or any other prop.
              </li>
              <li>
                Children contain other HTML elements or a component. These are
                the child elements of this element/component.
              </li>
            </ul>
            <Content>
              In order to create a list with just 2 elements, we have to write a
              lot of code.
            </Content>
            <CodeSnippet>
              React.createElement("ul",{'{}'},[React.createElement("li",{'{}'},"First Element"),React.createElement("li",{'{}'},"Second element")]);
            </CodeSnippet>
            <Content>
              This syntax of code becomes very complicated in case of complex
              applications with hundreds of thousands lines of code. So, in
              order to solve this, the concept of JSX was introduced.
            </Content>
          </li>

          <li>
            <Heading title="What is JSX?" />
            <Content>
              JSX stands for JavaScript XML. It allows us to write HTML in
              React. It converts HTML tags into react elements. JSX allows us to
              write HTML elements in JavaScript and place them in the DOM
              without any createElement() method. Every JSX is converted to the
              React.createElement function call that the browser understands.
            </Content>
            <Container>
              <SubHeading title="Without JSX" />
              <CodeSnippet>
                const element=React.createElement("h1",{},I love Heapify ReactAble!!); ReactDOM.render(element,document.getElementById("root"));
              </CodeSnippet>
              <SubHeading title="With JSX" />
              <CodeSnippet>
                const element={"<h1>"}I love Heapify ReactAble!!{"</h1>"};
                ReactDOM.render(element, document.getElementById('root'));
              </CodeSnippet>
            </Container>
            <Content>
              JSX is an extension of the JavaScript language based on ES6, and
              is translated into regular JavaScript at runtime. With JSX we can
              write expressions inside curly braces {}. The expression can be a
              React variable, or property, or any other valid JavaScript
              expression. JSX will execute the expression and return the result.
            </Content>
            <CodeSnippet>
              const element = {"<h1>"}React is {"{5 + 5}"} times better with JSX
              {"</h1>"};
            </CodeSnippet>
            <Content>
              We can use conditional statements inside JSX. In order to do so,
              we should put the if statements outside of the JSX, or use a
              ternary expression instead:
            </Content>
            <CodeSnippet>
              const element ={" "}
              {'<h1>{(greet) !== "formal" ? "Hey!" : "Hello!"}</h1>'}
            </CodeSnippet>
            <Content>
              The browser does not understand the JSX because it's not a valid
              JavaScript code. This is because we're assigning an HTML tag to a
              variable that is not a string but just HTML code. So to convert it
              to browser understandable JavaScript code, we use a tool like
              Babel which is a JavaScript compiler/transpiler.
            </Content>
            <strong>Note</strong>: For more information on babel, please refer:{" "}
            <a rel="noreferrer" target="_blank" href="https://babeljs.io/">
              babel
            </a>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default JSX;
