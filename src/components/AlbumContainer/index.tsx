import React, {useEffect, useState} from "react";
import {Grid, Image} from "../Styles";
import Star from "../Icons/Star";
import Explicit from "../Icons/Explicit";
import {ISong, songList} from "../../context/MusicPlayer";

export interface IAlbumContainer
{
    albumImage: string;
    songName: string;
    star: boolean;
    explicit: boolean;
    albumName: string;
    borderRadius: string;
    songId?: number;
}


const AlbumContainer: React.FC<IAlbumContainer> = ({albumImage, songName, star, explicit, albumName, borderRadius, songId}) => {
    const [songPlaying, setSongPlaying] = useState<undefined|ISong>(undefined);
    useEffect(() => {
        const abortController = new AbortController();

        if(songId){
            console.log({songId});
            const song = songList.find(item => item.id === songId + 1);
            setSongPlaying(song);
        }
        return () => {
           abortController.abort()
        };
    }, [songId, albumName]);

    return (
        <Grid
            templateColumns="50px auto 24px 24px"
            columnGap="8px"
        >
            <Image
                width={"50px"}
                height={"50px"}
                src={songId ? songPlaying?.album.image : albumImage}
                borderRadius={borderRadius}
                className="show"
            />
            <Grid
                cursor="pointer"
                color="var(--platinum)"
                justifyContent="flex-start"
                templateRows='26px 20px'
                rowGap='4px'
            >
                <Grid
                    templateColumns="auto auto auto"
                    justifyContent="flex-start"
                    columnGap="8px"
                >
                    <Grid color="var(--platinum)" fontSize={songName.length < 20 ? "14px" : "10px"} cursor='pointer'>
                        {songId ? songPlaying?.name : songName}
                    </Grid>

                    {songPlaying  && songPlaying.star && (
                        <Grid><Star
                            color="#66717E"
                            width="8px"
                            height="8px"
                        /></Grid>
                    )}


                    {songPlaying  &&  songPlaying.explicit && (
                        <Grid><Explicit
                            color="#66717E"
                            width="8px"
                            height="8px"
                        /></Grid>
                    )}

                    {!songPlaying  && star && (
                        <Grid><Star
                            color="#66717E"
                            width="8px"
                            height="8px"
                        /></Grid>
                    )}


                    {!songPlaying  &&  explicit && (
                        <Grid><Explicit
                            color="#66717E"
                            width="8px"
                            height="8px"
                        /></Grid>
                    )}

                </Grid>
                <Grid color='var(--aurora)' fontSize='12px'>
                    {songId ? songPlaying?.album.name : albumName}
                </Grid>
            </Grid>
        </Grid>);
};

export default AlbumContainer;