import React from 'react'

const Library = () => {
    return (
        <div>
            Library
        </div>
    )
}

export default {
    routeProps: {
        path: '/Library',
        component: Library,
        exact: true,
    },
    name: 'Library',
};