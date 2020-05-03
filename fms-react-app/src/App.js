import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dashboard from './Components/Dashboard';
import Events from './Components/Events';
import Main from './layout/Main';
import Header from './Components/Header';
import RouteWithLayout from './Components/RouteWithLayout';
import EventDetails from './Components/EventDetails';
import FeedBack from './Components/Feedback';
import ExcelReports from './Components/ExcelReports';
import UserDetails from './Components/UserDetails';
class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" component={Login}/>
                     <Route path="/home" component={Header}/>

                    <RouteWithLayout exact path="/dashboard" layout={Main} component={Dashboard}></RouteWithLayout>
                    <RouteWithLayout exact path="/event" layout={Main} component={Events}></RouteWithLayout>
                    <RouteWithLayout exact path="/reports" layout={Main} component={ExcelReports}></RouteWithLayout>
                    <RouteWithLayout exact path="/feedback" layout={Main} component={FeedBack}></RouteWithLayout>
                    <RouteWithLayout exact path="/userDetails" layout={Main} component={UserDetails}></RouteWithLayout>
                    <RouteWithLayout exact path="/eventData" layout={Main} component={EventDetails}></RouteWithLayout>

                    {/* <RouteWithLayout exact path="/reports"layout={Main}></RouteWithLayout> */}
                    {/* <Route path="/header" component={NavHeader}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/event" component={Events}/> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default App;