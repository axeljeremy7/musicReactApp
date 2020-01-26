import React from 'react'
import {Grid} from "../../components/Styles"
import { NavLink } from "react-router-dom";
import pages from "../../pages";

// const list = ['Home', 'Artist', 'Music', 'Events', 'College', 'Music Venues', "DJ's", 'Library'];

const Sidebar = () => {
    return (
        <Grid width='150px' backgroundColor='black'>
            {pages.map((item, index) => 
                {
                    return <NavLink key={index} to={item.routeProps.path} activeClassName='activeLink'><Grid >{item.name}</Grid></NavLink>
                    
                })
            }
        </Grid>
    )
}

export default Sidebar