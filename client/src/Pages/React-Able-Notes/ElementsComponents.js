import React from "react";
import { Container } from "react-bootstrap";
import Content from "../../Components/Resources/Content";
import Heading from "../../Components/Resources/Heading";
import SubHeading from "../../Components/Resources/SubHeading";
import "./styles.css";
import PageHeading from "../../Components/Resources/PageHeading";
import Footer from "../../Components/Footer";

const ElementsComponents = () => {
  return (
    <div>
      <PageHeading>Elements & Components</PageHeading>
      <Container className="pageSection">
        <ol>
          <li>
            <Heading title="Elements" />
            <Content>
              An element is a plain object describing a component instance or
              DOM node and its desired properties. It contains information only
              about the component type (eg: a button), its properties, and any
              child element inside it. In simple words, an element is a way to
              tell React what you want to see on the screen. You cannot call any
              methods on the element. It’s just an immutable description object.
            </Content>
          </li>
          <li>
            <Heading title="Components" />
            <Content>
              A React Component is a template, a blueprint, a global definition.
              This can be either a function or a class. If the component is a
              functional one, then it returns an element, but if the component
              is a Class one then it renders the element. In simple words, it is
              a function or class that accepts an input(props) and returns a
              React element. React components are independent and reusable
              blocks of code.
            </Content>
            <Content>
              A React component can have methods and can also receive props as
              well. Components also have the state which they use to display
              dynamic content. React components are of two types:
            </Content>
            <ul style={{ listStyleType: "circle" }}>
              <li>Class components</li>
              <li>Functional components</li>
            </ul>
            <b>Note:</b> The name of a React Component must start with a capital
            letter.
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <SubHeading title="Class Components" />
                <Content>
                  React class-based components are the bread and butter of most
                  modern web apps built in ReactJS. These components are simple
                  classes (made up of multiple functions that add functionality
                  to the application). All class-based components are child
                  classes for the Component class of ReactJS. So, the component
                  has to include the extends React.Component statement, this
                  statement creates an inheritance to React.Component, and gives
                  the component access to React.Component's functions. Class
                  components also require a render() method, which returns the
                  code to be displayed i.e. JSX. The main feature of class-based
                  components is that they have access to a state which dictates
                  the current behavior and appearance of the component. This
                  state can be modified by calling the setState() function. One
                  or more variables, arrays, or objects defined as part of the
                  state can be modified at a time with the setState() function.
                  Class-based components also have access to Lifecycle methods.
                </Content>
              </li>
              <li>
                <SubHeading title="Functional Components" />
                <Content>
                  Functional components are just simple JavaScript functions. We
                  can create a functional component in React by writing a simple
                  JavaScript function. These functions may or may not receive
                  data as parameters(props). In the functional Components, the
                  return value is the JSX code to render to the DOM tree.
                  Functional components lack a significant amount of features as
                  compared to class-based components. So, in February 2019 React
                  16.8 was launched which introduced the concept of React Hooks.
                  Hooks are special functions that added a lot of missing
                  functionalities in the functional components. Functional
                  components do not have access to dedicated state variables
                  like class-based components, this was one of the problems that
                  were overcome by the introduction of hooks.
                </Content>
                <Content>
                  Class-based components are slightly slower than their
                  functional counterparts. The difference is very small and is
                  almost negligible for smaller web apps – though the
                  performance difference increases when the number of components
                  in the app increases. Moreover, class-based components involve
                  a lot more coding on the programmer’s part, making them
                  slightly more inefficient to use. And hence, functional
                  components are some of the more common components that you’ll
                  come across while working in React.
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

export default ElementsComponents;
