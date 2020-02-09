

import React from 'react'
import {useParams} from 'react-router-dom';
import {IPage} from "../index";

export interface IAlbum {
    id: number,
    img: string,
    name: string,
    songName?: string,
}

const Album:React.FC = () => {
    let params = useParams();
    return (
        <div>
            Requested Album: {JSON.stringify(params)}
        </div>
    )
}

const Page: IPage = {
    routeProps: {
        path: '/Album/:albumId',
        component: Album,
        
    },
    name: 'Album',
};

export default Page;
