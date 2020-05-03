import React, {Component} from 'react';
import FeedbackManager from '../api/FeedbackManager';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    table: {
        maxWidth: 1200,
        align:'center',
        maxHeight:300
      },
    
    wrapper: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    paper: {
      marginTop: theme.spacing(2),
      alignItems:'center'
    },
    tableHeader: {
      backgroundColor: '#039be5',
    },
    container: {
      display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    paperGridFirst: {
      backgroundColor: '#bbdefb',
    },
    paperGridSecond: {
      backgroundColor: '#ffcdd2',
    },
    action: {
      marginLeft:400
        },
    cardAction: {
      backgroundColor:'grey'
    },
    resultText:{
      color:"blue"
    }
});
class Event extends Component {
    constructor(props) {
        super(props);
        this.state={
            todo: [],
            result:''
        }
        this.clickMailButton=this.clickMailButton.bind(this);
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
        FeedbackManager.get("/client/retrieveEvents",axiosConfig).then(response =>{
            this.setState({todo: response.data})
        }
        )
    }
    clickMailButton() {
      const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            //"Authorization": JSON.parse(localStorage.getItem('user')).token
            "Authorization": localStorage.getItem('token')
        }
      };
      FeedbackManager.get("/client/sendMail", axiosConfig).then(response=>{
        this.setState({result:response.data})
      })
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.wrapper}>
            <Grid container className={classes.container} spacing={2}> 
            <Grid item xs={5}>
          <Paper className={classNames(classes.paper, classes.paperGridFirst)}>
          <Typography gutterBottom variant="subtitle1">
                  <b>Email Reminder!</b>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <small>Sit back and Relax while the app send email...! </small>
                    <small className={classes.resultText}>{this.state.result}</small>
                  </Typography>
                  <CardActions className= {classes.action}>
                  <Button className={classes.cardAction} size="small" onClick={this.clickMailButton}>Send Mail</Button>
                   </CardActions>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classNames(classes.paper, classes.paperGridSecond)}>
          <Typography gutterBottom variant="subtitle1">
                  <b>Future Implementations!</b>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <small>This place holder can be used for adding any other action in future</small>
                  </Typography>
                  <CardActions className= {classes.action}>
                  <Button className={classes.cardAction} size="small">view details</Button>
                   </CardActions>
          </Paper>
        </Grid>
        <Grid item xs={10} >
           <Paper className={classes.paper}>
            <TableContainer className={classes.table}>
            <Table  aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="right">event_id</TableCell>
                  <TableCell align="right">base_location</TableCell>
                  <TableCell align="right">council_name</TableCell>
                  <TableCell align="right">event_name</TableCell>
                  <TableCell align="right">event_description</TableCell>
                  <TableCell align="right">event_date</TableCell>
                  <TableCell align="right">employee_id</TableCell>
                  <TableCell align="right">employee_name</TableCell>
                  <TableCell align="right">volunteer_hours</TableCell>
                  <TableCell align="right">travel_hours</TableCell>
                  <TableCell align="right">lives_impacted</TableCell>
                  <TableCell align="right">business_unit</TableCell>
                  <TableCell align="right">event_status</TableCell>
                  <TableCell align="right">iiep_category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.todo.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.event_id}</TableCell>
                    <TableCell align="right">{row.base_location}</TableCell>
                    <TableCell align="right">{row.beneficiary_name}</TableCell>
                    <TableCell align="right">{row.council_name}</TableCell>
                    <TableCell align="right">{row.event_name}</TableCell>
                    <TableCell align="right">{row.event_description}</TableCell>
                    <TableCell align="right">{row.event_date.toString()}</TableCell>
                    <TableCell align="right">{row.employee_id}</TableCell>
                    <TableCell align="right">{row.employee_name}</TableCell>
                    <TableCell align="right">{row.volunteer_hours}</TableCell>
                    <TableCell align="right">{row.travel_hours}</TableCell>
                    <TableCell align="right">{row.business_unit}</TableCell>
                    <TableCell align="right">{row.event_status}</TableCell>
                    <TableCell align="right">{row.iiep_category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
          </Grid>

          </Grid> 
          </div>
        )
    }
}
export default withStyles(useStyles)(Event)