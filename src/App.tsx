import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "./components/Styles";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Pages from "./pages";
import {ToggleSidebarContext, ToggleSidebarInitState, ToggleSidebarReducer} from "./context/toggleSidebar";
import styled from "styled-components";

const Content = styled(Grid)`
  transition: width 0.3s ease-in-out;
  overflow-y: auto;
`;

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(ToggleSidebarReducer, ToggleSidebarInitState);

  return (
    <Router>
      <ToggleSidebarContext.Provider value={{state, dispatch}}>
      <NavigationBar/>
      <Grid templateColumns={state.show ? "150px calc(100vw - 150px)" : "0px calc(100vw)"} alignItems='start'>
        <Sidebar/>
        <Content width='100%' alignItems='start' padding='20px' backgroundColor='var(--dark-medium-grey)' height='calc(100vh - 60px)'>
          <Switch>
            {Pages.map((page, index) => (
              <Route {...page.routeProps} key={index} />
            ))}
          </Switch>
        </Content>
      </Grid>
      </ToggleSidebarContext.Provider>
    </Router>
  );
};

export default App;
