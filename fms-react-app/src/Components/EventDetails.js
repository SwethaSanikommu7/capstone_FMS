import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import FeedbackManger from '../api/FeedbackManager'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme =>({
    root:{
        
            margin: theme.spacing(3),
            width: '500px',
            display: 'flex'
    },
    table: {
        maxWidth: 1200,
        align:'center'
      },
      tableHeader: {
        backgroundColor: '#039be5',
      }
    
})
class Reports extends Component {
    constructor(props) {
        super(props)
        this.state={
            eventname: '',
            todo:[],
            isButtonSubmit: false

        }
        this.handleChange=this.handleChange.bind(this)
        this.submitButton =this.submitButton.bind(this)
    }
render() {
    const {classes} = this.props;
    return(
        <div>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={this.submitButton}>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={6}>
                <TextField id="standard-basic" label="Search" variant="outlined"value={this.state.value} fullWidth onChange={this.handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button className = {classes.button}
            type="submit"
            fullWidth
            variant="contained"
            color="primary" >Submit</Button>
                </Grid>
            </Grid>
  </form>
  {this.state.isButtonSubmit &&<div>
    <Grid item xs={10} >
           <Paper>
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
    </div>}
</div>
    );
}

handleChange(event) {
    this.setState(
        {eventname:event.target.value}
    )
}
submitButton(event) {
    event.preventDefault();
    //alert(this.state.username)
   // console.log(this.state.username)        
   this.setState({isButtonSubmit : true})
    const dataObject ={};
    const axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          //"Authorization": JSON.parse(localStorage.getItem('user')).token
          "Authorization": localStorage.getItem('token')
      }
    };
    //dataObject.username =this.state.eventname;
    FeedbackManger.get(`/client/retrieve/${this.state.eventname}`,axiosConfig).then(response =>{
            this.setState({todo: response.data})
     })
}
}

export default withStyles(styles)(Reports)