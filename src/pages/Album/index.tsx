import React from "react";
import {useParams} from "react-router-dom";
import {IPage} from "../index";
import {Grid, Image} from "../../components/Styles";
import Plus from "../../components/Icons/Plus";
import Heart from "../../components/Icons/Heart";
import Option from "../../components/Icons/Option";
import Play from "../../components/Icons/Play";
import Play2 from "../../components/Icons/Play2";
import Shuffle from "../../components/Icons/Shuffle";
import Star from "../../components/Icons/Star";
import Explicit from "../../components/Icons/Explicit";
import styled from "styled-components";

const SongRow = styled(Grid)`
  border-bottom-color: rgba(45, 45, 45, 1);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: 4px 0 8px 0;
`;

export interface IAlbum {
    id: number | string | undefined;
    name: string;
    artistName?: string;
    genre: string;
    year: string;
    numberOfSongs: number;
    image: string;
}

export interface ISong {
    id: number | string | undefined;
    num: number;
    name: string;
    explicit: boolean;
    star: boolean;
    length: string;
    album: IAlbum;
    img: string;
    src: string;
}

let albumObject: IAlbum = {
    id: 1,
    name: "Beerbongs & Bentleys",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
    image:
        "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg"
};

export const songs: Array<ISong> = [
    {
        id: 1,
        num: 1,
        name: "Paranoid",
        explicit: false,
        star: false,
        length: "3:44",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Paranoid%20%28Lyrics%29.mp3',
    },
    {
        id: 2,
        num: 2,
        name: "Spoil My Night",
        explicit: true,
        star: false,
        length: "3:54",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Spoil%20My%20Night%20%28Lyrics%29.mp3',
    },
    {
        id: 3,
        num: 3,
        name: "Rich & Sad",
        explicit: true,
        star: true,
        length: "3:14",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Rich%20%26%20Sad.mp3',
    },
    {
        id: 4,
        num: 4,
        name: "Zack and Codeine",
        explicit: true,
        star: false,
        length: "3:23",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Zack%20And%20Codeine.mp3',
    },
    {
        id: 5,
        num: 5,
        name: "Takin' Shots",
        explicit: true,
        star: true,
        length: "3:37",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Takin%27%20Shots.mp3',
    },
    {
        id: 6,
        num: 6,
        name: "Rockstar (feat. 21 Savage)",
        explicit: true,
        star: true,
        length: "3:39",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20%28Official%20Audio%29.mp3',
    },
    {
        id: 7,
        num: 7,
        name: "Over Now",
        explicit: true,
        star: true,
        length: "4:07",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Over%20Now.mp3',
    },
    {
        id: 8,
        num: 8,
        name: "Psycho (feat. Ty Dolla Sign)",
        explicit: true,
        star: true,
        length: "3:41",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Psycho%20%28Lyrics%29%20ft.%20Ty%20Dolla%20%24ign.mp3',
    },
    {
        id: 9,
        num: 9,
        name: "Better Now",
        explicit: true,
        star: true,
        length: "3:50",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Better%20Now.mp3',
    },
    {
        id: 10,
        num: 10,
        name: "Ball for Me (feat. Nicki Minaj)",
        explicit: true,
        star: true,
        length: "3:27",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Ball%20For%20Me%20Ft.%20Nicki%20Minaj%20%28beerbongs%20%26%20bentleys%29.mp3',
    },
    {
        id: 11,
        num: 11,
        name: "Otherside",
        explicit: true,
        star: false,
        length: "3:48",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Otherside.mp3',
    },
    {
        id: 12,
        num: 12,
        name: "Stay",
        explicit: true,
        star: false,
        length: "3:28",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/199705246Stay.mp3',
    },
    {
        id: 13,
        num: 13,
        name: "Blame It on Me",
        explicit: true,
        star: false,
        length: "4:24",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Blame%20It%20On%20Me.mp3',
    },
    {
        id: 14,
        num: 14,
        name: "Same Bitches (feat. G-Eazy and YG)",
        explicit: true,
        star: false,
        length: "3:31",
        album: albumObject,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Same%20Bitches.mp3',
    }
];

const Album: React.FC = () => {
    let {albumId} = useParams();
    let album: IAlbum = {
        id: albumId,
        name: "Beerbongs & Bentleys",
        artistName: "Post Malone",
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
                <Image src={album.image} height="350px" width="350px"/>
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
                    {album.name}
                </Grid>
                <Grid fontSize="32px" color="var(--platinum)" lineHeight="40px">
                    {album.artistName}
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
                        <Play color="#66717E" height="32px" width="32px"/>
                    </Grid>
                    <Grid>
                        <Shuffle color="#66717E" height="28px" width="28px"/>
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
                                <Play2 color="#66717E" height="16px" width="16px"/>
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

                                {item.star && (
                                    <Grid>
                                        <Star color="#66717E" width="8px" height="8px"/>
                                    </Grid>
                                )}

                                {item.explicit && (
                                    <Grid>
                                        <Explicit color="#66717E" width="8px" height="8px"/>
                                    </Grid>
                                )}
                            </Grid>
                            <Grid color="white" fontSize="12px">
                                {item.length}
                            </Grid>
                            <Grid>
                                <Heart color="#66717E" width="16px" height="16px"/>
                            </Grid>
                            <Grid>
                                <Plus color="#66717E" width="16px" height="16px"/>
                            </Grid>
                            <Grid>
                                <Option color="#66717E" width="16px" height="16px"/>
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
