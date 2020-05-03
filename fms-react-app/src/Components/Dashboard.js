import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Stats from '../Components/statistics';


const useStyles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        marginTop: theme.spacing(5),
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        
      },
      gridFirst: {
        backgroundColor: '#ef5350'
      },
      gridSecond: {
        backgroundColor: '#ffa726'
      },
      gridThird: {
        backgroundColor: '#c51162'
      },
      gridFour: {
        backgroundColor: '#616161'
      },
      action: {
        marginLeft:160
      },
      cardAction: {
        backgroundColor:'grey'
      }
  });
  
 class Dashboard extends Component {
   constructor(props) {
     super(props)
     this.state = {
       isButtonSubmit: false
     }
     this.SubmitStats =this.SubmitStats.bind(this);
   }
   SubmitStats(event) {
    event.preventDefault();
    this.setState({isButtonSubmit : true})
  }
     render() {
        const {classes} =this.props;
       return(
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className= {classNames(classes.paper, classes.gridFirst)}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                  TotalEvents
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <b>8</b>
                  </Typography>
                </Grid>
                <CardActions className= {classes.action}>
                  <Button className={classes.cardAction} size="small" onClick={this.SubmitStats}>view details</Button>
                   </CardActions>
            </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className= {classNames(classes.paper, classes.gridSecond)}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                  Lives Impacted
                  </Typography>
                  {/* <Typography variant="body2" gutterBottom>
                    Lives Impacted
                  </Typography> */}
                  <Typography variant="body2" color="textSecondary">
                    <b>877</b>
                  </Typography>
                </Grid>
                <CardActions className= {classes.action}>
                  <Button className={classes.cardAction} size="small" onClick={this.SubmitStats}>view details</Button>
                   </CardActions>
              </Grid>
            </Grid>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className= {classNames(classes.paper, classes.gridThird)}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                   Total Voluntiers
                  </Typography>
                  {/* <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography> */}
                  <Typography variant="body2" color="textSecondary">
                    <b>45</b>
                  </Typography>
                </Grid>
                <CardActions className= {classes.action}>
                  <Button className={classes.cardAction} size="small" onClick={this.SubmitStats}>view details</Button>
                   </CardActions>
              </Grid>
            </Grid>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className= {classNames(classes.paper, classes.gridFour)}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Total Participants
                  </Typography>
                  {/* <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography> */}
                  <Typography variant="body2" color="textSecondary">
                    <b>45</b>
                  </Typography>
                </Grid>
                <CardActions className= {classes.action}>
                  <Button className={classes.cardAction} size="small" onClick={this.SubmitStats}>view details</Button>
                   </CardActions>
              </Grid>
            </Grid>
            </Paper>
          </Grid>
        </Grid>
        {this.state.isButtonSubmit && <Stats/>}
      </div>
         );
     }
 }

 export default withStyles(useStyles)(Dashboard);
