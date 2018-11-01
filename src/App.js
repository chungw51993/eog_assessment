import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Router from "./Router";

import { ConnectedRouter } from 'react-router-redux';

const history = createHistory();
const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});


const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Wrapper>
          <Navigation />
          <Header />
          <Route component={Router} />
          <ToastContainer />
        </Wrapper>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

export default App;
