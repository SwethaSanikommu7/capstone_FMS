import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import { AppBar, Toolbar,MenuList, MenuItem, Link } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

const useStyles = theme => ({
    root: {
      display: 'flex',
    },
     login: {
       marginLeft: 630
     },
     Link: {
       color:'white',
      "&:hover":{
         color:'white'
       }
     }
    
  });
  
  class HeaderComponent extends Component {
      state= {
         anchorEl : null

      }

       handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget})
      };
    
       handleClose = () => {
        this.setState({anchorEl:null})
       }
    render() {
        const { classes } = this.props;
    

    return (
    <AppBar position="static">
    <Toolbar className={classes.menuList}>
   <div className={classes.root}>
  
  <MenuList>
    <MenuItem><DashboardIcon/><Link className={classes.Link} href="/dashboard">Dashboard</Link></MenuItem>
  </MenuList>

<div>
            <MenuList>
              <MenuItem ><EventIcon/><Link className={classes.Link} href="/event">Events</Link></MenuItem>
            </MenuList>        
</div>
<div>
            <MenuList>
              <MenuItem ><ReceiptIcon/><Link className={classes.Link} href="/reports">Reports</Link></MenuItem>
            </MenuList>        
</div>
<div>
             {/* <MenuList>
              <MenuItem ><SettingsIcon/><Link href="/configuration">Configuration</Link></MenuItem>
            </MenuList>   */}
            <MenuList>
            <SettingsIcon/><Button aria-controls="simple-menu" aria-haspopup="true" className={classes.Link} onClick={this.handleClick}>
        Configuration
      </Button>
      <Menu 
        id="simple-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}><Link href="/feedback">FeedBack</Link></MenuItem>
        <MenuItem onClick={this.handleClose}><Link href="/userDetails">UserDetails</Link></MenuItem>
        <MenuItem onClick={this.handleClose}><Link href="/eventData">EventDetails</Link></MenuItem>
      </Menu>
      </MenuList>
             
</div>
<div>
            {/* <MenuList>
    <MenuItem ><div className={classes.login}><i><AccountCircleIcon/></i><Link className={classes.Link} href="/login">{localStorage.getItem('username')}</Link></div></MenuItem>
            </MenuList>     */}

<MenuList>
    <MenuItem ><div className={classes.login}><i><AccountCircleIcon/></i><Link className={classes.Link} href="/login">Sign out</Link></div></MenuItem>
            </MenuList>  
             
</div>
</div>
      </Toolbar>
    </AppBar>
    );
    }
}
  

  
  export default withStyles(useStyles)(HeaderComponent);