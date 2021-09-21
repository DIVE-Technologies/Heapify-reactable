import React from "react";
import { Container, Table } from "react-bootstrap";
import CodeSnippet from "../../Components/Resources/CodeSnippet";
import Content from "../../Components/Resources/Content";
import Heading from "../../Components/Resources/Heading";
import SubHeading from "../../Components/Resources/SubHeading";
import "./styles.css";
import ReactProject from "../../Assets/Images/ReactProject.png";
import Image from "../../Components/Resources/Image";
import PageHeading from "../../Components/Resources/PageHeading";
import Footer from "../../Components/Footer";

const Basics = () => {
  return (
    <div>
    <PageHeading>Basics of React</PageHeading>
    <Container className="pageSection">
      <ol>
        <li className="listItem">
          <Heading title="Setting up the workspace with the IDE." />
          <Content>
            In order to work with React, we’ll be using the Visual Studio Code
            editor. This is an IDE that has been provided by Microsoft.
          </Content>
          <SubHeading title="How to install VS Code" />
          <Content>
            The complete installation process and the extensions to be used will
            be discussed in the class.
          </Content>
          Refer to the video for installation of VS Code: <br />
          <a href="https://youtu.be/9aj_Mz5zgRM">
            https://youtu.be/9aj_Mz5zgRM
          </a>
          <br />
          Refer to the video for installing the required extensions:
          <br />
          <a href="https://youtu.be/sZYATPTYm_c">
            https://youtu.be/sZYATPTYm_c
          </a>
        </li>

        <li>
          <Heading title="What is React?" />
          <Content>
            React is a free and open-source front-end JavaScript library for
            building user interfaces or UI components. It is maintained by
            Facebook (launched in 2013) and a community of individual developers
            and companies. React can be used as a base in the development of
            single-page or mobile applications.
          </Content>
          <Content>
            React allows developers to create large web applications that can
            change data, without reloading the page. The main purpose of React
            is to be fast, scalable, and simple. React could be run on online
            platforms like Codepen, CodeSandbox, etc.
          </Content>
        </li>

        <li className="listItem">
          <Heading title="Benefits of React" />
          <p>
            How do we compare React with other frameworks? They are not
            interchangeable and each one has pros and cons depending on what we
            are trying to achieve. So here, we’ll get to learn about the
            benefits of React and will see why we should learn it. We’ll only
            get to know about all the features in short, but will be covering
            all of them very deeply in the coming classes.
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li className="listItem">
              <SubHeading title="Reusable Components" />
              <Content>
                Components are wonderful and React is based on them. We start
                with small things, which we use to build bigger things, which we
                use to build apps. Each component has its own logic and controls
                its own rendering, and can be reused wherever we need them. Code
                reuse helps make our apps easier to develop and easier to
                maintain. They also help us implement a consistent look and feel
                across the whole project.
              </Content>
            </li>
            <li className="listItem">
              <SubHeading title="The Virtual DOM" />
              <Content>
                Normally, when we develop an app that has a lot of user
                interaction and data updates, we have to carefully consider how
                our app structure is going to impact performance. Even with fast
                client platforms and JavaScript engines, extensive DOM
                manipulation can be a performance bottle-neck and even result in
                an annoying user experience. Worse, because the DOM is
                tree-structured, simple changes at the top level can cause huge
                ripples to the user interface.
              </Content>
              <Content>
                React solves this by using a virtual DOM. This is, as the name
                implies, a virtual representation of the DOM. Any new view
                changes are first performed on the virtual DOM, which lives in
                memory and not on your screen. An efficient algorithm then
                determines the changes made to the virtual DOM to identify the
                changes that need to be made to the real DOM. It then determines
                the most effective way to make these changes and then applies
                only those changes to the real DOM.
              </Content>
            </li>
            <li className="listItem">
              <SubHeading title="Using JSX" />
              <Content>
                JSX is really just a mix of HTML and JavaScript. It lets us add
                bits of HTML to our JavaScript. This lets us come up with a much
                simpler and cleaner code. JSX produces React “elements” and has
                a number of side benefits, including helping prevent injection
                attacks. To be fair, there are raging debates on whether JSX is
                a good thing because it makes coding easier, or a bad thing
                because it may or may not violate the separation of concerns.
              </Content>
            </li>
            <li className="listItem">
              <SubHeading title="React Native for Mobile App development" />
              <Content>
                React can be boldly called a “learn once – write anywhere”
                library, since both web and mobile application development
                follows the same design patterns, facilitating the transition
                process. Using plain JavaScript and React we are able to build a
                rich UI for native apps, supported by both iOS and Android
                platforms.
              </Content>
              <Content>
                Among other advantages of React js in mobile app development,
                React Native developers recite its portability and ability to
                reuse components, real-time reload, and open source. When it
                comes to the actual use of React Native, we can list such mobile
                apps as Skype, Tesla, Airbnb, and Walmart. And don't forget
                about Instagram and Facebook – the actual innovators and early
                adopters.
              </Content>
            </li>
            <li className="listItem">
              <SubHeading title="SEO Friendly" />
              <Content>
                Another Reactjs benefit is its ability to deal with a common
                search engine failure to read JavaScript-heavy apps. As a
                solution, React can run on the server, rendering and returning
                the virtual DOM to the browser as a regular webpage.
              </Content>
            </li>
          </ul>
        </li>
        <li>
          <Heading title="ReactJs vs React-Native" />
          <Table striped bordered hover className="text-left">
            <thead>
              <tr className="text-center">
                <th>ReactJs</th>
                <th>React Native</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Used for developing Web applications. </td>
                <td>Used for developing mobile applications.</td>
              </tr>
              <tr>
                <td>Animations could be added using JavaScript and CSS.</td>
                <td>Animations are added using built-in libraries.</td>
              </tr>
              <tr>
                <td>It uses HTML tags.</td>
                <td>It doesn’t use HTML tags.</td>
              </tr>
              <tr>
                <td>
                  In ReactJs, Virtual DOM is responsible for rendering the code
                  on the browser.
                </td>
                <td>
                  Uses its native API to render the code on the mobile
                  application.
                </td>
              </tr>
              <tr>
                <td>CSS is used for adding styles.</td>
                <td>Uses stylesheet to add the styles.</td>
              </tr>
              <tr>
                <td>
                  ReactJs is platform-independent i.e. it can be executed on all
                  platforms.
                </td>
                <td>
                  It is not platform independent, a lot of effort is needed to
                  run it on several platforms.
                </td>
              </tr>
              <tr>
                <td>Provides high security.</td>
                <td>Less secure as compared to ReactJs.</td>
              </tr>
            </tbody>
          </Table>
        </li>
        <li>
          <Heading title="Installing React into the machine" />
          <Content>
            Till now we have seen what React is and why we should use it and
            what are its benefits. So, now let’s proceed to the actual working
            and let’s install React in our machine. To install the full React
            toolchain, we would be using create-react-app.
          </Content>
          <Content>
            In order to install create-react-app, run the following command in
            your terminal:
          </Content>
          <CodeSnippet>npm install -g create-react-app</CodeSnippet>
          <Content>
            This command will install create-react-app in your system globally.
            Once this is done, we are ready to create our first react project.
            In order to do so, follow the below commands -
          </Content>
          <CodeSnippet>npx create-react-app {"{project_name}"}</CodeSnippet>
          <Content>
            The above command will generate a template react project for you to
            begin with. Simply replace the {"{project_name}"} with the name of
            your own project. The contents of the project that you will get
            after running the above command are shown below:
          </Content>
          <Image src={ReactProject} alt="Contents of React document" />
          <Content>Then navigate to the project directory using</Content>
          <CodeSnippet>cd my-app</CodeSnippet>
          <Content>
            Now to start the react project, run the following command in the
            same terminal.
          </Content>
          <CodeSnippet>npm start</CodeSnippet>
          <Content>
            By running the above command, your react project will start running
            on localhost:3000 and will open automatically in your default
            browser. Now you are all set. You have installed react and have also
            initialized your very first project.
          </Content>
        </li>
      </ol>
    </Container>
    <Footer />
    </div>
  );
};

export default Basics;
