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

const LifecycleMethods = () => {
  return (
    <div>
      <PageHeading>Lifecycle Methods</PageHeading>
      <Container className="pageSection">
        <ol>
          <li className="listItem">
            <Heading title="What are Lifecycle Methods?" />
            <Content>
              Each component has several lifecycle methods that we can override
              to run code at particular times in the process. These three phases
              are: <strong>Mounting</strong>, <strong>Updating</strong>, and{" "}
              <strong>Unmounting.</strong>
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  <strong>Mounting:</strong> Mounting means putting elements
                  into the DOM. These methods are called in the following order
                  when an instance of a component is being created and inserted
                  into the DOM:
                  <ul style={{ listStyleType: "disc" }}>
                    <li>constructor()</li>
                    <li>getDerivedStateFromProps()</li>
                    <li>render()</li>
                    <li>componentDidMount()</li>
                  </ul>
                </li>
                <li>
                  <strong>Updating:</strong> The next phase in the life cycle is
                  when a component is updated. A component is updated whenever
                  there is a change in the component's state or props. These
                  methods are called in the following order when a component is
                  being re-rendered:
                  <ul style={{ listStyleType: "disc" }}>
                    <li>getDerivedStateFromProps()</li>
                    <li>shouldComponentUpdate()</li>
                    <li>render()</li>
                    <li>getSnapshotBeforeUpdate()</li>
                    <li>componentDidUpdate()</li>
                  </ul>
                </li>
                <li className="listItem">
                  <strong>Unmounting:</strong> The next phase in the life cycle
                  is when a component is removed from the DOM. There is only one
                  method in this phase.
                  <ul style={{ listStyleType: "disc" }}>
                    <li>componentWillUnmount()</li>
                  </ul>
                </li>
              </ul>
              Now we’ll see each of the above lifecycle methods in detail.
            </Content>
          </li>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <SubHeading title="constructor()" />
              <Content>
                The constructor for a React component is called before the
                component is mounted. When implementing the constructor for a
                React.Component subclass, we should call super(props) before any
                other statement. Otherwise, this.props will be undefined in the
                constructor, which can lead to bugs. Constructor is the natural
                place to set up the initial state and other initial values.
              </Content>
              <CodeSnippet>
                {"constructor(props) {"}
                <br />
                <TabSpace />
                {"super(props);"}
                <br />
                <TabSpace />
                {"this.state = {count: 0};"}
                <br />
                {"}"}
              </CodeSnippet>
            </li>
            <li>
              <SubHeading title="getDerivedStateFromProps()" />
              <Content>
                getDerivedStateFromProps is invoked right before calling the
                render method, both on the initial mount and on subsequent
                updates i.e. right before rendering the element(s) in the DOM..
                It returns an object to update the state, or null to update
                nothing. This method is used where the state depends on changes
                in props over time.
              </Content>
            </li>
            <li>
              <SubHeading title="render()" />
              <Content>
                The render() method is the only required method in a class
                component. This is the method that actually outputs the HTML to
                the DOM. The render() function should be pure, meaning that it
                does not modify component state, it returns the same result each
                time it’s invoked, and it does not directly interact with the
                browser.
              </Content>
              <CodeSnippet>
                {"render() {"}
                <br />
                <TabSpace />
                {"return (<div>I love Heapify ReactAble!!</div>)"}
                <br />
                {"}"}
              </CodeSnippet>
            </li>
            <li>
              <SubHeading title="componentDidMount()" />
              <Content>
                componentDidMount() is invoked immediately after a component is
                mounted (inserted into the tree). Initialization that requires
                DOM nodes should go here. If we need to load data from a remote
                endpoint, this is a good place to instantiate the network
                request i.e. make any API calls.
              </Content>
              <CodeSnippet>
                {"componentDidMount() { // perform the tasks here. }"}
              </CodeSnippet>
              <Content>
                We may call setState() immediately in componentDidMount(). It
                will trigger an extra rendering, but it will happen before the
                browser updates the screen. This guarantees that even though the
                render() will be called twice in this case, the user won’t see
                the intermediate state. Use this pattern with caution because it
                often causes performance issues. In most cases, we should be
                able to assign the initial state in the constructor() instead.
              </Content>
            </li>
            <li>
              <SubHeading title="shouldComponentUpdate()" />
              <Content>
                In the shouldComponentUpdate() method we can return a Boolean
                value that specifies whether React should continue with the
                rendering or not. It’s default value is true.
              </Content>
              <Content>
                Whenever we make any changes in the state of the component, then
                by default the component is re-rendered. Using
                shouldComponentUpdate() we can handle this behaviour. It
                receives next state and next props as the arguments and checks
                them with the current state and the current props. If any
                changes are found, then it re-renders the component otherwise
                not. By adding some if-else conditions we can manipulate this
                behaviour and increase the performance of our application.
              </Content>
              <Content>
                <strong>Note: </strong>This method only exists as a performance
                optimization.
              </Content>
              <CodeSnippet>
                {"shouldComponentUpdate(nextProps, nextState) {"}
                <br />
                <TabSpace />
                {"	if(nextState.count === this.state.count) return false;"}
                <br />
                <TabSpace />
                {"	else return true;"}
                <br />
                {"}"}
              </CodeSnippet>
              <Content>
                In the above example, we are comparing the value of the count
                state variable. So, if the values are the same, then we’ll
                return false which will not re-render the component but if the
                values are not the same i.e. changes have been made, then we’ll
                return true which will re-render the component.
              </Content>
            </li>
            <li>
              <SubHeading title="getSnapshotBeforeUpdate()" />
              <Content>
                getSnapshotBeforeUpdate() is invoked right before the most
                recently rendered output is committed to the DOM. It enables our
                component to capture some information from the DOM before it is
                potentially changed. In simple words, inside the
                getSnapshotBeforeUpdate() method we have access to the props and
                state before the update, meaning that even after the update, we
                can check what the values were before the update.
              </Content>
              <CodeSnippet>
                getSnapshotBeforeUpdate(prevProps, prevState) {"{}"}
              </CodeSnippet>
              <Content>
                Any value returned by this lifecycle method will be passed as a
                parameter to componentDidUpdate(). So if the
                getSnapshotBeforeUpdate() method is present, we should also
                include the componentDidUpdate() method, otherwise we’ll get an
                error.
              </Content>
            </li>
            <li>
              <SubHeading title="componentDidUpdate()" />
              <Content>
                componentDidUpdate() is invoked immediately after updating
                occurs. As this method is called once updates are done, so it is
                not called for the initial render. We may call setState()
                immediately in componentDidUpdate() but it must be wrapped in a
                condition, or it will cause an infinite loop. It would also
                cause an extra re-rendering which, while not visible to the
                user, can affect the component performance.
              </Content>
              <CodeSnippet>
                componentDidUpdate(prevProps, prevState, snapshot) {"{}"}
              </CodeSnippet>
              <Content>
                If the component implements the getSnapshotBeforeUpdate()
                lifecycle, the value it returns will be passed as a third
                snapshot parameter to componentDidUpdate(). Otherwise this
                parameter will be undefined.
              </Content>
              <Content>
                <strong>Note: </strong>componentDidUpdate() will not be invoked
                if shouldComponentUpdate() returns false.
              </Content>
            </li>
            <li>
              <SubHeading title="componentWillUnmount()" />
              <Content>
                The componentWillUnmount method is called when the component is
                about to be removed from the DOM. We should not call setState()
                in componentWillUnmount() because the component will never be
                re-rendered and so making the state changes will not have any
                effect.
              </Content>
              <CodeSnippet>componentWillUnmount() {"{}"}</CodeSnippet>
            </li>
          </ul>
          <strong>Note</strong>: More information and questions on LIfecycle
          methods, refer:{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://youtu.be/7C4R8Oexsfg"
          >
            Lifecycle Methods
          </a>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default LifecycleMethods;
