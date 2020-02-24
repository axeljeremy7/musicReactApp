import React, {useReducer} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Grid } from "./components/Styles";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Pages from "./pages";
import {
  ToggleSidebarContext,
  ToggleSidebarInitState,
  ToggleSidebarReducer
} from "./context/toggleSidebar";
import styled from "styled-components";
import { SearchContext, SearchReducer, SearchInitialState } from "./context/searchContext";
// import Login from './pages/Login';

const Content = styled(Grid)`
  transition: width 0.3s ease-in-out;
  overflow-y: auto;
`;

const App: React.FC = () => {
  const toggleSidebarUseReducer = useReducer(
    ToggleSidebarReducer,
    ToggleSidebarInitState
  );

  const searchUseReducer = useReducer(SearchReducer, SearchInitialState);

  // if(localStorage.getItem('token')){
  //   return (
  //     <Router>
  //       <Route {...Login.routeProps} />
  //       <Switch>
  //             <Redirect from="/" to="/login"/>
  //             <Route {...Login.routeProps} />
  //           </Switch>
  //     </Router>
  //   );
  // }

  return (
    <Router>
      <SearchContext.Provider value={{state: searchUseReducer[0], dispatch: searchUseReducer[1]}}>
        <ToggleSidebarContext.Provider value={{ state: toggleSidebarUseReducer[0], dispatch: toggleSidebarUseReducer[1] }}>
          <NavigationBar />
          <Grid
            templateColumns={
              toggleSidebarUseReducer[0].show ? "150px calc(100vw - 150px)" : "0px calc(100vw)"
            }
            alignItems="start"
          >
            <Sidebar />
            <Content
              width="100%"
              alignItems="start"
              backgroundColor="var(--dark-medium-grey)"
              height="calc(100vh - 60px)"
            >
              <Switch>
                <Redirect from="/" to="/Music" exact />
                {Pages.map((page, index) => (
                  <Route {...page.routeProps} key={index} />
                ))}
              </Switch>
            </Content>
          </Grid>
        </ToggleSidebarContext.Provider>
      </SearchContext.Provider>
    </Router>
  );
};

export default App;
