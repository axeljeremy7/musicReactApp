import React from 'react'
import {Grid} from "../Styles";
import { NavLink } from "react-router-dom";
import {sidebarPages as pages} from "../../pages";
import styled from "styled-components";
import Snapchat from "../Icons/snapchat";

const Column = styled(Grid)`
    a.activeLink {
        background-color: var(--yellow);
    }
`;

const Sidebar:React.FC = () => {
    return (
        <Column width='150px' backgroundColor='var(--custom-black)'>
            {pages.map((item : any, index: number) => 
                {
                    return (<NavLink key={index} to={item.routeProps.path} activeClassName='activeLink'>
                                <Grid>{item.name}</Grid>
                        </NavLink>)
                })
            }
            <Grid>Follow Us!</Grid>
            <Grid>
                <Snapchat color='white'></Snapchat>
            </Grid>
            <Grid>Follow Us!</Grid>
            <Grid>Follow Us!</Grid>
            <Grid>Follow Us!</Grid>

            <Grid>Logout</Grid>
        </Column>
    )
}

export default Sidebar