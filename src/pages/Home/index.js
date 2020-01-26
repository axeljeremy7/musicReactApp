import React from 'react'

const Home = () => {
    return (
        <div>
            Home
        </div>
    )
}

export default {
    routeProps: {
        path: '/Home',
        component: Home,
        exact: true,
    },
    name: 'Home',
};