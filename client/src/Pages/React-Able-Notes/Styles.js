import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import CodeSnippet from "../../Components/CodeSnippet";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";
import TabSpace from "../../Components/TabSpace";

const Styles = () => {
  return (
    <div>
      <PageHeading>Styles in React</PageHeading>
      <Container className="pageSection">
        <Content>
          There are several ways in which we can add styles to our React
          project. All of them are listed below.
        </Content>
        <ol>
          <li className="listItem">
            <Heading title="Inline styles" />
            <Content>
              To style an element with the inline style attribute, the value is
              passed a JavaScript object. Incase of the styles that use -, they
              are converted to a camelCase property and then passed in the
              object.
            </Content>
            <CodeSnippet>
              {
                '<h1 style={{backgroundColor: "lightblue", color: “red”}}>I love Heapify ReactAble!!</h1>'
              }
            </CodeSnippet>
          </li>
          <li>
            <Heading title="JavaScript Object" />
            <Content>
              We can also create an object with styling information, and refer
              to it in the style attribute inside the Component.
            </Content>
            <CodeSnippet>
              {"render() {"}
              <br />
              <TabSpace />
              {
                'const mystyle = {color: "white",backgroundColor: "blue",padding: "10px"};'
              }
              <br />
              <TabSpace />
              {
                "return (<div><h1 style={mystyle}>I love Heapify ReactAbel!!</h1><p>Hello World!!</p></div>);"
              }
              <br /> {"}"}
            </CodeSnippet>
          </li>
          <li>
            <Heading title="CSS stylesheet" />
            <Content>
              We can write the CSS styling in a separate file, and just save the
              file with the .css file extension, and then import it in our
              application. This is the general convention that we all have
              followed till now while working. But this way of adding styles
              might cause some problems as it will create global styles. So, the
              styles added via this method will apply to all the files
              irrespective of whether they are imported or not.
            </Content>
            <Content>
              For example: If we have added some styles to ul tag, then those
              styles will be applicable to all the files in the project. So, in
              order to overcome this problem, we have another way of importing
              the files.
            </Content>
          </li>
          <li>
            <Heading title="CSS Modules" />
            <Content>
              CSS Modules are convenient for components that are placed in
              separate files. The CSS inside a module is available only for the
              component that imported it, and we do not have to worry about name
              conflicts. We can create a CSS module with the{" "}
              <strong>.module.css</strong> extension and import the stylesheet
              in our component.
            </Content>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default Styles;
