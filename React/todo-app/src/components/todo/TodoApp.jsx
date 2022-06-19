import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

class TodoApp extends Component {

    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent)
        return ( 
           <div className="TodoApp">
               <Router>
                  <Routes>
                      <Route path="/"  element={<LoginComponentWithNavigation />}></Route>
                      <Route path="/login"  element={<LoginComponentWithNavigation />}></Route>
                      //<Route path="/login"  element={<LoginComponentWithNavigation />}></Route>
                      //<Route path="/welcome"  element={<WelcomeComponent/>}></Route>
                      <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} /> 
                      <Route path="/todos" element={<ListTodosComponent />} /> 
                      <Route path="*"  element={<ErrorComponent/>}></Route> 
                  </Routes>
               </Router>
               {/*<LoginComponent></LoginComponent>
               <WelcomeComponent></WelcomeComponent>*/}
           </div>
        )
    }
}

class LoginComponent extends Component {

    constructor(props) {

        super(props);
        
        this.state = { 

            username: 'todousername',
            password: '',
            hasLoginFailed:false,
            showSuccessMessage:false
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {

       // console.log(event.target.value);
        // console.log(this.state);
        this.setState( { 
            [event.target.name] : event.target.value
            }
        )
     }


     /** handlePasswordChange(event) {

        console.log(event.target.value);
        this.setState( { 
            password : event.target.value
            }
        )
     } */

    loginClicked() {
        // console.log(this.state);
        // todousername , dummy
        if ( this.state.username === 'todousername' && this.state.password === 'dummy' ) {
          
            console.log('Successful');
            //this.props.history.push("/welcome");
            this.props.navigate(`/welcome/${this.state.username}`)
            this.setState( { showSuccessMessage:true } )
            this.setState( { hasLoginFailed:false } )
        }
        else { this.setState( { showSuccessMessage:false } )
               this.setState( { hasLoginFailed:true } ) }

    }

    render() { // render method
       
        return(
            <>
           {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
           <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccessMessage> */ }
           { this.state.hasLoginFailed && <div>Invalid Credentials</div> }
           { this.state.showSuccessMessage && <div>Login Successful</div> }
            User Name : <input type="text" name="username" value={this.state.username} onChange = { this.handleChange}/>
            Password : <input type="password" name="password" value={this.state.password} onChange = { this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return(
            <div>Welcome {this.props.params.name}.You can manage your todos  <Link to="/todos">here</Link>
            </div>
            //<div>Welcome Todo app component</div>
        )
    }
}

class ListTodosComponent extends Component {

    constructor(props) {
       super(props);
       this.state = { todos : 
        [{ id :1 , description : 'Learn React' , done:false,targeDate:new Date()} ,
        { id :2 , description : 'Learn Java', done:false,targeDate:new Date()} ,
        { id :3 , description : 'Learn Spring Boot', done:false,targeDate:new Date()} ,
        { id :4 , description : 'Learn Micro Services', done:false,targeDate:new Date()} ,
        { id :5 , description : 'Learn Docker', done:false,targeDate:new Date()} ,
        { id :6 , description : 'Learn Kubernetes', done:false,targeDate:new Date()} ,
        ]
    
    }
    }

    render() {
        return ( 
          <div>
            <h1>List Todos</h1>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>description</th>
                    <th>is completed?</th>
                    <th>targeDate</th>
                  </tr>
                </thead>
                <tbody>
                     { this.state.todos.map( todo => 
                     <tr>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targeDate.toString()}</td>
                    </tr> 
                    )  }
                </tbody>
              </table>
          </div>
  

         )
    }
}

{/* function ShowInvalidCredentials(props) {

    if ( props.hasLoginFailed )
    return <div>Invalid Credentials</div>
    return null;
}
function ShowLoginSuccessMessage(props) {
    if ( props.showSuccessMessage )
    return <div>Login Successful</div>
    return null;
}  */ }



function withNavigation(Component) {
    
    return props => <Component {...props} navigate={useNavigate()} />;
  
}

function ErrorComponent() {

    return <div>An error occured , dont know what to do, contact support</div>
}

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
  
export default TodoApp  