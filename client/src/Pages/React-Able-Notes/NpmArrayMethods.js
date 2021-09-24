import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import CodeSnippet from "../../Components/CodeSnippet";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";
import SubHeading from "../../Components/SubHeading";
import TabSpace from "../../Components/TabSpace";

const NpmArrayMethods = () => {
  return (
    <div>
      <PageHeading>Array Methods</PageHeading>
      <Container className="pageSection">
        <ol>
          <li>
            <Heading title="What are npm packages?" />
            <Content>
              Node Package Manager (NPM) is a command line tool that installs,
              updates or uninstalls Node. js packages in your application. It is
              also an online repository for open-source Nodejs packages. The
              node community around the world creates useful modules and
              publishes them as packages in this repository. You can checkout
              various packages at:&nbsp;
              <a href="https://www.npmjs.com/" rel="noreferrer" target="_blank">
                npm
              </a>
              <br />
              To install any package locally, we could use the following command
            </Content>
            <CodeSnippet>{"npm install <package name>"}</CodeSnippet>
            <Content>
              This will add the package into our project and add all it’s
              modules in the node_modules folder and will also list the package
              along with it’s version in the package.json file.
            </Content>
          </li>
          <li>
            <Heading title="Map & Filter methods" />
            <Content>
              Map and filter both are array methods in JavaScript. Each one will
              iterate over an array and perform a transformation or computation.
              Each will return a new array based on the result of the function.
            </Content>
            <ul>
              <li>
                <SubHeading title="Map" />
                <Content>
                  The map() method is used for creating a new array from an
                  existing one, applying a function to each one of the elements
                  of the first array.
                </Content>
                <CodeSnippet>
                  {"const numbers = [1, 2, 3, 4];"}
                  <br />
                  {"const doubled = numbers.map((item, index) => item * 2);"}
                  <br />
                  {"console.log(doubled);} // [2, 4, 6, 8]"}
                  <br />
                </CodeSnippet>
                <Content>
                  In the above example, each number in an array is doubled. As
                  the map function returns an array, the new array contains the
                  updated values. JSX allows embedding any expression in curly
                  braces so we could inline the map() result.
                </Content>
                <CodeSnippet>
                  {"function NumberList(props) {"}
                  <br />
                  <TabSpace />
                  {"const numbers = props.numbers;"}
                  <br />
                  <TabSpace />
                  {"return ("}
                  <br />
                  <TabSpace />
                  {"<ul>"}
                  <br />
                  <TabSpace />
                  {
                    "{ numbers.map((number) => <li key={number.toString()} value={number}>{value}</li>) }"
                  }
                  <br />
                  <TabSpace />
                  {"</ul>"}
                  <br />
                  <TabSpace />
                  {");"}
                  <br />
                  {"}"}
                </CodeSnippet>
              </li>
              <li>
                <SubHeading title="Filter" />
                <Content>
                  The filter() method takes each element in an array and it
                  applies a conditional statement against it. If this
                  conditional returns true, the element gets pushed to the
                  output array. If the condition returns false, the element does
                  not get pushed to the output array.
                </Content>
                <CodeSnippet>
                  {"const numbers = [1, 2, 3, 4];"}
                  <br />
                  {
                    "const evenNumbers = numbers.filter((item, index) => item % 2 === 0);"
                  }
                  <br />
                  {"console.log(evenNumbers); // [2, 4]"}
                  <br />
                </CodeSnippet>
                <Content>
                  In the above example, odd numbers are filtered out, leaving
                  only even numbers.
                </Content>
              </li>
            </ul>
          </li>
          <li>
            <Heading title="Lists & Keys" />
            <Content>
              We can build collections of elements and include them in JSX using
              curly braces {"{}"}.
            </Content>
            <CodeSnippet>
              {"const numbers = [1, 2, 3, 4, 5];"}
              <br />
              <TabSpace />
              {"const listItems = numbers.map((number) => <li>{number}</li>"}
              <br />
              {");"}
            </CodeSnippet>
            <Content>
              We then include the entire listItems array inside a {"<ul>"}{" "}
              element, and render it to the DOM:
            </Content>
            <CodeSnippet>{"<ul>{listItems}</ul>"}</CodeSnippet>
            <Content>
              When we run this code, we’ll be given a warning that a key should
              be provided for list items. A key is a special string attribute
              that we need to include when creating lists of elements. Keys help
              React identify which items have changed, are added, or are
              removed. Keys should be given to the elements inside the array to
              give the elements a stable identity. The best way to pick a key is
              to use a string that uniquely identifies a list item among its
              siblings. Most often we would use IDs from your data as keys but
              when we don’t have stable IDs for rendered items, we may use the
              item index as a key as a last resort:
            </Content>
            <CodeSnippet>
              {"const todoItems = todos.map((todo, index) =>"}
              <br />
              <TabSpace />
              {"<li key={index}>"}
              <br />
              <TabSpace />
              {"{todo.text}"}
              <br />
              <TabSpace />
              {"</li>"}
              <br />
              {");"}
            </CodeSnippet>
            <Content>
              <strong>Note: </strong>
              This package could be used to display animated loaders &nbsp;
              <a
                href="https://www.npmjs.com/package/react-animated-loader"
                rel="noreferrer"
                target="_blank"
              >
                react-animated-loader
              </a>
            </Content>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default NpmArrayMethods;
