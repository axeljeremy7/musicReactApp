import React from "react";
import {IPage} from '../index';

const Login: React.FC = () => {
  return <div>Login</div>;
};

const Page: IPage = {
  routeProps: {
    path: "/login",
    component: Login,
    exact: true
  },
  name: "Login"
};

export default Page;
