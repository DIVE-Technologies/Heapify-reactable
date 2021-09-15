import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import CodeSnippet from "../../Components/CodeSnippet";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";

const StateProps = () => {
  return (
    <div>
      <PageHeading>State And Props</PageHeading>
      <Container className="pageSection">
        <ol>
          <li className="listItem">
            <Heading title="What is State" />
            <Content>
              The state is an instance of React Component Class that can be
              defined as an object of a set of observable properties that
              control the behavior of the component. In other words, the State
              of a component is an object that holds some information that may
              change over the lifetime of the component. A state is an
              observable object that is to be used to hold data that may change
              over time and to control the behavior after each change. States
              can only be used in Class Components (there are some exceptions to
              this which we will study in the further topics). The state object
              is initialized in the constructor:
            </Content>
            <CodeSnippet>
              {
                "constructor(props) { super(props); this.state = {attribute: value};}"
              }
            </CodeSnippet>
            <Content>
              In order to refer to the state object anywhere in the component,
              we use the this.state.property syntax.
            </Content>
            <CodeSnippet>this.state.attribute</CodeSnippet>
          </li>

          <li>
            <Heading title="How to manage the state?" />
            <Content>
              React provides its own method setState() to update the state.
              setState() method takes a single parameter and expects an object
              which should contain the set of values to be updated. Once the
              update is done the method implicitly calls the render() method to
              repaint the page. So, the correct method of updating the value of
              a state is:
            </Content>
            <CodeSnippet>
              {'this.setState({attribute: "new-value"})'}
            </CodeSnippet>
            <Content>or</Content>
            <CodeSnippet>
              {
                'this.setState({attribute1: "new-value", attribute2: “new-value”});'
              }
            </CodeSnippet>
            <Content>
              React is highly efficient and thus uses asynchronous state updates
              i.e. React may update multiple setState() updates in a single go.
              Thus using the value of the current state may not always generate
              the desired result. For example: If we have to update the counter
              by 1 each time the button is clicked, one way could be to get the
              current state value and increment it by 1.
            </Content>
            <CodeSnippet>
              {"this.setState({counter: this.state.count });"}
            </CodeSnippet>
            <Content>
              But the above method will produce unexpected results sometimes
              because of the asynchronous behaviour of setState(). The correct
              way would be to access the previous state and update it by 1.
            </Content>
            <CodeSnippet>
              {
                "this.setState((prevState, props) => ({counter: prevState.count}));"
              }
            </CodeSnippet>
          </li>

          <li>
            <Heading title="Props" />
            <Content>
              Props is a special keyword in React, which stands for properties
              and is being used for passing data from one component to another.
              Props are passed as HTML attributes to the Components. This could
              be considered like passing parameters to a JavaScript function and
              then using that value inside the function.
            </Content>
            <CodeSnippet>{'const element = <Car brand="Ford" />'}</CodeSnippet>
            <Content>
              The brand value passed in the Car component is a prop. This value
              could be access inside the Car component as:
            </Content>
            <CodeSnippet>
              {
                "render() {return <h2>The value of the prop is: {this.props.brand}!</h2>;}"
              }
            </CodeSnippet>
            <Content>
              Furthermore, props' data is read-only, which means that data
              coming from the parent should not be changed by child components.
              If the React component has a constructor function, the props
              should always be passed to the constructor and also to the
              React.Component via the super() method.
            </Content>
            <CodeSnippet>{"constructor(props) {super(props);}"}</CodeSnippet>
          </li>
          <li>
            <Heading title="Use of super keyword" />
            <Content>
              In JavaScript, super refers to the parent class constructor. In a
              React class, it points to the React.Component implementation.
              Importantly, we can’t use this in a constructor until after we’ve
              called the parent constructor. So, if taken a look closely we’ll
              get to know that we can’t use this.props inside the constructor.
              So props are passed inside super so that the base React.Component
              constructor can initialize this.props and we can use them inside
              the constructor. But somehow, even if we call super() without the
              props argument, we’ll still be able to access this.props in the
              srender and other methods. And this is because React also assigns
              props on the instance right after calling the constructor. But
              still we should always pass props to super because it’s still
              confusing. Although, React would later assign this.props after the
              constructor has run. But this.props would still be undefined
              between the super call and the end of the constructor. It can be
              even more challenging to debug if this happens in some method
              that’s called from the constructor.
            </Content>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default StateProps;
