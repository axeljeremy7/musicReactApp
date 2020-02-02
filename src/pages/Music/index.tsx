import React from "react";
import {IPage} from "../index";

const Music: React.FC = () => {
  return <div>Music</div>;
};

const Page: IPage = {
  routeProps: {
    path: "/Music",
    component: Music,
    exact: true
  },
  name: "Music"
};

export default Page;