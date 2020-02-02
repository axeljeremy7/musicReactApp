import React from "react";
import {IPage} from "../index";

const NotFound: React.FC = () => {
  return <div>Not Found</div>;
};

const Page: IPage = {
  routeProps: {
    path: "/",
    component: NotFound
  },
  name: "NotFound"
};

export default Page;