import React from 'react'
import {useParams} from 'react-router-dom';
import {IPage} from "../index";

const Artist:React.FC = () => {
    let params = useParams();
    return (
        <div>
            Requested Artist: {JSON.stringify(params)}
        </div>
    )
}

const Page: IPage = {
    routeProps: {
        path: '/Artists/:artistId',
        component: Artist,
        
    },
    name: 'Artist',
};

export default Page;