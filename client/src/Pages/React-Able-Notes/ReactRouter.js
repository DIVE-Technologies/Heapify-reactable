import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";
import CodeSnippet from "../../Components/CodeSnippet";
import SubHeading from "../../Components/SubHeading";
import TabSpace from "../../Components/TabSpace";

const ReactRouter = () => {
  return (
    <div>
      <PageHeading>React Router</PageHeading>
      <Container className="pageSection">
        <ol>
          <li className="listItem">
            <Heading title="What is React Router?" />
            <Content>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </Content>
            <ul>
              <li>
                <SubHeading title="Installtion" />
                <Content>
                  We can install React Router from the public npm registry with
                  either npm or yarn. Since we’ll be focused towards building a
                  web app, we’ll use react-router-dom.
                </Content>
                <CodeSnippet>npm install react-router-dom</CodeSnippet>
                <Content>
                  Run the above command inside the project and it will install
                  react-router-dom in our project. <br />
                  There are three primary categories of components in React
                  Router:
                </Content>
                <ul style={{ listStyleType: "circle" }}>
                  <li>{"routers, like <BrowserRouter> and <HashRouter>"}</li>
                  <li>{"route matchers, like <Route> and <Switch>"}</li>
                  <li>
                    {"and navigation, like <Link>, <NavLink>, and <Redirect>"}
                  </li>
                </ul>
              </li>
              <li>
                <SubHeading title="Routers" />
                <Content>
                  At the core of every React Router application should be a
                  router component. For web projects, react-router-dom provides{" "}
                  {"<BrowserRouter> and <HashRouter>"} routers. The main
                  difference between the two is the way they store the URL and
                  communicate with the web server.
                </Content>
                <ul>
                  <li>
                    A {"<BrowserRouter>"} uses regular URL paths. These are
                    generally the best-looking URLs, but they require your
                    server to be configured correctly. Specifically, the web
                    server needs to serve the same page at all URLs that are
                    managed client-side by React Router.
                  </li>
                  <li>
                    A {"<HashRouter>"} stores the current location in the hash
                    portion of the URL, so the URL looks something like{" "}
                    <strong>http://example.com/#/your/page.</strong> Since the
                    hash is never sent to the server, this means that no special
                    server configuration is needed.
                  </li>
                </ul>
                <Content>
                  To use a router, we only need to make sure that it is rendered
                  at the root of the element hierarchy. Typically it must wrap
                  our top-level {"<App>"} element in a router.
                </Content>
                <CodeSnippet>
                  {"ReactDOM.render("}
                  <br />
                  <TabSpace />
                  {"<BrowserRouter>"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  {"<App />"}
                  <br />
                  <TabSpace />
                  {"</BrowserRouter>,"}
                  <br />
                  <TabSpace />
                  {"document.getElementById('root')"}
                  <br />
                  {");"}
                </CodeSnippet>
              </li>
              <li>
                <SubHeading title="Route Matchers" />
                <Content>
                  {
                    "There are two route matching components: Switch and Route. When a <Switch> is rendered, it searches through its children <Route> elements to find one whose path matches the current URL. When it finds one, it renders that <Route> and ignores all others. This means that we should put <Route>(s) with more specific paths before less-specific ones."
                  }
                </Content>
                <Content>
                  {
                    "One important thing to note is that a <Route path> matches the beginning of the URL, not the whole thing. So a <Route path='/'> will always match the URL. Because of this, we typically put this <Route> last in our <Switch>. Another possible solution is to use <Route exact path='/'> which does match the entire URL."
                  }
                </Content>
                <CodeSnippet>
                  {"function App() {"}
                  <br />
                  <TabSpace />
                  {"return ("}
                  <br />
                  <TabSpace />
                  {"<div>"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  {"<Switch>"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  {"<Route path='/about'>"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  <TabSpace />
                  {"<About />"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  {"</Route>"}
                  <br />
                  <br />
                  <TabSpace />
                  <TabSpace />

                  {
                    "<Route path='/contact/:id'> // more specific route is before"
                  }
                  <br />
                  <TabSpace />
                  <TabSpace />
                  <TabSpace />
                  {"<Contact />"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  {"</Route>"}
                  <br />
                  <br />
                  <TabSpace />
                  <TabSpace />

                  {"<Route path='/contact'>"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  <TabSpace />
                  {"<AllContacts />"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  {"</Route>"}
                  <br />
                  <br />
                  <TabSpace />
                  <TabSpace />

                  {"<Route path='/'> // acts as fallback"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  <TabSpace />
                  {"<Home />"}
                  <br />
                  <TabSpace />
                  <TabSpace />
                  {"</Route>"}
                  <br />
                  <TabSpace />
                  {"</Switch>"}
                  <br />
                  <TabSpace />
                  {"</div>"}
                  <br />
                  <TabSpace />
                  {");"}
                  <br />
                  {"}"}
                </CodeSnippet>
              </li>
              <li>
                <SubHeading title="Route Changers" />
                <Content>
                  {
                    "React Router provides a <Link> component to create links in our application. Wherever we render a <Link>, an anchor (<a>) will be rendered in our HTML document."
                  }
                </Content>
                <CodeSnippet>{"<Link to='/'>Home</Link>"}</CodeSnippet>
                <Content>
                  {
                    "The <NavLink> is a special type of <Link> that can style itself as “active” when its to prop matches the current location."
                  }
                </Content>
                <CodeSnippet>
                  {"<NavLink to='/react' activeClassName='hurray'>"}
                  <br />
                  <TabSpace />
                  {"React"}
                  <br />
                  {"</NavLink>"}
                </CodeSnippet>
                <Content>
                  {
                    "Any time that we want to force navigation, we can render a <Redirect>. When a <Redirect> renders, it will navigate using its to prop."
                  }
                </Content>
                <CodeSnippet>{"<Redirect to='/login' />"}</CodeSnippet>
              </li>
            </ul>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default ReactRouter;
