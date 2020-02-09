import React from 'react';
import {IPage} from '../index';
import {IAlbum} from '../Album';
import {Grid} from "../../components/Styles";
import Slider from "../../components/Slider";

const AlbumArray: Array<IAlbum> = [
  {
    id: 1,
    img: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
    name: "Red Pill Blues"
  },
  {
    id: 2,
    img: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
    name: "Overexposed"
  },
  {
    id: 3,
    img:
      "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
    name: "ASTROWORLD"
  },
  {
    id: 4,
    img:
      "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
    name: "Beauty behind the madness"
  },
  {
    id: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
    name: "No.6 Collaboration Project"
  },
  {
    id: 6,
    img:
      "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
    name: "V"
  },
  {
    id: 7,
    img:
      "https://i.pinimg.com/originals/1b/fb/be/1bfbbe210fc438c8a13c092fdb2fcd76.jpg",
    name: "Huncho Jack"
  },
  {
    id: 8,
    img: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    name: "Starboy"
  },
  {
    id: 21,
    img: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
    name: "2Red Pill Blues"
  },
  {
    id: 22,
    img: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
    name: "2Overexposed"
  },
  {
    id: 23,
    img:
      "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
    name: "2ASTROWORLD"
  },
  {
    id: 24,
    img:
      "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
    name: "2Beauty behind the madness"
  },
  {
    id: 25,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
    name: "2No.6 Collaboration Project"
  },
  {
    id: 26,
    img:
      "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
    name: "2V"
  },
  {
    id: 27,
    img:
      "https://i.pinimg.com/originals/1b/fb/be/1bfbbe210fc438c8a13c092fdb2fcd76.jpg",
    name: "2Huncho Jack"
  },
  {
    id: 28,
    img: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    name: "2Starboy"
  },
  {
    id: 31,
    img: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
    name: "3Red Pill Blues"
  },
  {
    id: 32,
    img: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
    name: "3Overexposed"
  },
  {
    id: 33,
    img:
      "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
    name: "3ASTROWORLD"
  },
  {
    id: 34,
    img:
      "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
    name: "3Beauty behind the madness"
  },
  {
    id: 35,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
    name: "3No.6 Collaboration Project"
  },
  {
    id: 36,
    img:
      "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
    name: "3V"
  },
  {
    id: 37,
    img:
      "https://i.pinimg.com/originals/1b/fb/be/1bfbbe210fc438c8a13c092fdb2fcd76.jpg",
    name: "3Huncho Jack"
  },
  {
    id: 38,
    img: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    name: "3Starboy"
  },
];

const Music: React.FC = () => {
  return (
    <Grid alignItems="start" width="100%">
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