import React from 'react'

const NotFound = () => {
    return (
        <div>
            Not Found
        </div>
    )
}

export default {
    routeProps: {
        path: '/',
        component: NotFound,
        exact: false,
    },
    name: 'NotFound',
};
