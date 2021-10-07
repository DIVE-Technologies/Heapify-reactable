import React from "react";
import "./styles.css";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import { Container, Table } from "react-bootstrap";
import Content from "../../Components/Content";
import Heading from "../../Components/Heading";
import CodeSnippet from "../../Components/CodeSnippet";
import SubHeading from "../../Components/SubHeading";

const API = () => {
  return (
    <div>
      <PageHeading>React Router</PageHeading>
      <Container className="pageSection">
        <ol>
          <li className="listItem">
            <Heading title="What are APIs?" />
            <Content>
              API stands for <strong>Application Programming Interface</strong>{" "}
              It is a software that allows two applications to talk to each
              other. When we use an application on our mobile phone, the
              application connects to the Internet and sends data to a server.
              The server then retrieves that data, interprets it, performs the
              necessary actions and sends it back to your phone. The application
              then interprets that data and presents us with the information we
              wanted in a readable way. This is what an API is - all of this
              happens via API.
            </Content>
            <SubHeading title="Working of an API" />
            <ul>
              <li>
                A client application initiates an API call to retrieve
                information, also known as a request. This request is processed
                from an application to the web server via the API’s Uniform
                Resource Identifier (URI) and includes a request verb, headers,
                and sometimes, a request body.
              </li>
              <li>
                After receiving a valid request, the API makes a call to the
                external program or web server.
              </li>
              <li>
                The server sends a response to the API with the requested
                information.
              </li>
              <li>
                The API transfers the data to the initial requesting
                application.
              </li>
            </ul>
            <br />
            Some of the very common and easy to use APIs are:
            <ul>
              <li>
                Dummy data for testing:{" "}
                <a
                  href="https://jsonplaceholder.typicode.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dummy data
                </a>
              </li>
              <li>
                Weather API:{" "}
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weather API
                </a>
              </li>
              <li>
                Movie API:{" "}
                <a
                  href="https://developers.themoviedb.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Movie API
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Heading title="Fetch & Axios" />
            <ul>
              <li>
                <SubHeading title="Fetch" />
                <Content>
                  The fetch() method in JavaScript is used to request the server
                  and load the information in the webpages. The request can be
                  of any APIs that returns the data of the format JSON or XML.
                  This method returns a promise.
                </Content>
                <CodeSnippet>fetch( url, options )</CodeSnippet>
                <Content>This method accept two parameters</Content>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    <strong>URL:</strong> It is the URL to which the request is
                    to be made.
                  </li>
                  <li>
                    <strong>Options:</strong> It is an array of properties. It
                    is an optional parameter. Options will include the headers,
                    request method, body etc.
                  </li>
                </ul>
                <br />
                <Content>
                  Fetch is available to all JavaScript libraries and packages.
                  So we don’t have to install it manually in our React
                  application. We can directly use it without importing as well.
                </Content>
              </li>
              <li>
                <SubHeading title="Axios" />
                <Content>
                  Axios is an HTTP client library that allows us to make
                  requests to a given endpoint. It works similar to fetch, but
                  with some extra added benefits.
                </Content>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    It has good defaults to work with JSON data. Unlike Fetch
                    API, we often don't need to set our headers. Or perform
                    tedious tasks like converting our request body to a JSON
                    string.
                  </li>
                  <li>
                    Axios has function names that match any HTTP methods. To
                    perform a GET request, we use the .get() method and
                    similarly for post, delete etc.
                  </li>
                  <li>
                    Axios does more with less code. Unlike the Fetch API, we
                    only need one {".then()"} callback to access our requested
                    JSON data.
                  </li>
                </ul>
                <br />
                <Content>
                  Axios is available as an npm package. So, we could simply
                  install it in out project using the command:
                </Content>
                <CodeSnippet>npm install axios</CodeSnippet>
              </li>
            </ul>
          </li>
          <li>
            <Heading title="Various HTTP methods for an API" />
            <Content>
              REST APIs enable us to develop any kind of web application having
              all possible CRUD (create, read, update, delete) operations. REST
              guidelines suggest using a specific HTTP method on a particular
              type of call made to the server. Here are some of the most common
              HTTP methods.
            </Content>
            <ul>
              <li>GET</li>
              <li>POST</li>
              <li>PATCH</li>
              <li>PUT</li>
              <li>DELETE</li>
            </ul>
            <br />
            <ul>
              <li>
                <SubHeading title="GET" />
                GET requests are the most common and widely used methods in APIs
                and websites. The GET method is used to retrieve data from a
                server at the specified resource. For example, say we have an
                API with a /users endpoint. Making a GET request to that
                endpoint would return a list of all available users.
              </li>
              <br />
              <li>
                <SubHeading title="POST" />
                In web services, POST requests are used to send data to the API
                server to create a resource. The data sent to the server is
                stored in the request body of the HTTP request. The simplest
                example is a contact form on a website. When we fill out the
                inputs in a form and hit Send, that data is put in the response
                body of the request and sent to the server.
              </li>
              <br />
              <li>
                <SubHeading title="PATCH" />A PATCH request is one of the
                lesser-known HTTP methods, but it is similar to POST and PUT.
                This HTTP method is used when we have to make any updates to the
                data. The difference with PATCH is that we only apply partial
                modifications to the resource. The difference between PATCH and
                PUT, is that a PATCH request is non-idempotent i.e. each time
                when the same request is made, the return status of the API will
                be different.
              </li>
              <br />
              <li>
                <SubHeading title="PUT" />
                Similar to POST, PUT requests are used to send data to the API
                to update or create a resource. The difference is that PUT
                requests are idempotent i.e. calling the same PUT request
                multiple times will always produce the same result. In contrast,
                calling a POST/PATCH request repeatedly may have side effects of
                creating the same resource multiple times and might return
                different results each time.
              </li>
              <br />
              <li>
                <SubHeading title="DELETE" />
                The DELETE method is exactly as it sounds: delete the resource
                at the specified URL. This method is one of the more common in
                RESTful APIs so it's good to know how it works.
                <br />
                {
                  "For ex: If a new user is created with a POST request to /users, and it can be retrieved with a GET request to /users/{{userid}}, then making a DELETE request to /users/{{userid}} will completely remove that user."
                }
              </li>
            </ul>
            <br />
          </li>
          <li>
            <Heading title="Status codes" />
            <Content>
              Status codes are 3 digit numbers that are returned by the API.
              They resemble the status of the API and could be used to perform
              further tasks.
            </Content>
            <ul>
              <li>
                <SubHeading title="Successful responses" />
                <Content>
                  The entire 2xx series represents the successful response.
                </Content>
              </li>
              <li>
                <SubHeading title="Client error responses" />
                <Content>
                  The 4xx series represents that something went wrong on the
                  client side.
                </Content>
              </li>
              <li>
                <SubHeading title="Server error responses" />
                <Content>
                  The 5xx series represents that something went wrong on the
                  server side.
                </Content>
              </li>
            </ul>
            <br />
            <Table striped bordered hover className="text-left">
              <thead>
                <tr className="text-center">
                  <th>Status Code</th>
                  <th>API result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>200</td>
                  <td>Ok</td>
                </tr>
                <tr>
                  <td>201</td>
                  <td>created</td>
                </tr>
                <tr>
                  <td>204</td>
                  <td>No content</td>
                </tr>
                <tr>
                  <td>400</td>
                  <td>
                    Bad request (might be invalid syntax or some missing
                    parameter)
                  </td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>
                    Unauthorized (Although it is named as unauthorized, but it
                    means unauthenticated)
                  </td>
                </tr>
                <tr>
                  <td>403</td>
                  <td>
                    Forbidden (client is authenticated by doesn’t have the
                    rights to access the content)
                  </td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>Not Found</td>
                </tr>
                <tr>
                  <td>415</td>
                  <td>Unsupported media format</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>
                    Internal Server Error (The server has encountered a
                    situation it doesn't know how to handle)
                  </td>
                </tr>
                <tr>
                  <td>502</td>
                  <td>Bad Gateway</td>
                </tr>
                <tr>
                  <td>504</td>
                  <td>
                    Timeout (It took server too long to fetch the response and
                    return it)
                  </td>
                </tr>
              </tbody>
            </Table>
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
};

export default API;
