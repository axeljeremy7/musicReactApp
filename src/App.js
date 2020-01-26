import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Grid} from "./components/Styles";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import pages from "./pages";

function App() {
  return (
    <Router>
        <NavigationBar></NavigationBar>
        <Grid templateColumns='150px auto'>
        <Sidebar></Sidebar>
        <Grid>
          <Switch>
          { pages.map((page, index) => (<Route {...page.routeProps} key={index} />)) }
          </Switch>    
        </Grid>
        </Grid>
    </Router>
  );
}

export default App;
