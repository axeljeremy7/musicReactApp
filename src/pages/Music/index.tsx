import React from 'react';
import {IPage} from '../index';
import {Grid} from "../../components/Styles";
import Slider from "../../components/Slider";
import {albums} from "../../context/MusicPlayer";

const Music: React.FC = () => {
  return (
    <Grid alignItems="start" width="100%" padding="20px">
      <Grid
        fontSize="28px"
        fontWeight="700"
        color="var(--platinum)"
        justifyContent="center"
      >
        Music
      </Grid>
      <Slider
    array={albums}
    title="Top Albums:"
    type='music'
    />
      <Slider
    array={albums}
    title="Featured Albums:"
    type='music'
    />
      <Slider
    array={albums}
    title="Discover Albums:"
    type='music'
    />
      <Slider
    array={albums}
    title="New Albums:"
    type='music'
    />
    </Grid>
  );
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