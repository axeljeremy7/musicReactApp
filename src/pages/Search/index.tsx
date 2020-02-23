import React, { useContext } from "react";
import {IPage} from "../index";
import { SearchContext } from "../../context/searchContext";


const Search: React.FC = () => {
 const {state} = useContext(SearchContext)
  
return <div>Search - {JSON.stringify({state})}</div>;
};

const Page: IPage = {
  routeProps: {
    path: "/Search",
    component: Search,
    exact: true
  },
  name: "Search"
};

export default Page;