import React from "react";
import { IPage } from "../index";

const Library: React.FC = () => {
  return <div>Library</div>;
};

const Page: IPage = {
  routeProps: {
    path: "/Library",
    component: Library,
    exact: true
  },
  name: "Library"
};

export default Page;
