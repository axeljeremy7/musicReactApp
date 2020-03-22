import React from "react";
import { Grid } from "../../components/Styles";
import { IPage } from "../index";
import Slider from "../../components/Slider";
import {artists} from "../../context/MusicPlayer";

const Artists: React.FC = () => {
  return (
    <Grid alignItems="start" width="100%" padding="20px">
      <Grid
        fontSize="28px"
        fontWeight="700"
        color="var(--platinum)"
        justifyContent="center"
      >
        Artists
      </Grid>
      <Slider
    array={artists}
    title="Top Artists:"
    borderRadius="50%"
    />
      <Slider
    array={artists}
    title="Featured Artists:"
    borderRadius="50%"
    />
      <Slider
    array={artists}
    title="Discover Artists:"
    borderRadius="50%"
    />
      <Slider
    array={artists}
    title="New Artists:"
    borderRadius="50%"
    />
    </Grid>
  );
};

const Page: IPage = {
  routeProps: {
    path: "/Artists",
    component: Artists,
    exact: true
  },
  name: "Artists"
};

export default Page;

// let match = useRouteMatch();
// {/* <Grid>
//             match => {JSON.stringify(match)}
//             </Grid>
//             <Grid>
//                 <Link to={`${match.url}/5`}>ID5</Link>
//             </Grid> */}
