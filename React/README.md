# Definition
* React is a JavaScript library / front-end View Framework for creating user interfaces
* [React Versions](https://reactjs.org/versions/)
* [React Github](https://github.com/facebook/react/releases)

# To Read
* React JS application can be written in [Typescript](https://www.typescriptlang.org/) OR Javascript
* Typescript code can be compiled into Javascript 
* node server or webpack dev server is bundled in Node JS software installation
* React JS can be used for both developing Web Applicaton & Native Applications ( iPhone & Android )
* Class component has "State" feature, where as Function component does not have
* JSX is an HTML-like syntax, that helps to write HTML in React
* JSX = Its a syntax extension to Java Script
* JSX = JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in Reac
* Babel is a JavaScript compiler
* In React, "App" is parent component and all others are child components. Parent component will call Child components.
* In React, every component ( class , function etc ) can be written in separate file ( .js file / .jsx ) as a module 
* Every Class component should extend "Component" explicitly
* "default export of class " can use directly where as all other exports , we need to put in '{ }' in import statement
* VDOM ( Virtual DOM ) is the react representation of DOM in-memory
* Javascript has internal representation of the page called DOM
* setState() funcation actually does the merging of states
* var = Global Scope and let = Block Scope
* const = It cannot be declared without initialization
* In React Router V6 version, you can't use the component prop anymore. It was replaced in favor of element

# Prerequisites
* [Install Node JS on Windows 7](https://www.centennialsoftwaresolutions.com/post/install-node-js-on-windows-7)
* [Download VS Code IDE](https://code.visualstudio.com/#alt-downloads) Its from Microsoft
* Node >= 14.0.0 and npm >= 5.6

# Installation
* [Node JS download](https://nodejs.org/en/)
* [VS Code IDE](https://code.visualstudio.com/#alt-downloads)

# Commands
* $ npm init === To intialize package.json
* $ npm install jquery === To install / download dependencies of jquery
* $ npm install react-app === To install / download dependencies of react app
* $ npx create-react-app your-app-name --template typescript
* $ yarn create react-app your-app-name --template typescript
* $ npx create-react-app todo-app
* $ npm start === Starts the development server ( node server or webpack dev server )
* $ npm run build === Bundles the app into static files for production
* $ npm test === Starts the test runner
* $ npm run eject === Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
* $ npm cache clean -f  
* $ npm install -g n 
* $ npm add react-router-dom == It adds react router package to package.json for using router feature
 

# Tutorial
* [Chrome Restlet Client Plugin](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=en)
* [Chrome React DevTools Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

# Reference
* [Spring Boot with React Guide](https://github.com/in28minutes/full-stack-with-react-and-spring-boot)
* [5 Reasons to Use TypeScript with React](https://blog.bitsrc.io/5-strong-reasons-to-use-typescript-with-react-bc987da5d907)
* [React TypeScript: Basics and Best Practices](https://blog.bitsrc.io/react-typescript-cheetsheet-2b6fa2cecfe2)
* [11 JavaScript and TypeScript Shorthands](https://blog.bitsrc.io/11-javascript-and-typescript-shorthands-you-should-know-690a002674e0)
* [React Developer Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Step by step changes - React 6 vs React 5](https://github.com/in28minutes/full-stack-with-react-and-spring-boot/blob/master/00000-react-6-updates/react6-vs-react5-step-by-step-changes.md)

# Terminology
* Component
* Module
* Library
* Framework
* JSX = JavaScript Extension
* JSX = JavaScript XML

# Similarity Table
|SNo| #Java Script | #Java | 
| :---:| :---: | :---: | 
| 1| Node JS   | Spring Boot | 
| 2| NPM | Maven / Gradle |
| 3| [NPM Registry](https://www.npmjs.com/) | [Maven Repo](https://mvnrepository.com/)|
| 4| package.json & package-lock.json| pom.xml |
| 5| "index.js" entry point | Spring boot class entry point|
| 6| "node_modules" folder | ".m2" folder OR "lib" folder |
| 7| "npm" command | "mvn" command |
| 8| "npm install" command  | "mvn install" command |
| 9| packages like "react", "react-dom" etc | packages like "java.lang", "java.util" etc|

# Important files in React JS app
|SNo| #File | #Purpose | 
| :---:| :---: | :---: | 
|1 | index.html   | To define title of React App | 
| 2| App.js |  Its home file for React App|
| 3| App.test.js |  Its test file for unit testing |
| 4| App.css |  Styling for App component |
| 5| index.js | entry point file for React Application |
| 6| index.css | Styling for entire application |
| 7| manifest.json |  |
| 8| package.json | To specifiy the dependencies for React App |

# Flow
* index.js ---> index.html & App.js ---> 

# React Components
Component examples are Header, Footer, Page , Menu , Todo etc in web application
|SNo| #Component | #Description | 
|:---:| :---: | :---: | 
| 1| View   | written in JSX or JS |
| 2| Logic | written in Javascript|
| 3| Styling| CSS|
| 4| App |Its root component for React application |
| 5|State | Internal Data Store|
| 6|Props | Pass Data |
| 7|Class | for ex : class App extends Component|
| 8|Function | for ex : function App()|

# React Features
|SNo| #Feature | #Description | 
|:---: | :---: | :---: | 
| 1| Routing   | It provides Routing. Components are 1. BrowserRouter 2. Route 3. Routes |
| 2| Forms ||
| 3| REST API Calls | |
| 4| Authentication | |

# React Packages
|SNo| #Package | #Purpose | 
| :---:| :---: | :---: | 
| 1| react   | Its root for Web app & Native app |
| 2|react-dom | Used for developing web applications|
| 3|react-native |Used for developing Native apps ( iPhone & Android ) |
| 4|react-scripts |It provides npm start, npm run etc |
| 5|react-router-dom |It provides routing |
| 6|web-vitals | |

# Image
1. Architrcture
* ![image](https://user-images.githubusercontent.com/7721150/156160629-056f94f0-6684-4c1b-bb57-3ae78a87f34f.png)
2. Component
* ![image](https://user-images.githubusercontent.com/7721150/156894556-4fb37d4b-bcb8-4162-83b6-2780f1bff4e9.png)
3. Virtual DOM ( Document Object Model ) 
* ![image](https://user-images.githubusercontent.com/7721150/166091739-72bcb6b5-0999-4a65-8a9e-aab86feef8d0.png)
4. Diff between VDOM
* ![image](https://user-images.githubusercontent.com/7721150/166092203-0a56f349-d8f2-4231-ba3e-0b9139286026.png)
5. React Components & Features
* ![image](https://user-images.githubusercontent.com/7721150/166104584-d24f6f08-c3cc-40b8-b5da-144a327cf7ce.png)





