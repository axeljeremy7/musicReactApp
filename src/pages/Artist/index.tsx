import React from "react";
import { useParams } from "react-router-dom";
import { IPage } from "../index";
import { Grid, Image } from "../../components/Styles";

export interface IArtist {
  id: number;
  img: string;
  name: string;
}

// Requested Artist: {JSON.stringify(params)}
// let params = useParams();
let bgImageUrl =
  "url(https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/09/post-malone-saint-tropez-music-video@2000x1270.jpg);";
let artistImageUrl =
  "https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg";

let artist = {
  id: 1,
  backgroundImage:
    "https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/09/post-malone-saint-tropez-music-video@2000x1270.jpg",
  image: "https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg",
  name: "Post Malone",
  place: "Seanhaven, OR",
  country: "US",
  genre: "Pop"
};
const Artist: React.FC = () => {
  return (
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
        color='white'
        alignItems='flex-start'
      >
        <Grid templateColumns="200px" templateRows="200px 40px">
          <Image
            width="200px"
            height="200px"
            borderRadius="50%"
            src={artist.image}
            alt="artist image in circle"
          />
        </Grid>
        <Grid padding='56px 0 0 0'>
          <Grid>{artist.name}</Grid>
          <Grid>{artist.place}</Grid>
          <Grid>{artist.country}</Grid>
          <Grid>{artist.genre}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Page: IPage = {
  routeProps: {
    path: "/Artists/:artistId",
    component: Artist
  },
  name: "Artist"
};

export default Page;
