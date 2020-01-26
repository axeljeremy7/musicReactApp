import React from 'react'

const Music = () => {
    return (
        <div>
            Music
        </div>
    )
}

export default {
    routeProps: {
        path: '/Music',
        component: Music,
        exact: true,
    },
    name: 'Music',
};