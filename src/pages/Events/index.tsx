import React from 'react'
import {IPage} from '../index';

const Events: React.FC = () => {
    return (
        <div>
            Events
        </div>
    )
};

const Page: IPage =   {
    routeProps: {
        path: '/Events',
        component: Events,
        exact: true,
    },
    name: 'Events',
};

export default Page