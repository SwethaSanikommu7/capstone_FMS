import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from '../Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HeaderComponent from './NavBar'
class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component={LoginPage}/>
                    <Route path="/Login" component={LoginPage}/>
                    <Route path="/welcome/:name" component={Welcome}/>
                    <Route path="/todoListApp" component={TodoListApp}/>
                    <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                {/* <LoginPage/>
                <Welcome/> */}
            </div>
        );
    }
}
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'swetha',
            password:'swetha',
            hasLoginFailed:false,
            hasLoginSuccess:false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
            this.handleChange=this.handleChange.bind(this)
            this.buttonSubmit=this.buttonSubmit.bind(this)
    }
    handleChange(e) {
        console.log(e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    // handleUsernameChange(e) {
    //     console.log(e.target.name);
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
    // handlePasswordChange(e1) {
    //     console.log(e1.target.value);
    //     this.setState({password:e1.target.value})
    // }
    buttonSubmit() {
        if(this.state.username ==='swetha' && this.state.password === 'swetha') {
            // console.log("login successfull")
           // this.setState({hasLoginSuccess: true})
           // this.setState({hasLoginFailed: false})
           this.props.history.push(`/welcome/${this.state.username}`);
        }else {
            this.setState({hasLoginFailed: true})
            this.setState({hasLoginSuccess: false})
            // console.log("login failed")
        }
    }
    render() {
        return(    
            <div>
                {/* <AppFiledToLogin hasLoginFailed={this.state.hasLoginFailed}></AppFiledToLogin> */}
                {this.state.hasLoginFailed && <div>invalid credentials</div>}
                {this.state.hasLoginSuccess && <div>success</div>}
                {/* <ShowSuccessMsg hasLoginSuccess={this.state.hasLoginSuccess}></ShowSuccessMsg> */}
                Username:<input type ="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                password:<input type ="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button onClick={this.buttonSubmit}>Submit</button>
            </div>
        );
    }
}
function AppFiledToLogin(props) {
    if(props.hasLoginFailed) {
        return <div>return invalid credentials</div>;
    }
    return null;
}
function ShowSuccessMsg(props) {
    if(props.hasLoginSuccess) {
        return <div>success</div>
    }
    return null;
}
class Welcome extends Component {
    render() {
        return(
            <div>welcome {this.props.match.params.name}. You can manage all todos here
            <Link to="/todoListApp">Click</Link>
            </div>
        )
    }
}
function ErrorComponent() {
    return <div>An error Occured.contact support team</div>
}

class TodoListApp extends Component {
    constructor(props) {
        super(props);
        this.state={
            todo: [{id:1, description:'test', isCompleted:false, targetDate:new Date()},
            {id:2, description:'test2', isCompleted:false, targetDate:new Date()},
            {id:3, description:'test3',isCompleted:true, targetDate:new Date()}]
        }
    }
    render() {
        return(
            <div>
<               h1>Todo List</h1>
                <table>
                    <thead>
                    <tr>
                    <th>id</th>
                    <th>description</th>
                    <th>isCompleted</th>
                    <th>targetDate</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.todo.map(
                            todos => 
                            <tr>
                            <td>{todos.id}</td>
                            <td>{todos.description}</td>
                            <td>{todos.isCompleted.toString()}</td>
                            <td>{todos.targetDate.toString()}</td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
            
        )
    }
}


class FooterComponent extends Component {
    render() {
        return (
<footer class="page-footer font-small blue">
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
</footer>

        )
    }
}
export default TodoApp;