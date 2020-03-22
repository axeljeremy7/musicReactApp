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
import {album, songList} from "../../context/MusicPlayer";

const SongRow = styled(Grid)`
  border-bottom-color: rgba(45, 45, 45, 1);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: 4px 0 8px 0;
`;

const Album: React.FC = () => {
    let {albumId} = useParams();

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
                        <Plus color="#66717E" width="24px" height="24px"/>
                    </Grid>
                    <Grid justifyContent="center">
                        <Heart color="#66717E" width="24px" height="24px"/>
                    </Grid>
                    <Grid justifyContent="center">
                        <Option color="#66717E" width="24px" height="24px"/>
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
                {songList.map((item, index) => {
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
