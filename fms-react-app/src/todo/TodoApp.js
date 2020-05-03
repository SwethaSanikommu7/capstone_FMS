import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from '../Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavHeader from '../Components/NavBar';
import Dashboard from '../Components/Dashboard';
import Events from '../Components/Events';
class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/header" component={NavHeader}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/Event" component={Events}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default TodoApp;