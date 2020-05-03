import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    footer: {
        position:'absolute',
        bottom: 0,
        width: 1370,
        height: 30,
        backgroundColor: '#3f51b5',
        textAlign:'left',
        color: 'white'
    }
})
class Footer extends Component {
    render() {
        const {classes} =this.props;
        return(
            <div className={classes.footer}>
                    <span>@2020 outreach feedback management system - cognizant all rights reserved</span>
            </div>
        );
    }
}
export default withStyles(styles)(Footer)