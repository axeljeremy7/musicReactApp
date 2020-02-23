import React from "react";
import {IPage} from "../index";

const MusicVenues: React.FC = () => {
  return <div>MusicVenues</div>;
};


const Page: IPage = {
  routeProps: {
    path: "/MusicVenues",
    component: MusicVenues,
    exact: true
  },
  name: "Music Venues"
};

export default Page;