import React from 'react'
import {useParams} from 'react-router-dom';
const Artist = () => {
    let params = useParams();
    return (
        <div>
            Requested Artist: {JSON.stringify(params)}
        </div>
    )
}

export default {
    routeProps: {
        path: '/Artists/:artistId',
        component: Artist,
        
    },
    name: 'Artist',
};

// export default Artist;