import React from 'react'
import {useParams} from 'react-router-dom';
const Artist = () => {
    let params = useParams();
    return (
        <div>
            Requested Artist ID: {JSON.stringify(params)}
        </div>
    )
}

export default {
    routeProps: {
        path: '/Artists/:artistId',
        component: Artist,
        exact: true
        
    },
    name: 'Artist',
};