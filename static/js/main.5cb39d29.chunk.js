(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),i=n.n(c),o=(n(45),n(46),n(28)),r=n.n(o),l=n(34),d=n(10),h=n(61),j=n(66),b=n(62),p=n(7),m=n(67),u=n(68),x=n(0),O=function(e){return Object(x.jsxs)(m.a,{className:"mt-4 mb-4",children:[Object(x.jsx)(m.a.Text,{children:e.title}),Object(x.jsx)(u.a,{type:e.type,placeholder:e.placeholder,onChange:e.onChange,value:e.value})]})},f=n.p+"static/media/Logo.8de59bf1.png",g=n(64),w=n(65),y=function(e){return Object(x.jsx)(g.a,{bg:"light",expand:"lg",className:"fixed-top",children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(g.a.Brand,{children:Object(x.jsx)("img",{src:f,alt:"Logo",height:"50",width:"50"})}),Object(x.jsx)(w.a,{className:"mx-auto",children:Object(x.jsx)("h1",{children:e.children})})]})})},v=function(){var e=Object(p.g)(),t=Object(a.useState)(),n=Object(d.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(),o=Object(d.a)(i,2),m=o[0],u=o[1],f=Object(a.useState)(""),g=Object(d.a)(f,2),w=g[0],v=g[1],R=Object(a.useState)(!1),S=Object(d.a)(R,2),T=S[0],k=S[1],C=function(){return v(""),s?m?!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s)||(v("Invalid Email"),!1):(v("Password is required"),!1):(v("Email is required"),!1)},I=function(){var t=Object(l.a)(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!C()){t.next=22;break}return n={email:s,password:m},k(!0),t.next=5,fetch("https://heapify-reactable.herokuapp.com/api/users/signin",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)});case 5:if(200!==(a=t.sent).status&&201!==a.status){t.next=16;break}return t.next=9,a.json();case 9:return a=t.sent,localStorage.setItem("name",a.name),k(!1),e.push("/home"),t.abrupt("return",a);case 16:return t.next=18,a.json();case 18:return a=t.sent,k(!1),v(a.msg),t.abrupt("return",a);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{children:"Heapify React Able"}),Object(x.jsx)(h.a,{className:"pageSection d-flex justify-content-center align-items-center",children:Object(x.jsx)(j.a,{style:{width:"31rem"},className:"shadow-lg",children:Object(x.jsxs)(j.a.Body,{children:[Object(x.jsx)(j.a.Title,{className:"text-center",children:"Login"}),Object(x.jsxs)("form",{type:"submit",onSubmit:I,className:"text-center",children:[Object(x.jsx)(O,{title:"Email",type:"email",placeholder:"Enter your email",onChange:function(e){return c(e.target.value)},value:s}),Object(x.jsx)(O,{title:"Password",type:"password",placeholder:"Enter your password",onChange:function(e){return u(e.target.value)},value:m}),w?Object(x.jsx)("div",{className:"text-danger mb-4 p-2 border border-danger",style:{backgroundColor:"#fae8e8"},children:w}):null,Object(x.jsx)(b.a,{style:{width:100},variant:"primary",onClick:I,children:T?"Signing In ....":"Login"})]})]})})})]})},R=n(21),S=(n(56),n(63)),T=function(e){return Object(x.jsx)("div",{className:"mb-3",children:Object(x.jsx)("code",{children:e.children})})},k=function(e){return Object(x.jsxs)("p",{children:[e.children,Object(x.jsx)("br",{})]})},C=function(e){return Object(x.jsx)("h3",{children:e.title})},I=function(e){return Object(x.jsx)("h5",{children:e.title})},N=(n(57),n.p+"static/media/ReactProject.fc0f4698.png"),J=function(e){return Object(x.jsx)(h.a,{className:"text-center mt-3 mb-3",children:Object(x.jsx)("img",{src:e.src,alt:e.alt})})},M=function(){return Object(x.jsx)("div",{className:"bg-dark text-light text-center p-3",children:"\xa9 Heapify React-Able, 2021"})},A=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{children:"Week 2"}),Object(x.jsx)(h.a,{className:"pageSection",children:Object(x.jsxs)("ol",{children:[Object(x.jsxs)("li",{className:"listItem",children:[Object(x.jsx)(C,{title:"Setting up the workspace with the IDE."}),Object(x.jsx)(k,{children:"In order to work with React, we\u2019ll be using the Visual Studio Code editor. This is an IDE that has been provided by Microsoft."}),Object(x.jsx)(I,{title:"How to install VS Code"}),Object(x.jsx)(k,{children:"The complete installation process and the extensions to be used will be discussed in the class."}),"Refer to the video for installation of VS Code: ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"https://youtu.be/9aj_Mz5zgRM",children:"https://youtu.be/9aj_Mz5zgRM"}),Object(x.jsx)("br",{}),"Refer to the video for installing the required extensions:",Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"https://youtu.be/sZYATPTYm_c",children:"https://youtu.be/sZYATPTYm_c"})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)(C,{title:"What is React?"}),Object(x.jsx)(k,{children:"React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook (launched in 2013) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."}),Object(x.jsx)(k,{children:"React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. React could be run on online platforms like Codepen, CodeSandbox, etc."})]}),Object(x.jsxs)("li",{className:"listItem",children:[Object(x.jsx)(C,{title:"Benefits of React"}),Object(x.jsx)("p",{children:"How do we compare React with other frameworks? They are not interchangeable and each one has pros and cons depending on what we are trying to achieve. So here, we\u2019ll get to learn about the benefits of React and will see why we should learn it. We\u2019ll only get to know about all the features in short, but will be covering all of them very deeply in the coming classes."}),Object(x.jsxs)("ul",{style:{listStyleType:"disc"},children:[Object(x.jsxs)("li",{className:"listItem",children:[Object(x.jsx)(I,{title:"Reusable Components"}),Object(x.jsx)(k,{children:"Components are wonderful and React is based on them. We start with small things, which we use to build bigger things, which we use to build apps. Each component has its own logic and controls its own rendering, and can be reused wherever we need them. Code reuse helps make our apps easier to develop and easier to maintain. They also help us implement a consistent look and feel across the whole project."})]}),Object(x.jsxs)("li",{className:"listItem",children:[Object(x.jsx)(I,{title:"The Virtual DOM"}),Object(x.jsx)(k,{children:"Normally, when we develop an app that has a lot of user interaction and data updates, we have to carefully consider how our app structure is going to impact performance. Even with fast client platforms and JavaScript engines, extensive DOM manipulation can be a performance bottle-neck and even result in an annoying user experience. Worse, because the DOM is tree-structured, simple changes at the top level can cause huge ripples to the user interface."}),Object(x.jsx)(k,{children:"React solves this by using a virtual DOM. This is, as the name implies, a virtual representation of the DOM. Any new view changes are first performed on the virtual DOM, which lives in memory and not on your screen. An efficient algorithm then determines the changes made to the virtual DOM to identify the changes that need to be made to the real DOM. It then determines the most effective way to make these changes and then applies only those changes to the real DOM."})]}),Object(x.jsxs)("li",{className:"listItem",children:[Object(x.jsx)(I,{title:"Using JSX"}),Object(x.jsx)(k,{children:"JSX is really just a mix of HTML and JavaScript. It lets us add bits of HTML to our JavaScript. This lets us come up with a much simpler and cleaner code. JSX produces React \u201celements\u201d and has a number of side benefits, including helping prevent injection attacks. To be fair, there are raging debates on whether JSX is a good thing because it makes coding easier, or a bad thing because it may or may not violate the separation of concerns."})]}),Object(x.jsxs)("li",{className:"listItem",children:[Object(x.jsx)(I,{title:"React Native for Mobile App development"}),Object(x.jsx)(k,{children:"React can be boldly called a \u201clearn once \u2013 write anywhere\u201d library, since both web and mobile application development follows the same design patterns, facilitating the transition process. Using plain JavaScript and React we are able to build a rich UI for native apps, supported by both iOS and Android platforms."}),Object(x.jsx)(k,{children:"Among other advantages of React js in mobile app development, React Native developers recite its portability and ability to reuse components, real-time reload, and open source. When it comes to the actual use of React Native, we can list such mobile apps as Skype, Tesla, Airbnb, and Walmart. And don't forget about Instagram and Facebook \u2013 the actual innovators and early adopters."})]}),Object(x.jsxs)("li",{className:"listItem",children:[Object(x.jsx)(I,{title:"SEO Friendly"}),Object(x.jsx)(k,{children:"Another Reactjs benefit is its ability to deal with a common search engine failure to read JavaScript-heavy apps. As a solution, React can run on the server, rendering and returning the virtual DOM to the browser as a regular webpage."})]})]})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)(C,{title:"ReactJs vs React-Native"}),Object(x.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,className:"text-left",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{className:"text-center",children:[Object(x.jsx)("th",{children:"ReactJs"}),Object(x.jsx)("th",{children:"React Native"})]})}),Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Used for developing Web applications. "}),Object(x.jsx)("td",{children:"Used for developing mobile applications."})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Animations could be added using JavaScript and CSS."}),Object(x.jsx)("td",{children:"Animations are added using built-in libraries."})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"It uses HTML tags."}),Object(x.jsx)("td",{children:"It doesn\u2019t use HTML tags."})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"In ReactJs, Virtual DOM is responsible for rendering the code on the browser."}),Object(x.jsx)("td",{children:"Uses its native API to render the code on the mobile application."})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"CSS is used for adding styles."}),Object(x.jsx)("td",{children:"Uses stylesheet to add the styles."})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"ReactJs is platform-independent i.e. it can be executed on all platforms."}),Object(x.jsx)("td",{children:"It is not platform independent, a lot of effort is needed to run it on several platforms."})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Provides high security."}),Object(x.jsx)("td",{children:"Less secure as compared to ReactJs."})]})]})]})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)(C,{title:"Installing React into the machine"}),Object(x.jsx)(k,{children:"Till now we have seen what React is and why we should use it and what are its benefits. So, now let\u2019s proceed to the actual working and let\u2019s install React in our machine. To install the full React toolchain, we would be using create-react-app."}),Object(x.jsx)(k,{children:"In order to install create-react-app, run the following command in your terminal:"}),Object(x.jsx)(T,{children:"npm install -g create-react-app"}),Object(x.jsx)(k,{children:"This command will install create-react-app in your system globally. Once this is done, we are ready to create our first react project. In order to do so, follow the below commands -"}),Object(x.jsxs)(T,{children:["npx create-react-app ","{project_name}"]}),Object(x.jsxs)(k,{children:["The above command will generate a template react project for you to begin with. Simply replace the ","{project_name}"," with the name of your own project. The contents of the project that you will get after running the above command are shown below:"]}),Object(x.jsx)(J,{src:N,alt:"Contents of React document"}),Object(x.jsx)(k,{children:"Then navigate to the project directory using"}),Object(x.jsx)(T,{children:"cd my-app"}),Object(x.jsx)(k,{children:"Now to start the react project, run the following command in the same terminal."}),Object(x.jsx)(T,{children:"npm start"}),Object(x.jsx)(k,{children:"By running the above command, your react project will start running on localhost:3000 and will open automatically in your default browser. Now you are all set. You have installed react and have also initialized your very first project."})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)(C,{title:"Components and Elements in React"}),Object(x.jsxs)("ul",{style:{listStyleType:"disc"},children:[Object(x.jsxs)("li",{children:[Object(x.jsx)(I,{title:"Elements"}),Object(x.jsx)(k,{children:"An element is a plain object describing a component instance or DOM node and its desired properties. It contains information only about the component type (eg: a button), its properties, and any child element inside it. In simple words, an element is a way to tell React what you want to see on the screen. You cannot call any methods on the element. It\u2019s just an immutable description object."})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)(I,{title:"Components"}),Object(x.jsx)(k,{children:"A React Component is a template, a blueprint, a global definition. This can be either a function or a class. If the component is a functional one, then it returns an element, but if the component is a Class one then it renders the element. In simple words, it is a function or class that accepts an input(props) and returns a React element. React components are independent and reusable blocks of code."}),Object(x.jsx)(k,{children:"A React component can have methods and can also receive props as well. Components also have the state which they use to display dynamic content. React components are of two types:"}),Object(x.jsxs)("ul",{style:{listStyleType:"circle"},children:[Object(x.jsx)("li",{children:"Class components"}),Object(x.jsx)("li",{children:"Functional components"})]}),Object(x.jsx)("b",{children:"Note:"})," The name of a React Component must start with a capital letter.",Object(x.jsxs)("ul",{style:{listStyleType:"disc"},children:[Object(x.jsxs)("li",{children:[Object(x.jsx)(I,{title:"Class Components"}),Object(x.jsx)(k,{children:"React class-based components are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All class-based components are child classes for the Component class of ReactJS. So, the component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives the component access to React.Component's functions. Class components also require a render() method, which returns the code to be displayed i.e. JSX. The main feature of class-based components is that they have access to a state which dictates the current behavior and appearance of the component. This state can be modified by calling the setState() function. One or more variables, arrays, or objects defined as part of the state can be modified at a time with the setState() function. Class-based components also have access to Lifecycle methods."})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)(I,{title:"Functional Components"}),Object(x.jsx)(k,{children:"Functional components are just simple JavaScript functions. We can create a functional component in React by writing a simple JavaScript function. These functions may or may not receive data as parameters(props). In the functional Components, the return value is the JSX code to render to the DOM tree. Functional components lack a significant amount of features as compared to class-based components. So, in February 2019 React 16.8 was launched which introduced the concept of React Hooks. Hooks are special functions that added a lot of missing functionalities in the functional components. Functional components do not have access to dedicated state variables like class-based components, this was one of the problems that were overcome by the introduction of hooks."}),Object(x.jsx)(k,{children:"Class-based components are slightly slower than their functional counterparts. The difference is very small and is almost negligible for smaller web apps \u2013 though the performance difference increases when the number of components in the app increases. Moreover, class-based components involve a lot more coding on the programmer\u2019s part, making them slightly more inefficient to use. And hence, functional components are some of the more common components that you\u2019ll come across while working in React."})]})]})]})]})]})]})}),Object(x.jsx)(M,{})]})},D=(n(58),function(){var e=Object(p.g)();return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{children:"Heapify React-Able"}),Object(x.jsx)(h.a,{className:"d-flex justify-content-center pageSection",children:Object(x.jsx)(j.a,{style:{width:"18rem"},className:"shadow-lg",children:Object(x.jsxs)(j.a.Body,{children:[Object(x.jsx)(j.a.Title,{children:"Week 2"}),Object(x.jsx)(j.a.Subtitle,{className:"mb-2 text-muted",children:"Basics of React"}),Object(x.jsx)(j.a.Text,{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"What is React?"}),Object(x.jsx)("li",{children:"Benefits of React"}),Object(x.jsx)("li",{children:"Installation"}),Object(x.jsx)("li",{children:"Writing First React Project"}),Object(x.jsx)("li",{children:"Elements and Components"})]})}),Object(x.jsx)(j.a.Link,{style:{textDecoration:"none"},onClick:function(){e.push("/react-able/week2")},children:"Resources"})]})})})]})});var E=function(){var e=function(){return null!==localStorage.getItem("name")};return Object(x.jsx)(R.a,{children:Object(x.jsxs)(p.d,{children:[Object(x.jsx)(p.b,{exact:!0,path:"/",component:v}),";",Object(x.jsx)(p.b,{exact:!0,path:"/home",render:function(){return e()?Object(x.jsx)(p.b,{component:D}):Object(x.jsx)(p.a,{to:"/"})}}),Object(x.jsx)(p.b,{exact:!0,path:"/react-able/week2",render:function(){return e()?Object(x.jsx)(p.b,{component:A}):Object(x.jsx)(p.a,{to:"/"})}}),Object(x.jsx)(p.a,{to:"/"})]})})};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.5cb39d29.chunk.js.map