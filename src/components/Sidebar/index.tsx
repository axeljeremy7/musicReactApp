import React, { useContext } from "react";
import { Grid } from "../Styles";
import { NavLink } from "react-router-dom";
import { sidebarPages as pages } from "../../pages";
import styled from "styled-components";
import Snapchat from "../Icons/snapchat";
import Instagram from "../Icons/instagram";
import Facebook from "../Icons/facebook";
import Twitter from "../Icons/twitter";
import { ToggleSidebarContext } from "../../context/toggleSidebar";

const Column = styled(Grid)`
  a {
    text-decoration: none;
    height: 52px;
  }

  a:hover {
    background-color: var(--japanese-indigo);
    transition: all 0.3s;
  }

  a.no-hover:hover {
    background-color: unset;
  }

  a.activeLink {
    background-color: var(--yellow);
    text-decoration: none;
  }
`;

const Sidebar: React.FC = () => {
  const toggleSidebar = useContext(ToggleSidebarContext);

  return (
    <Column
      width={toggleSidebar.state.show ? "150px" : "0px"}
      height="calc(100vh - 60px)"
      backgroundColor="var(--charleston-green-dark)"
      color="white"
      padding="20px 0 0 0"
      templateRows="repeat(7, 52px) 328px"
      className="sidebar"
    >
      {pages.map((item: any, index: number) => {
        return (
          <NavLink
            key={index}
            to={item.routeProps.path}
            activeClassName="activeLink"
          >
            <Grid className='item-name' color="white" height="52px" padding="10px" fontSize="18px">
              {item.name}
            </Grid>
          </NavLink>
        );
      })}
      <Grid
        templateRows="repeat(5, 48px)"
        rowGap="16px"
        padding="20px 0 20px 0"
      >
        <Grid fontSize="18px" padding="10px" height="48px">
          Follow Us!
        </Grid>
        <Grid justifyContent="center">
          <a className='no-hover' href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <Snapchat color="white" height="44px" width="44px"/>
          </a>
        </Grid>
        <Grid justifyContent="center">
          <a className='no-hover' href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <Instagram color="white" height="44px" width="44px"/>
          </a>
        </Grid>
        <Grid justifyContent="center">
          <a className='no-hover' href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" height="44px" width="44px"/>
          </a>
        </Grid>
        <Grid justifyContent="center">
          <a className='no-hover' href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <Twitter color="white" height="44px" width="44px"/>
          </a>
        </Grid>
      </Grid>
    </Column>
  );
};

export default Sidebar;
