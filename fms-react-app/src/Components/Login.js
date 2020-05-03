import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import BackgroundImg from '../images/cts.jpg';
import FeedbackManager from '../api/FeedbackManager';

const styles = theme  => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LoginPage extends React.Component {

  state ={ 
    username:'',
  password:'',
    submitted:false
};


buttonSubmit= event=>{
     event.preventDefault();
      const dataObject = {};
      const username =this.state.username;
       dataObject.username = this.state.username;
       dataObject.password = this.state.password;
      // console.log(dataObject)
      FeedbackManager.post("/login", dataObject).then(response => {
        const userData = {username:this.state.username};
        const token = response.data
        console.log(token.token)
       // const user = {...token,...userData};
       // localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('token', 'Bearer '+token.token)
        localStorage.setItem('username',username);
        console.log(localStorage.getItem('token'));
        this.props.history.push("/home")
      }).catch()
   }

  render(){
    const { classes } = this.props;
     return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.username}
              onChange = {event => this.setState({username:event.target.value})}
              ///onChange={e => setValue(e.target.value)} 


            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange = {event => this.setState({password:event.target.value})}
              //onChange={e => setValue(e.target.value)} 


            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick ={this.buttonSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
  }
}
export default withStyles(styles)(LoginPage)