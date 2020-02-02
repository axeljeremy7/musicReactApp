import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "./components/Styles";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Pages from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Grid templateColumns="150px auto">
        <Sidebar></Sidebar>
        <Grid>
          <Switch>
            {Pages.map((page, index) => (
              <Route {...page.routeProps} key={index} />
            ))}
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
