import React from 'react'
import {useRouteMatch, Link} from 'react-router-dom';
import {Grid} from '../../components/Styles';

const Artists = () => {
    let match = useRouteMatch();
    return (
        <Grid>
            <Grid>
            Artist - {JSON.stringify(match)}
            </Grid>
            <Grid>
                <Link to={`${match.url}/5`}>ID5</Link>
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