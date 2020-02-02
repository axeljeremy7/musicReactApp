import React from "react";
import {IPage} from "../index";

const DJs: React.FC = () => {
  return <div>DJs</div>;
};

const Page: IPage = {
  routeProps: {
    path: "/DJs",
    component: DJs,
    exact: true
  },
  name: "DJs"
};

export default Page