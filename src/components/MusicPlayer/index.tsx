import React, {useContext, useEffect, useState} from 'react';
import {Grid} from "../Styles";
import AlbumContainer from "../AlbumContainer";
import PrevTrack from "../Icons/PrevTrack";
import Play from "../Icons/Play";
import {songList, MusicPlayerDispatchContext, MusicPlayerStateContext, ITrack, ISong} from "../../context/MusicPlayer";
import Pause from "../Icons/Pause";
import NextTrack from "../Icons/NextTrack";

const Index: React.FC = () => {
    const musicPlayerDispatch = useContext(MusicPlayerDispatchContext);
    const musicPlayerState = useContext(MusicPlayerStateContext);
    console.log({musicPlayerState});

    const [playButtonClicked, setPlayButtonClicked] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        musicPlayerDispatch({type:'setSongs', songs: songList});

        return () => {
            abortController.abort()
        };
    }, [musicPlayerDispatch]);


    return (
        <Grid className={'position'} templateColumns={'30% 10% 25% 35%'} columnGap={'8px'} templateRows={'50px'}
              alignItems={'center'} backgroundColor={'#111'} width={'100%'} zIndex={'100'} position={'absolute'}
              bottom={'0'} right={'0'}>
            <AlbumContainer
                albumImage={'https://upload.wikimedia.org/wikipedia/en/c/c1/Beerbongs_%26_Bentleys_by_Post_Malone.png'}
                songName={'Paranoid'} star={false} explicit={true} albumName={'Beerbongs & Bentleys'} songId={musicPlayerState.audio.currentIndex}
                borderRadius={'unset'}/>

            <Grid templateColumns={'24px 24px 24px'} columnGap={'8px'} justifyContent={'space-evenly'}>
                <Grid onClick={
                    ()=>{
                        if(playButtonClicked){
                            musicPlayerDispatch({type:'previousSong'});
                        }
                    }}><PrevTrack
                    color="#66717E"
                    width="24px"
                    height="24px"
                /></Grid>
                {!playButtonClicked && <Grid onClick={
                    () => {
                        musicPlayerDispatch({type:'playSong'});
                        setPlayButtonClicked(!playButtonClicked);
                    }
                }><Play
                    color="#66717E"
                    width="24px"
                    height="24px"
                /></Grid>}
                {playButtonClicked && <Grid onClick={
                    () => {
                        musicPlayerDispatch({type:'pauseSong'});
                        setPlayButtonClicked(!playButtonClicked);
                    }
                }><Pause
                    color="#66717E"
                    width="24px"
                    height="24px"
                /></Grid>}
                <Grid onClick={
                          ()=>{
                              if(playButtonClicked){
                                  musicPlayerDispatch({type:'nextSong'});
                              }
                          }}><NextTrack
                    color="#66717E"
                    width="24px"
                    height="24px"
                /></Grid>
            </Grid>

            <Grid templateColumns={'18px auto 18px'} columnGap={'8px'} templateRows={'15px'} height={'15px'}>
                <Grid color={'white'} fontSize={'8px'}>0:00</Grid>
                <Grid width={'100%'} height={'4px'} backgroundColor={'#99928B'}/>
                <Grid color={'white'} fontSize={'8px'}>4:11</Grid>
            </Grid>
        </Grid>);
};

export default Index;