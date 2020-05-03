import React, {Component} from 'react';
import ReactExport from "react-export-excel";
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

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const useStyles = theme => ({
    table: {
        maxWidth: 1200,
        align:'center',
        maxHeight:400
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
    }
  
});
class Download extends Component {
    constructor(props) {
        super(props);
        this.state={
            todo: []
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
        FeedbackManager.get("/client/retrieveReports",axiosConfig).then(response =>{
            this.setState({todo: response.data})
        }
        )
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.wrapper}>
            <Grid container className={classes.container} spacing={2}> 
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
                  <TableCell align="right">project</TableCell>
                  <TableCell align="right">business_unit</TableCell>
                  <TableCell align="right">rating</TableCell>
                  <TableCell align="right">employee_id</TableCell>
                  <TableCell align="right">employee_name</TableCell>
                  <TableCell align="right">status</TableCell>
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
                    <TableCell align="right">{row.council_name}</TableCell>
                    <TableCell align="right">{row.project}</TableCell>
                    <TableCell align="right">{row.business_unit}</TableCell>
                    <TableCell align="right">{row.rating}</TableCell>
                    <TableCell align="right">{row.employee_id}</TableCell>
                    <TableCell align="right">{row.employee_name}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>

            <div>
           <ExcelFile element={<button>Export</button>}>

                <ExcelSheet data={this.state.todo} name="Employees">
                    <ExcelColumn label="id" value="id"/>
                    <ExcelColumn label="event_id" value="event_id"/>
                    <ExcelColumn label="base_location" value="base_location"/>
                    <ExcelColumn label="council_name" value="council_name"/>
                    <ExcelColumn label="project" value="project"/>
                    <ExcelColumn label="business_unit" value="business_unit"/>
                    <ExcelColumn label="rating" value="rating"/>
                    <ExcelColumn label="employee_id" value="employee_id"/>
                    <ExcelColumn label="employee_name" value="employee_name"/>
                    <ExcelColumn label="status" value="status"/>

                </ExcelSheet>
            </ExcelFile> 
            </div>
          </Grid>

          </Grid>
          </div>
        );
    }
}

export default withStyles(useStyles)(Download)