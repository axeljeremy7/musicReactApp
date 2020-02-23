import React from 'react';
import {IPage} from '../index';
import {IAlbum} from '../Album';
import {Grid} from "../../components/Styles";
import Slider from "../../components/Slider";

const AlbumArray: Array<IAlbum> = [
  {
    id: 1,
    image: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
    name: "Red Pill Blues",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 2,
    image: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
    name: "Overexposed",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 3,
    image:
      "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
    name: "ASTROWORLD",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
    name: "Beauty behind the madness",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
    name: "No.6 Collaboration Project",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 6,
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
    name: "V",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 7,
    image:
      "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
    name: "Beerbongs & Bentleys",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 8,
    image: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    name: "Starboy",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 21,
    image: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
    name: "2Red Pill Blues",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 22,
    image: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
    name: "2Overexposed",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 23,
    image:
      "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
    name: "2ASTROWORLD",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 24,
    image:
      "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
    name: "2Beauty behind the madness",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
    name: "2No.6 Collaboration Project",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 26,
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
    name: "2V",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 27,
    image:
      "https://i.pinimg.com/originals/1b/fb/be/1bfbbe210fc438c8a13c092fdb2fcd76.jpg",
    name: "2Huncho Jack",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 28,
    image: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    name: "2Starboy",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 31,
    image: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
    name: "3Red Pill Blues",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 32,
    image: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
    name: "3Overexposed",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 33,
    image:
      "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
    name: "3ASTROWORLD",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 34,
    image:
      "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
    name: "3Beauty behind the madness",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 35,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
    name: "3No.6 Collaboration Project",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 36,
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
    name: "3V",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 37,
    image:
      "https://i.pinimg.com/originals/1b/fb/be/1bfbbe210fc438c8a13c092fdb2fcd76.jpg",
    name: "3Huncho Jack",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
  {
    id: 38,
    image: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    name: "3Starboy",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
  },
];

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
        array={AlbumArray}
        title="Top Albums:"
        type='music'
      ></Slider>
      <Slider
        array={AlbumArray}
        title="Featured Albums:"
        type='music'
      ></Slider>
      <Slider
        array={AlbumArray}
        title="Discover Albums:"
        type='music'
      ></Slider>
      <Slider
        array={AlbumArray}
        title="New Albums:"
        type='music'
      ></Slider>
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