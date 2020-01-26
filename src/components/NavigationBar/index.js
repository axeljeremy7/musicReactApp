import React from 'react'
import {Grid} from '../../components/Styles';

const NavigationBar = () => {
    return (
        <Grid templateColumns='1fr 1fr 1fr' backgroundColor='#212529'>
          <Grid>
              Icon
          </Grid>  
          <Grid>
              Logo
          </Grid>
          <Grid>
              Upload & Search
          </Grid>
        </Grid>
    )
}

export default NavigationBar