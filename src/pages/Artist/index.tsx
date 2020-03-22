import React from "react";
import { IPage } from "../index";
import { Grid, Image } from "../../components/Styles";
import Heart from "../../components/Icons/Heart";
import Share from "../../components/Icons/Share";
import AlbumSlider from "../../components/AlbumSlider";
import {artist, songList} from "../../context/MusicPlayer";

const Artist: React.FC = () => {
  return (
    <Grid>
      <Grid
        backgroundImage={`url(${artist.backgroundImage})`}
        height="500px"
        className="background-fit"
      >
        <Grid
          templateColumns="200px auto"
          columnGap="16px"
          backgroundColor="transparent"
          padding="0 0 0 100px"
          color="white"
          alignItems="flex-start"
        >
          <Grid templateColumns="200px" templateRows="200px 40px">
            <Image
              width="200px"
              height="200px"
              borderRadius="50%"
              src={artist.img}
              alt="artist image in circle"
            />
            <Grid
              templateColumns="24px 24px"
              columnGap="16px"
              justifyContent="center"
            >
              <Grid
                justifyContent="center"
                onClick={() => {
                  console.log("Heart");
                }}
              >
                <Heart color="#e3e1e1" width="24px" height="24px" />
              </Grid>
              <Grid
                justifyContent="center"
                onClick={() => {
                  console.log("Share");
                }}
              >
                <Share color="#e3e1e1" width="24px" height="24px" />
              </Grid>
            </Grid>
          </Grid>
          <Grid padding="56px 0 0 0">
            <Grid>{artist.name}</Grid>
            <Grid>{artist.place}</Grid>
            <Grid>{artist.country}</Grid>
            <Grid>{artist.genre}</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid padding='0 8px 0 8px'>
        <AlbumSlider
          array={songList}
          numOfElements={9}
          title="Top Songs"
          type="SONG"
        />
      </Grid>
    </Grid>
  );
};

const Page: IPage = {
  routeProps: {
    path: "/Artists/:artistId",
    component: Artist,
    exact: true
  },
  name: "Artist"
};

export default Page;
