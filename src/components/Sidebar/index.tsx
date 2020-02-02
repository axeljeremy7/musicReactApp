import React, { useContext } from 'react'
import {Grid} from "../Styles";
import { NavLink } from "react-router-dom";
import {sidebarPages as pages} from "../../pages";
import styled from "styled-components";
import Snapchat from "../Icons/snapchat";
import Instagram from '../Icons/instagram';
import Facebook from '../Icons/facebook';
import Twitter from '../Icons/twitter';
import {ToggleSidebarContext} from "../../context/toggleSidebar";

const Column = styled(Grid)`
    transition: all 0.3s;
    
    a {
        text-decoration: none;
        height: 52px;
    }

    a:hover {
        background-color: var(--japanese-indigo);
        transition: all 0.3s;
    }

    a.activeLink {
        background-color: var(--yellow);
        text-decoration: none;
    }

`;

const Sidebar:React.FC = () => {
    const toggleSidebar = useContext(ToggleSidebarContext)
    
    return (
        <Column id='#sidebar' 
            width={toggleSidebar.state.show === false ? '150px' : '0px'}
            height='calc(100vh - 60px)' backgroundColor='var(--custom-black)' color='white' padding='20px 0 0 0' templateRows='repeat(7, 52px) 328px'>
            {pages.map((item : any, index: number) => 
                {
                    return (<NavLink key={index} to={item.routeProps.path} activeClassName='activeLink'>
                                <Grid color='white' height='52px' padding='10px' fontSize='18px'>{item.name}</Grid>
                        </NavLink>)
                })
            }
            <Grid templateRows='repeat(5, 48px)' rowGap='16px' padding='20px 0 20px 0'>
                <Grid fontSize='18px' padding='10px' height='48px'>Follow Us!</Grid>
                <Grid justifyContent='center'>
                    <Snapchat color='white' height='44px' width='44px'></Snapchat>
                </Grid>
                <Grid justifyContent='center'>
                    <Instagram color='white' height='44px' width='44px'></Instagram>
                </Grid>
                <Grid justifyContent='center'>
                    <Facebook color='white' height='44px' width='44px'></Facebook>
                </Grid>
                <Grid justifyContent='center'>
                    <Twitter color='white' height='44px' width='44px'></Twitter>
                </Grid>

            </Grid>
           
        </Column>
    )
}

export default Sidebar