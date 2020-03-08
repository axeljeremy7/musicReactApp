import React from 'react';
import {Grid} from "../Styles";
import AlbumContainer from "../AlbumContainer";
import Prev from "../Icons/Prev";
import Play from "../Icons/Play";
import Next from "../Icons/Next";


function Index() {
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
                <Grid><Play
                    color="#66717E"
                    width="24px"
                    height="24px"
                /></Grid>
                <Grid><Next
                    color="#66717E"
                    width="24px"
                    height="24px"
                /></Grid>
            </Grid>

            <Grid templateColumns={'18px auto 18px'} columnGap={'8px'}  templateRows={'15px'} height={'15px'}>
                <Grid color={'white'} fontSize={'8px'}>0:00</Grid>
                <Grid width={'100%'} height={'4px'} backgroundColor={'#99928B'}/>
                <Grid color={'white'} fontSize={'8px'}>4:11</Grid>

            </Grid>


        </Grid>
    );
}

export default Index;