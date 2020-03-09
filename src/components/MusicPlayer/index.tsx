import React, {useContext, useEffect, useState} from 'react';
import {Grid} from "../Styles";
import AlbumContainer from "../AlbumContainer";
import Prev from "../Icons/Prev";
import Play from "../Icons/Play";
import Next from "../Icons/Next";
import {ITrack, MusicPlayerDispatchContext, MusicPlayerStateContext} from "../../context/MusicPlayer";
import {ISong, songs} from "../../pages/Album";
import Pause from "../Icons/Pause";


function setSongs(songs: Array<ISong>) {
    return songs.map(item => ({src: item.src, played: false}));
}

// console.log({songs});

const playlist: ITrack[] = setSongs(songs);

// console.log({playlist});


const Index: React.FC = () => {
    const musicPlayerDispatch = useContext(MusicPlayerDispatchContext);
    const musicPlayerState = useContext(MusicPlayerStateContext);
    console.log({musicPlayerState});
    const [playButtonClicked, setPlayButtonClicked] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        musicPlayerDispatch({type:'setSongs', playlist: playlist});
        return () => {
            abortController.abort()
        };
    }, [musicPlayerDispatch]);



    return (
        <Grid className={'position'} templateColumns={'30% 10% 25% 35%'} columnGap={'8px'} templateRows={'50px'}
              alignItems={'center'} backgroundColor={'#111'} width={'100%'} zIndex={'100'} position={'absolute'}
              bottom={'0'} right={'0'}>
            <AlbumContainer
                albumImage={'https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg'}
                songName={'Paranoid'} star={false} explicit={true} albumName={'Beerbongs & Bentleys'}
                borderRadius={'unset'}/>

            <Grid templateColumns={'24px 24px 24px'} columnGap={'8px'} justifyContent={'space-evenly'}>
                <Grid><Prev
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
                <Grid><Next
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