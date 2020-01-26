import React from 'react'

const DJs = () => {
    return (
        <div>
            DJs
        </div>
    )
}

export default {
    routeProps: {
        path: '/DJs',
        component: DJs,
        exact: true,
    },
    name: 'DJs',
};
