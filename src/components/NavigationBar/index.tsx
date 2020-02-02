import React from 'react'
import {Grid} from '../Styles';
import Pulse from '../Icons/pulse';
import styled from 'styled-components';
import Search from '../Search';
import Upload from "../Icons/upload";

const TopNavBar = styled(Grid)`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const NavigationBar = () => {
    return (
        <TopNavBar templateColumns='1fr 1fr 1fr' backgroundColor='var(--custom-black)' color='white' padding='16px 32px 16px 32px' height='60px'>
          <Grid width='32px'>
              <Pulse color='white'/>
          </Grid>  
          <Grid textAlign='center' fontSize='32px'>
              MusicU
          </Grid>
          <Grid textAlign='center' justifySelf='end' templateColumns='auto auto' columnGap='16px'>
              <Upload color='white' width='24px' height='24px'/>
              <Search/>
          </Grid>
        </TopNavBar>
    )
}

export default NavigationBar