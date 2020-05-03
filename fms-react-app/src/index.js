 import React from 'react'
 import ReactDOM from 'react-dom'
 import App from './App'
import { createMuiTheme } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core'

 const theme = createMuiTheme();
 ReactDOM.render(
 <ThemeProvider theme={theme}><App/></ThemeProvider>,
 document.getElementById('root')
);

// ReactDOM.render(
//     <App/>,
//      document.getElementById('root')
//      );