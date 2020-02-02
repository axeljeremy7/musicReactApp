import React from "react";
import {IPage} from "../index";

const Home: React.FC = () => {
  return <div>Home</div>;
};

const Page: IPage = {
  routeProps: {
    path: "/Home",
    component: Home,
    exact: true
  },
  name: "Home"
};

export default Page