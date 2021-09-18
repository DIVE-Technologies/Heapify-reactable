import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import CodeSnippet from "../../Components/CodeSnippet";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";
import TabSpace from "../../Components/TabSpace";
import SubHeading from "../../Components/SubHeading";

const Hooks = () => {
  return (
    <div>
      <PageHeading>React Hooks</PageHeading>
      <Container className="pageSection">
        <ol>
          <li>
            <Heading title="What are hooks?" />
            <Content>
              Hooks are the new feature introduced in the React 16.8 version.
              They allow us to use state and other React features without
              writing a class. Hooks are the functions which hook into React
              state and lifecycle features from function components. They don’t
              work inside a class component. Hooks are similar to JavaScript
              functions, but we need to follow two rules when using them. Hooks
              rule ensures that all the stateful logic in a component is visible
              in its source code.
              <br />
              These rules are:
            </Content>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Only call Hooks at the top level. Do not call Hooks inside
                loops, conditions, or nested functions. Hooks should always be
                used at the top level of the React functions. This rule ensures
                that Hooks are called in the same order each time a component
                renders.
              </li>
              <li>
                Only call Hooks from React functional components. We cannot call
                Hooks from regular JavaScript functions. Instead, we can call
                Hooks from React function components. Hooks can also be called
                from custom Hooks.
              </li>
            </ul>
            <br />
            The most commonly used hooks in React are-
            <ul style={{ listStyleType: "disc" }}>
              <li>useState</li>
              <li>useEffect</li>
              <li>useRef</li>
              <li>useCallback</li>
              <li>useMemo</li>
            </ul>
          </li>
          <li>
            <Heading title="useState Hook" />
            <Content>
              The useState() is a Hook that allows us to have state variables in
              functional components. The useState hook is a special function
              that takes the initial state as an argument and returns an array
              of two entries. The first element is the initial variable and the
              second one is a function that is used for updating the state.
            </Content>
            <CodeSnippet>const [count, setCount] = useState(0);</CodeSnippet>
            <Content>
              In order to update the state, we can directly pass the updated
              value in the function.
            </Content>
            <CodeSnippet>setCount(count + 1);</CodeSnippet>
          </li>
          <li>
            <Heading title="useEffect Hook" />
            <Content>
              The Effect Hook lets us perform side effects in functional
              components. It could be treated as a combination of
              componentDidMount(), componentDidUpdate() and
              componentWillUnmount(). Data fetching or manually changing the DOM
              in React components are both examples of side effects.
              <br />
              useEffect() hook accepts 2 arguments:
              <ul>
                <li>
                  callback is the function containing the side-effect logic.
                  callback is executed right after changes are pushed to DOM.
                </li>
                <li>
                  dependencies is an optional array of dependencies. useEffect()
                  executes callback only if the dependencies have changed
                  between renderings.
                </li>
              </ul>
            </Content>
            <CodeSnippet>useEffect(callback[, dependencies]);</CodeSnippet>
            <Content>
              Put the entire side-effect logic into the callback function, then
              use the dependencies argument to control when the side-effect
              runs. That’s the sole purpose of useEffect().
            </Content>
            <CodeSnippet>
              {"useEffect(() => {"}
              <br />
              <TabSpace />
              {"console.log(count);"}
              <br />
              {"}, [count]);"}
            </CodeSnippet>
            <Content>
              As useEffect is a combination of various Lifecycle methods, so it
              could be used to perform the work of various Lifecycle methods.
            </Content>
            <ul>
              <li>
                <strong>useEffect as componentDidMount</strong>
                <Content>
                  If we provide an array of dependency, then useEffect will act
                  as componentDidMount and will be called only once, when the
                  component is initialized.
                </Content>
                <CodeSnippet>
                  {
                    "function MyComponent() {useEffect(() => { // Runs after every rendering}, []);  }"
                  }
                </CodeSnippet>
              </li>
              <li>
                <strong>useEffect as componentDidUpdate</strong>
                <Content>
                  If we don’t pass an array of dependency, then it will behave
                  like componentDIdUpdate and will be called after each render
                  including the initial render.
                </Content>
                <CodeSnippet>
                  {
                    "function MyComponent() {useEffect(() => {// Runs after Every rendering});  }"
                  }
                </CodeSnippet>
              </li>
            </ul>
          </li>
          <li>
            <Heading title="useRef Hook" />
            <Content>
              The useRef is a hook that allows us to directly create a reference
              to the DOM element in the functional component.The value is
              persisted in the refContainer.current property. These values are
              accessed from the current property of the returned object. The
              current property could be initialised to the passed argument
              initialValue e.g. useRef(initialValue). The object can persist a
              value for a full lifetime of the component.
            </Content>
            <SubHeading title="Using the useRef Hook" />
            <Content>
              The first step of working with refs is the initialization. We do
              this by calling React's useRef function, passing as the only
              argument the initial value we want our reference to have.
            </Content>
            <CodeSnippet>
              const reference = useRef('initial value');
            </CodeSnippet>
            <Content>
              The function returns an object with current property.
            </Content>
            <CodeSnippet>{"{current: 'initial value',}"}</CodeSnippet>
            <Content>
              Any change that we make to the reference object will persist
              across all renders of our React component. useRef hook is almost
              similar to useState hook, but a major difference in both of these
              is that useState hook triggers a re-render() as soon as the state
              is updated but useRef hook updates the value and also doesn’t
              trigger a re-render(). A very common use case of useRef hook is if
              we have to maintain the count of the number of times a button is
              clicked. If we use useState for this, then each time the count is
              updated, it will trigger an unnecessary render but using useRef
              hook will serve our purpose and won’t trigger any re-render as
              well.
            </Content>
            <CodeSnippet>
              {"const App = () => {"}
              <br />
              <TabSpace />
              {"const inputRef = useRef(null);"}
              <br />
              <TabSpace />
              {"return("}
              <br />
              <TabSpace />
              {"<>"}
              <br />
              <TabSpace />
              {"<input ref={inputRef}value={name}onChange={handleChange}/>"}
              <br />
              <TabSpace />
              {
                "<button onClick={() => inputRef.current.focus()}>Focus</button>"
              }
              <br />
              <TabSpace />
              {"</>);"}
              <br />
              {"};"}
            </CodeSnippet>
            <Content>
              The above example creates a reference to the input field and then
              uses that reference to focus on that input field on click of the
              button. We could also use the .current property of the reference
              to get the value of the input field.
              <br />
              Some common uses of refs in React are:
              <ul>
                <li>Storing the previous state.</li>
                <li>Creating reference to any DOM element.</li>
              </ul>
            </Content>
          </li>
          <li>
            <Heading title="useCallback Hook" />
            <Content>
              <strong>
                <i>
                  In Computer Science, memoization is a concept used in general
                  when we don't need to recompute the function with a given
                  argument for the next time as it returns the cached result.
                </i>
              </strong>
              <br />
              The useCallback hook is used when we have a component in which the
              child is rerendering again and again without need. Pass an inline
              callback and an array of dependencies. useCallback will return a
              memoized version of the callback that only changes if one of the
              dependencies has changed.
            </Content>
            <CodeSnippet>
              {"const App = () => {"}
              <br />
              <TabSpace />
              {"const [count, setCount] = useState(0);"}
              <br />
              <TabSpace />
              {"const [number, setNumber] = useState(0);"}
              <br />
              <TabSpace />
              {"const incrementCounter = () => {setCount(count + 1)};"}
              <br />
              <TabSpace />
              {"const decrementCounter = () => {setCount(count - 1)};"}
              <br />
              <TabSpace />
              {"const incrementNumber = () => {setNumber(number + 1)};"}
              <br />
              <br />
              <TabSpace />
              {"return ("}
              <br />
              <TabSpace />
              {"<div>"}
              <br />
              <TabSpace />
              {"Count: {count}"}
              <br />
              <TabSpace />
              {"<button onClick={incrementCounter}>Increase counter</button>"}
              <br />
              <TabSpace />
              {"<button onClick={decrementCounter}>Decrease Counter</button>"}
              <br />
              <TabSpace />
              {"<button onClick={incrementNumber}>increase number</button>"}
              <br />
              <TabSpace />
              {"</div>"}
              <br />
              <TabSpace />
              {")"}
              <br />
              {"}"}
            </CodeSnippet>
            <Content>
              In the above example, we have two counters, count and number. And
              we have 3 functions to increment/decrement these counters. Now if
              we increment the count variable, then as soon as the count is
              updated a re-render will be triggered and because of which
              incrementNumber function will also be initialised again. But if we
              take a deeper look, then this function doesn’t depend on the count
              variable, so there was no need to initialise it again. And same
              goes the case for number variables, if we update the number using
              incrementNumber, then incrementCounter and decrementCounter will
              be initialised again but as they don’t depend on the number, so
              this initialisation is unnecessary.
            </Content>
            <Content>
              so this initialisation is unnecessary. So to prevent this
              unnecessary initialisation of functions, we use useCallback hook.
              It memorizes the entire function passed in as a callback function.
              We also pass a dependency array to the hook. If the values in the
              dependency array change, then only the callback function will
              initialise again otherwise the previously memorised value will be
              used. This prevents the unnecessary initialisations of the
              functions. So the above functional component could be optimized
              using useCallback hook as:
            </Content>
            <CodeSnippet>
              {"const incrementCounter = useCallback(() => { "}
              <br />
              <TabSpace />
              {"setCount(count + 1)"}
              <br />
              {"}, [count]);"}
              <br />
              {"const decrementCounter = useCallback(() => {"}
              <br />
              <TabSpace />
              {"setCount(count - 1)"}
              <br />
              {"}, [count])'"}
              <br />
              {"const incrementNumber = useCallback(() => {"}
              <br />
              <TabSpace />
              {"setNumber(number + 1)"}
              <br />
              {"}, [number]);"}
            </CodeSnippet>
          </li>
          <li>
            <Heading title="useMemo Hook" />
            <Content>
              The useMemo is a hook used in the functional component of react
              that returns a memoized value.
              <br />
              useMemo hook is similar to useCallback hook, but the main
              difference is that
              <strong>
                <i>
                  {" "}
                  useCallback memorises the entire function whereas useMemo
                  memorises the value returned by that function.
                </i>
              </strong>
            </Content>
            <Content>
              Pass a function and an array of dependencies. useMemo will only
              recompute the memoized value when one of the dependencies has
              changed. This optimization helps to avoid expensive calculations
              on every render. If no array is provided, a new value will be
              computed on every render.
            </Content>
            <CodeSnippet>
              {"const memoizedValue = useMemo(() => function(), []);"}
            </CodeSnippet>
          </li>
          <strong>Note</strong>: For more reference of React Hooks, refer:{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://youtu.be/uUda1nI8Jp0"
          >
            React Hooks
          </a>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default Hooks;
