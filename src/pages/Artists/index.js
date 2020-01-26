import React from 'react'
import {useRouteMatch, Link} from 'react-router-dom';
import {Grid} from '../../components/Styles';

const Artists = () => {
    let match = useRouteMatch();
    return (
        <Grid>
            Artist
            <Grid>
                <Link to={`${match.url}/5`}>Components</Link>
            </Grid>

        </Grid>
    )
}

export default {
    routeProps: {
        path: '/Artists',
        component: Artists,
        exact: true
        
    },
    name: 'Artists',
};


// {/* <Switch>
//                 <Route path={`${match.path}/:artistId`} exact>
//                 <SingleArtist />
//                 </Route>
//                 <Route path={match.path}>
//                 <h3>Please select a topic.</h3>
//                 </Route>
//             </Switch> */}