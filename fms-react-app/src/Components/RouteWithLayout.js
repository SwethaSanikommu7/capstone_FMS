import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

class RouteWithLayout extends Component {
    render() {
        const { layout:Layout ,component:Component,...rest} = this.props;
        console.log(this.props);
        return(
            <Route {...rest}  render ={ matchProps => (
               localStorage.getItem('token')
               ?
                 <Layout>
                    <Component {...matchProps}/>
                </Layout>
                : <Redirect to="/login"></Redirect>
             )}/>
        );
    }
}

export default RouteWithLayout