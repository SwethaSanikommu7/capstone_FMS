import React from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FeedbackManager from '../api/FeedbackManager';


const style = theme => ({
    root: {
      //  flexGrow: 1,
      },
     
      paper: {
        //padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      },
      table: {
        //maxWidth: 800,
        align:'center',
        //maxHeight:300
      },
      tableHeader: {
        backgroundColor: '#039be5',
        alignItems:'left'
      },
      
    });
class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todo: [],
            todo1:[]
        }
    }
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
        FeedbackManager.get("/client/fetchPMO",axiosConfig).then(response =>{
            this.setState({todo: response.data})
        })

        FeedbackManager.get("/client/fetchPOC",axiosConfig).then(response =>{
            this.setState({todo1: response.data})
        }
        )

    }
    render() {
        const {classes} = this.props;

        return(
            <div>
            <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            View PMO Details
          </Paper>
        </Grid>
        <Grid item xs={8}>
           <Paper className={classes.paper}>
            <TableContainer className={classes.table}>
            <Table  aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="right">email</TableCell>
                  <TableCell align="right">first_name</TableCell>
                  <TableCell align="right">last_name</TableCell>
                  <TableCell align="right">mobile</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.todo.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.first_name}</TableCell>
                    <TableCell align="right">{row.last_name}</TableCell>
                    <TableCell align="right">{row.mobile}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
         
        </Grid>
      </Grid>
    </div>
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            View POC Details
          </Paper>
        </Grid>
        <Grid item xs={8}>
           <Paper className={classes.paper}>
            <TableContainer className={classes.table}>
            <Table  aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="right">email</TableCell>
                  <TableCell align="right">first_name</TableCell>
                  <TableCell align="right">last_name</TableCell>
                  <TableCell align="right">mobile</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.todo1.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.email_address}</TableCell>
                    <TableCell align="right">{row.first_name}</TableCell>
                    <TableCell align="right">{row.last_name}</TableCell>
                    <TableCell align="right">{row.mobile}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
         
        </Grid>
      </Grid>
    </div>
    </div>
        );
    }
}
export default withStyles(style)(UserDetails)