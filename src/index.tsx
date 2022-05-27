import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import './index.css';
import App from './App';
import { store } from './app/store';

import reportWebVitals from './reportWebVitals';
import { COLORS } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primaryColor,
    },
    secondary: {
      main: COLORS.secondaryColor,
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
