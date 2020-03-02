import React from "react";
import {IPage} from "../index";
import {Grid} from "../../components/Styles";

const Soundtrack: React.FC = () => {
    return (
        <Grid padding={'20px 32px 0 32px'} color={'var(--platinum)'}>

                        Soundtrack


        </Grid>);
};


const Page: IPage = {
    routeProps: {
        path: "/upload/soundtrack",
        component: Soundtrack,
        exact: true
    },
    name: "Soundtrack"
};

export default Page;