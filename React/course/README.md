# To Read
* The primary difference of Flux vs Redux is that Flux includes multiple Stores per app, but Redux includes a single Store per app
* React doesn’t use "plain HTML" — it uses JSX (JavaScript XML)
* JSX (HTML-like code)

# In React
1. **.js file --> contains --> HTML code**
   ```javascript
   // App.js
   function App() {
   return (
   <div>
      <h1>Hello from React</h1>
      <p>This looks like HTML, but it's JSX!</p>
   </div>
   );
   }
   export default App;
   ```
2. **.js file --> contains --> JSX code**
```jsx
const element = <h1>Hello, world!</h1>;
```
3. **.jsx file --> contains --> HTML code**
   ```javascript
   // HelloWorld.jsx
   function HelloWorld() {
   return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a JSX file containing HTML-like code.</p>
    </div>
   );
   }
   export default HelloWorld;
   ```
4. **.html file --> contains --> JS code**
   * i) Inline JavaScript inside <script> tags
     ```html
     <!-- JavaScript inside HTML -->
     <script>
      function changeText() {
        document.getElementById("heading").innerText = "You clicked the button!";
      }
     </script>
     ```
   * ii) External JavaScript File Linked in HTML
     ```html
     <!-- Link to external JavaScript file -->
     <script src="script.js"></script>
     ```
# Embed JavaScript inside {}
 * If you want to use any dynamic value, variable in html code,  wrap it inside {}
 ```javascript
 const name = "John";
 return <h1>Hello, {name}</h1>;
 ```
       
# Rule to remember
* In React’s JSX —  use {} to insert real JavaScript ( it may have HTML like code ) inside the JSX

* You can not manually write JavaScript code inside HTML file
* We can not write js code in .html file because React uses JSX and a component-based architecture
* JSX is not about putting JavaScript and XML into an HTML file.
* Instead, JSX lets you write HTML-like UI directly in JavaScript code — and React handles the rest

# Reference
* [Step by step changes - React 6 vs React 5](https://github.com/in28minutes/full-stack-with-react-and-spring-boot/blob/master/00000-react-6-updates/react6-vs-react5-step-by-step-changes.md)





