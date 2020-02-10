import React from "react";
import { useParams } from "react-router-dom";
import { IPage } from "../index";
import { Grid, Image } from "../../components/Styles";
import Plus from "../../components/Icons/Plus";
import Heart from "../../components/Icons/Heart";
import Option from "../../components/Icons/Option";
import Play from "../../components/Icons/Play";
import Play2 from "../../components/Icons/Play2";
import Shuffle from "../../components/Icons/Shuffle";
import Star from "../../components/Icons/Star";
import Explicit from "../../components/Icons/Explicit";
import styled from 'styled-components';

const SongRow = styled(Grid)`
  border-bottom-color: rgba(45, 45, 45, 1);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: 4px 0 8px 0;
`;

export interface IAlbum {
  id: number;
  img: string;
  name: string;
  songName?: string;
}

export interface ISong {
  id: number;
  num: number;
  name: string;
  explicit: boolean;
  star: boolean;
  length: string;
}

const songs: Array<ISong> = [
  {
    id: 1,
    num: 1,
    name: "Paranoid",
    explicit: false,
    star: false,
    length: "3:44"
  },
  {
    id: 2,
    num: 2,
    name: "Spoil My Night",
    explicit: true,
    star: false,
    length: "3:54"
  },
  {
    id: 3,
    num: 3,
    name: "Rich & Sad",
    explicit: true,
    star: true,
    length: "3:14"
  },
  {
    id: 4,
    num: 4,
    name: 'Zack and Codeine',
    explicit: true,
    star: false,
    length: "3:23"
  },
  {
    id: 5,
    num: 5,
    name: "Takin' Shots",
    explicit: true,
    star: true,
    length: "3:37"
  },
  {
    id: 6,
    num: 6,
    name: "Rockstar (feat. 21 Savage)",
    explicit: true,
    star: true,
    length: "3:39"
  },
  {
    id: 7,
    num: 7,
    name: "Over Now",
    explicit: true,
    star: true,
    length: "4:07"
  },
  {
    id: 8,
    num: 8,
    name: "Psycho (feat. Ty Dolla Sign)",
    explicit: true,
    star: true,
    length: "3:41"
  },
  {
    id: 9,
    num: 9,
    name: "Better Now",
    explicit: true,
    star: true,
    length: "3:50"
  },
  {
    id: 10,
    num: 10,
    name: "Ball for Me (feat. Nicki Minaj)",
    explicit: true,
    star: true,
    length: "3:27"
  },
  {
    id: 11,
    num: 11,
    name: "Otherside",
    explicit: true,
    star: false,
    length: "3:48"
  },
  {
    id: 12,
    num: 12,
    name: "Stay",
    explicit: true,
    star: false,
    length: "3:28"
  },
  {
    id: 13,
    num: 13,
    name: "Blame It on Me",
    explicit: true,
    star: false,
    length: "4:24"
  },
  {
    id: 14,
    num: 14,
    name: "Same Bitches (feat. G-Eazy and YG)",
    explicit: true,
    star: false,
    length: "3:31"
  }
];

const Album: React.FC = () => {
  let { albumId } = useParams();
  let album = {
    albumId: albumId,
    albumName: "Beerbongs & Bentleys",
    artist: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
    image:
      "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg"
  };
  return (
    <Grid
      templateColumns="350px auto"
      columnGap="20px"
      padding="20px"
      alignItems="flex-start"
    >
      <Grid>
        <Image src={album.image} height="350px" width="350px" />
        <Grid
          justifyContent="center"
          templateColumns="auto auto auto"
          columnGap="16px"
          margin="16px 0 0 0"
        >
          <Grid justifyContent="center">
            <Plus color="#66717E" width="24px" height="24px"></Plus>
          </Grid>
          <Grid justifyContent="center">
            <Heart color="#66717E" width="24px" height="24px"></Heart>
          </Grid>
          <Grid justifyContent="center">
            <Option color="#66717E" width="24px" height="24px"></Option>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        templateColumns="auto"
        templateRows="44px 40px 24px 32px auto"
        rowGap="8px"
      >
        <Grid fontSize="36px" lineHeight="44px" color="var(--platinum)">
          {album.albumName}
        </Grid>
        <Grid fontSize="32px" color="var(--platinum)" lineHeight="40px">
          {album.artist}
        </Grid>
        <Grid fontSize="16px" color="var(--platinum)" lineHeight="24px">
          {album.genre} · {album.year} · {album.numberOfSongs} songs
        </Grid>
        <Grid
          templateColumns="auto auto"
          columnGap="16px"
          justifyContent="flex-start"
        >
          <Grid>
            <Play color="#66717E" height="32px" width="32px" />
          </Grid>
          <Grid>
            <Shuffle color="#66717E" height="28px" width="28px" />
          </Grid>
        </Grid>
        {songs.map((item: ISong, index: number) => {
          return (
            <SongRow
              key={index}
              templateColumns="16px 16px auto 28px 16px 16px 16px"
              columnGap="12px"
              rowGap="12px"
            >
              <Grid>
                <Play2 color="#66717E" height="16px" width="16px" />
              </Grid>
              <Grid color="white" fontSize="12px">
                {item.num}
              </Grid>
              <Grid
                templateColumns="auto auto auto"
                justifyContent="flex-start"
                columnGap="8px"
              >
                <Grid color="white" fontSize="16px">
                  {item.name}
                </Grid>
                <Grid>
                  {item.star && (
                    <Star color="#66717E" width="8px" height="8px" />
                  )}
                </Grid>
                <Grid>
                  {item.explicit && (
                    <Explicit color="#66717E" width="8px" height="8px" />
                  )}
                </Grid>
              </Grid>
              <Grid color="white" fontSize="12px">
                {item.length}
              </Grid>
              <Grid>
                <Heart color="#66717E" width="16px" height="16px" />
              </Grid>
              <Grid>
                <Plus color="#66717E" width="16px" height="16px" />
              </Grid>
              <Grid>
                <Option color="#66717E" width="16px" height="16px" />
              </Grid>
            </SongRow>
          );
        })}
      </Grid>
    </Grid>
  );
};

const Page: IPage = {
  routeProps: {
    path: "/Album/:albumId",
    component: Album
  },
  name: "Album"
};

export default Page;
