import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "./components/Styles";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Pages from "./pages";
import {ToggleSidebarContext, ToggleSidebarInitState, ToggleSidebarReducer} from "./context/toggleSidebar";


const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(ToggleSidebarReducer, ToggleSidebarInitState);

  return (
    <Router>
      <ToggleSidebarContext.Provider value={{state, dispatch}}>
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
      </ToggleSidebarContext.Provider>
    </Router>
  );
};

export default App;
