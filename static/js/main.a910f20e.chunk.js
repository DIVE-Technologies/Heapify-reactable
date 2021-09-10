(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(17),i=n.n(c),o=(n(43),n(44),n(26)),r=n.n(o),l=n(2),d=n(32),h=n(15),j=(n(46),n(7)),b=n(0);var p=function(){var e=Object(a.useState)({email:"",password:"",btnValue:"Log In"}),t=Object(h.a)(e,2),n=t[0],s=t[1],c=Object(j.g)();function i(){return(i=Object(d.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:n.email,password:n.password},s(Object(l.a)(Object(l.a)({},n),{},{btnValue:"Signing In..."})),e.next=4,fetch("https://heapify-reactable.herokuapp.com/api/users/signin",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a;case 7:if(200!==(a=e.sent).status&&201!==a.status){e.next=17;break}return e.next=11,a.json();case 11:return a=e.sent,localStorage.setItem("name",a.name),c.push("/home"),e.abrupt("return",a);case 17:if(401!==a.status&&500!==a.status){e.next=24;break}return e.next=20,a.json();case 20:return a=e.sent,alert(a.msg),s({btnValue:"Log In"}),e.abrupt("return",a);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"login-container",children:Object(b.jsxs)("div",{className:"login-wrapper",children:[Object(b.jsx)("h1",{style:{fontSize:"25px",color:"#ffffff"},children:"Heapify React Able"}),Object(b.jsxs)("div",{className:"login",children:[Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{style:{fontSize:"20px",marginLeft:"15px",color:"#ffffff"},children:"Email Address"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"email",className:"fields",name:"email",value:n.email,onChange:function(e){return s(Object(l.a)(Object(l.a)({},n),{},{email:e.target.value}))},required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{style:{fontSize:"20px",marginLeft:"15px",color:"#ffffff"},children:"Password"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",className:"fields",value:n.password,onChange:function(e){return s(Object(l.a)(Object(l.a)({},n),{},{password:e.target.value}))},name:"password",required:!0})]}),Object(b.jsx)("div",{className:"login-button",children:Object(b.jsx)("button",{onClick:function(){return i.apply(this,arguments)},children:n.btnValue})})]})]})})},u=n(19),m=(n(52),n(59)),f=n(60),x=function(e){return Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("code",{children:e.children})})},O=function(e){return Object(b.jsxs)("p",{children:[e.children,Object(b.jsx)("br",{})]})},g=function(e){return Object(b.jsx)("h3",{children:e.title})},w=function(e){return Object(b.jsx)("h5",{children:e.title})},y=(n(53),n.p+"static/media/ReactProject.fc0f4698.png"),v=function(e){return Object(b.jsx)(m.a,{className:"text-center mt-3 mb-3",children:Object(b.jsx)("img",{src:e.src,alt:e.alt})})},R=n.p+"static/media/Logo.8de59bf1.png",S=n(61),T=n(62),k=function(e){return Object(b.jsx)(S.a,{bg:"light",expand:"lg",children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(S.a.Brand,{children:Object(b.jsx)("img",{src:R,alt:"Logo",height:"50",width:"50"})}),Object(b.jsx)(T.a,{className:"mx-auto",children:Object(b.jsx)("h1",{children:e.children})})]})})},I=function(){return Object(b.jsx)("div",{className:"bg-dark text-light text-center p-3",children:"\xa9 Heapify React-Able"})},C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{children:"Week 2"}),Object(b.jsx)(m.a,{className:"container",children:Object(b.jsxs)("ol",{children:[Object(b.jsxs)("li",{className:"listItem",children:[Object(b.jsx)(g,{title:"Setting up the workspace with the IDE."}),Object(b.jsx)(O,{children:"In order to work with React, we\u2019ll be using the Visual Studio Code editor. This is an IDE that has been provided by Microsoft."}),Object(b.jsx)(w,{title:"How to install VS Code"}),Object(b.jsx)(O,{children:"The complete installation process and the extensions to be used will be discussed in the class."}),"Refer to the video for installation of VS Code: ",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://youtu.be/9aj_Mz5zgRM",children:"https://youtu.be/9aj_Mz5zgRM"}),Object(b.jsx)("br",{}),"Refer to the video for installing the required extensions:",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://youtu.be/sZYATPTYm_c",children:"https://youtu.be/sZYATPTYm_c"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(g,{title:"What is React?"}),Object(b.jsx)(O,{children:"React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook (launched in 2013) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."}),Object(b.jsx)(O,{children:"React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. React could be run on online platforms like Codepen, CodeSandbox, etc."})]}),Object(b.jsxs)("li",{className:"listItem",children:[Object(b.jsx)(g,{title:"Benefits of React"}),Object(b.jsx)("p",{children:"How do we compare React with other frameworks? They are not interchangeable and each one has pros and cons depending on what we are trying to achieve. So here, we\u2019ll get to learn about the benefits of React and will see why we should learn it. We\u2019ll only get to know about all the features in short, but will be covering all of them very deeply in the coming classes."}),Object(b.jsxs)("ul",{style:{listStyleType:"disc"},children:[Object(b.jsxs)("li",{className:"listItem",children:[Object(b.jsx)(w,{title:"Reusable Components"}),Object(b.jsx)(O,{children:"Components are wonderful and React is based on them. We start with small things, which we use to build bigger things, which we use to build apps. Each component has its own logic and controls its own rendering, and can be reused wherever we need them. Code reuse helps make our apps easier to develop and easier to maintain. They also help us implement a consistent look and feel across the whole project."})]}),Object(b.jsxs)("li",{className:"listItem",children:[Object(b.jsx)(w,{title:"The Virtual DOM"}),Object(b.jsx)(O,{children:"Normally, when we develop an app that has a lot of user interaction and data updates, we have to carefully consider how our app structure is going to impact performance. Even with fast client platforms and JavaScript engines, extensive DOM manipulation can be a performance bottle-neck and even result in an annoying user experience. Worse, because the DOM is tree-structured, simple changes at the top level can cause huge ripples to the user interface."}),Object(b.jsx)(O,{children:"React solves this by using a virtual DOM. This is, as the name implies, a virtual representation of the DOM. Any new view changes are first performed on the virtual DOM, which lives in memory and not on your screen. An efficient algorithm then determines the changes made to the virtual DOM to identify the changes that need to be made to the real DOM. It then determines the most effective way to make these changes and then applies only those changes to the real DOM."})]}),Object(b.jsxs)("li",{className:"listItem",children:[Object(b.jsx)(w,{title:"Using JSX"}),Object(b.jsx)(O,{children:"JSX is really just a mix of HTML and JavaScript. It lets us add bits of HTML to our JavaScript. This lets us come up with a much simpler and cleaner code. JSX produces React \u201celements\u201d and has a number of side benefits, including helping prevent injection attacks. To be fair, there are raging debates on whether JSX is a good thing because it makes coding easier, or a bad thing because it may or may not violate the separation of concerns."})]}),Object(b.jsxs)("li",{className:"listItem",children:[Object(b.jsx)(w,{title:"React Native for Mobile App development"}),Object(b.jsx)(O,{children:"React can be boldly called a \u201clearn once \u2013 write anywhere\u201d library, since both web and mobile application development follows the same design patterns, facilitating the transition process. Using plain JavaScript and React we are able to build a rich UI for native apps, supported by both iOS and Android platforms."}),Object(b.jsx)(O,{children:"Among other advantages of React js in mobile app development, React Native developers recite its portability and ability to reuse components, real-time reload, and open source. When it comes to the actual use of React Native, we can list such mobile apps as Skype, Tesla, Airbnb, and Walmart. And don't forget about Instagram and Facebook \u2013 the actual innovators and early adopters."})]}),Object(b.jsxs)("li",{className:"listItem",children:[Object(b.jsx)(w,{title:"SEO Friendly"}),Object(b.jsx)(O,{children:"Another Reactjs benefit is its ability to deal with a common search engine failure to read JavaScript-heavy apps. As a solution, React can run on the server, rendering and returning the virtual DOM to the browser as a regular webpage."})]})]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(g,{title:"ReactJs vs React-Native"}),Object(b.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,className:"text-left",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"text-center",children:[Object(b.jsx)("th",{children:"ReactJs"}),Object(b.jsx)("th",{children:"React Native"})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Used for developing Web applications. "}),Object(b.jsx)("td",{children:"Used for developing mobile applications."})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Animations could be added using JavaScript and CSS."}),Object(b.jsx)("td",{children:"Animations are added using built-in libraries."})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"It uses HTML tags."}),Object(b.jsx)("td",{children:"It doesn\u2019t use HTML tags."})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"In ReactJs, Virtual DOM is responsible for rendering the code on the browser."}),Object(b.jsx)("td",{children:"Uses its native API to render the code on the mobile application."})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"CSS is used for adding styles."}),Object(b.jsx)("td",{children:"Uses stylesheet to add the styles."})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"ReactJs is platform-independent i.e. it can be executed on all platforms."}),Object(b.jsx)("td",{children:"It is not platform independent, a lot of effort is needed to run it on several platforms."})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Provides high security."}),Object(b.jsx)("td",{children:"Less secure as compared to ReactJs."})]})]})]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(g,{title:"Installing React into the machine"}),Object(b.jsx)(O,{children:"Till now we have seen what React is and why we should use it and what are its benefits. So, now let\u2019s proceed to the actual working and let\u2019s install React in our machine. To install the full React toolchain, we would be using create-react-app."}),Object(b.jsx)(O,{children:"In order to install create-react-app, run the following command in your terminal:"}),Object(b.jsx)(x,{children:"npm install -g create-react-app"}),Object(b.jsx)(O,{children:"This command will install create-react-app in your system globally. Once this is done, we are ready to create our first react project. In order to do so, follow the below commands -"}),Object(b.jsxs)(x,{children:["npx create-react-app ","{project_name}"]}),Object(b.jsxs)(O,{children:["The above command will generate a template react project for you to begin with. Simply replace the ","{project_name}"," with the name of your own project. The contents of the project that you will get after running the above command are shown below:"]}),Object(b.jsx)(v,{src:y,alt:"Contents of React document"}),Object(b.jsx)(O,{children:"Then navigate to the project directory using"}),Object(b.jsx)(x,{children:"cd my-app"}),Object(b.jsx)(O,{children:"Now to start the react project, run the following command in the same terminal."}),Object(b.jsx)(x,{children:"npm start"}),Object(b.jsx)(O,{children:"By running the above command, your react project will start running on localhost:3000 and will open automatically in your default browser. Now you are all set. You have installed react and have also initialized your very first project."})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(g,{title:"Components and Elements in React"}),Object(b.jsxs)("ul",{style:{listStyleType:"disc"},children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(w,{title:"Elements"}),Object(b.jsx)(O,{children:"An element is a plain object describing a component instance or DOM node and its desired properties. It contains information only about the component type (eg: a button), its properties, and any child element inside it. In simple words, an element is a way to tell React what you want to see on the screen. You cannot call any methods on the element. It\u2019s just an immutable description object."})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(w,{title:"Components"}),Object(b.jsx)(O,{children:"A React Component is a template, a blueprint, a global definition. This can be either a function or a class. If the component is a functional one, then it returns an element, but if the component is a Class one then it renders the element. In simple words, it is a function or class that accepts an input(props) and returns a React element. React components are independent and reusable blocks of code."}),Object(b.jsx)(O,{children:"A React component can have methods and can also receive props as well. Components also have the state which they use to display dynamic content. React components are of two types:"}),Object(b.jsxs)("ul",{style:{listStyleType:"circle"},children:[Object(b.jsx)("li",{children:"Class components"}),Object(b.jsx)("li",{children:"Functional components"})]}),Object(b.jsx)("b",{children:"Note:"})," The name of a React Component must start with a capital letter.",Object(b.jsxs)("ul",{style:{listStyleType:"disc"},children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(w,{title:"Class Components"}),Object(b.jsx)(O,{children:"React class-based components are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All class-based components are child classes for the Component class of ReactJS. So, the component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives the component access to React.Component's functions. Class components also require a render() method, which returns the code to be displayed i.e. JSX. The main feature of class-based components is that they have access to a state which dictates the current behavior and appearance of the component. This state can be modified by calling the setState() function. One or more variables, arrays, or objects defined as part of the state can be modified at a time with the setState() function. Class-based components also have access to Lifecycle methods."})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(w,{title:"Functional Components"}),Object(b.jsx)(O,{children:"Functional components are just simple JavaScript functions. We can create a functional component in React by writing a simple JavaScript function. These functions may or may not receive data as parameters(props). In the functional Components, the return value is the JSX code to render to the DOM tree. Functional components lack a significant amount of features as compared to class-based components. So, in February 2019 React 16.8 was launched which introduced the concept of React Hooks. Hooks are special functions that added a lot of missing functionalities in the functional components. Functional components do not have access to dedicated state variables like class-based components, this was one of the problems that were overcome by the introduction of hooks."}),Object(b.jsx)(O,{children:"Class-based components are slightly slower than their functional counterparts. The difference is very small and is almost negligible for smaller web apps \u2013 though the performance difference increases when the number of components in the app increases. Moreover, class-based components involve a lot more coding on the programmer\u2019s part, making them slightly more inefficient to use. And hence, functional components are some of the more common components that you\u2019ll come across while working in React."})]})]})]})]})]})]})}),Object(b.jsx)(I,{})]})},N=n(63),J=(n(56),function(){var e=Object(j.g)();return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{children:"Heapify React-Able"}),Object(b.jsx)(m.a,{className:"d-flex justify-content-center mt-5",children:Object(b.jsx)(N.a,{style:{width:"18rem"},className:"shadow-lg",children:Object(b.jsxs)(N.a.Body,{children:[Object(b.jsx)(N.a.Title,{children:"Week 2"}),Object(b.jsx)(N.a.Subtitle,{className:"mb-2 text-muted",children:"Basic of React"}),Object(b.jsx)(N.a.Text,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"What is React?"}),Object(b.jsx)("li",{children:"Benefits of React"}),Object(b.jsx)("li",{children:"Installation"}),Object(b.jsx)("li",{children:"Writing First React Project"}),Object(b.jsx)("li",{children:"Elements and Components"})]})}),Object(b.jsx)(N.a.Link,{style:{textDecoration:"none"},onClick:function(){e.push("/react-able/week2")},children:"Resources"})]})})})]})});var M=function(){Object(a.useEffect)((function(){document.addEventListener("contextmenu",(function(e){e.preventDefault()})),document.addEventListener("keydown",(function(e){!0!==e.ctrlKey&&"118"!==e.which&&"86"!==e.which||e.preventDefault()}))}),[]);var e=function(){return null!==localStorage.getItem("name")};return Object(b.jsx)(u.a,{children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/",component:p}),";",Object(b.jsx)(j.b,{exact:!0,path:"/home",render:function(){return e()?Object(b.jsx)(j.b,{component:J}):Object(b.jsx)(j.a,{to:"/"})}}),Object(b.jsx)(j.b,{exact:!0,path:"/react-able/week2",render:function(){return e()?Object(b.jsx)(j.b,{component:C}):Object(b.jsx)(j.a,{to:"/"})}}),Object(b.jsx)(j.a,{to:"/"})]})})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.a910f20e.chunk.js.map