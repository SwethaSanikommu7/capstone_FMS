import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FeedbackManager from '../api/FeedbackManager';

const styles = theme =>({
    paper: {
        maxWidth: 880,
        margin: 'auto',
        overflow: 'hidden',
        marginTop: 50
      },
      table: {
        maxWidth: 1400,
        align:'center',
        maxHeight:300
      },
      tableHeader: {
        backgroundColor: '#039be5',
        alignItems:'left'
      },

      block: {
        display: 'block',
      },
      addUser: {
        marginRight: theme.spacing(2),
      },
      contentWrapper: {
        margin: '40px 40px',
      },
});
class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state={
          todo: [],
          open: false
        }
    }

     handleClickOpen = () => {
      this.setState({open: true})
    };
  
     handleClose = () => {
      this.setState({open: false})
    };
    componentDidMount()
    {
        // let self  = this;
        // FeedbackManager.get("/getEvents").then(function(response) {
        //      self.setState({todo: response.data})
        // })
        const axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              //"Authorization": JSON.parse(localStorage.getItem('user')).token
              "Authorization": localStorage.getItem('token')
          }
        };
        FeedbackManager.get("/client/retrieveQuestions",axiosConfig).then(response =>{
            this.setState({todo: response.data})
        }
        )
    }

render() {
    const {classes} = this.props;
    return(
        <Paper className={classes.paper}>
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              </Grid>
              <Grid item xs>
                  <h5>Event reports</h5>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" className={classes.addUser} onClick={this.handleClickOpen}>
                  Add Question
                </Button>
                <Dialog
                 open={this.state.open}
                 onClose={this.handleClose}
                 aria-labelledby="alert-dialog-title"
                 aria-describedby="alert-dialog-description"
                 >
              <DialogTitle id="alert-dialog-title">{"Add Feedback Question"}</DialogTitle>
              <DialogContent>
              <DialogContentText id="alert-dialog-description">
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Feedback Type"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Question"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Answer1"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Answer2"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Answer3"
              name="email"
              autoComplete="email"
              autoFocus
            />
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Save
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={classes.contentWrapper}>
          <Grid item xs={14} >
           <Paper className={classes.paper}>
            <TableContainer className={classes.table}>
            <Table  aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="right">question</TableCell>
                  <TableCell align="right">total_answers</TableCell>
                  <TableCell align="right">feedback_type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.todo.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.question}</TableCell>
                    <TableCell align="right">{row.total_answers}</TableCell>
                    <TableCell align="right">{row.feedback_type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
          </Grid>
        </div>
      </Paper>
    );
}
}
// Content.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
export default withStyles(styles)(Feedback)
