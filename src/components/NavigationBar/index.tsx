import React, { useContext } from "react";
import { Grid } from "../Styles";
import Pulse from "../Icons/pulse";
import styled from "styled-components";
import Search from "../Search";
import Upload from "../Icons/upload";
import { ToggleSidebarContext } from "../../context/toggleSidebar";
import { Link } from "react-router-dom";

const TopNavBar = styled(Grid)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const NavigationBar = () => {
  const toggleSidebar = useContext(ToggleSidebarContext);

  return (
    <TopNavBar
      templateColumns="1fr 1fr 1fr"
      backgroundColor="var(--charleston-green-dark)"
      color="white"
      padding="16px 32px 16px 32px"
      height="60px"
    >
      <Grid
        width="32px"
        onClick={() => toggleSidebar.dispatch({ type: "setShow" })}
      >
        <Pulse color="white" />
      </Grid>
      <Grid textAlign="center" fontSize="32px">
        MusicU
      </Grid>
      <Grid
        textAlign="center"
        justifySelf="end"
        templateColumns="auto auto"
        columnGap="16px"
      >
        <Link to="/Upload" style={{width:24, height: 24}}>
          <Upload color="white" width="24px" height="24px" />
        </Link>
        <Search />
      </Grid>
    </TopNavBar>
  );
};

export default NavigationBar;
