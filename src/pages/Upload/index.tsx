import React from "react";
import {IPage} from "../index";

const Upload: React.FC = () => {
  return <div>Upload</div>;
};


const Page: IPage = {
  routeProps: {
    path: "/Upload",
    component: Upload,
    exact: true
  },
  name: "Upload"
};

export default Page;