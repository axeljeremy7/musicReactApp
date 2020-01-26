import React from 'react'

const Events = () => {
    return (
        <div>
            Events
        </div>
    )
}

export default {
    routeProps: {
        path: '/Events',
        component: Events,
        exact: true,
    },
    name: 'Events',
};