import React from 'react'
// import {useRouteMatch, Link} from 'react-router-dom';
import {Grid} from '../../components/Styles';
import {IPage} from "../index";
import Slider from '../../components/Slider';
import { IArtist } from '../Artist';

const ArtistsArray: Array<IArtist> = [
    {id: 1,  img: 'https://pbs.twimg.com/profile_images/1171534523718193152/-cBcnDzM.png', name: 'Maroon 5'},
    {id: 2,  img: 'https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg', name: 'Travis Scott'},
    {id: 3,  img: 'https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg', name: 'Post Malone'},
    {id: 4,  img: 'https://cdn.spinrilla.com/albums/160751/original/124cada7a205cbf7dc37.JPG?1534416653', name: 'Young Thug'},
    {id: 5,  img: 'https://media.gq.com/photos/55d25378606992214f1ecc7d/1:1/w_1557,h_1557,c_limit/The-Weekend-GQ-2015-01.jpg', name: 'The Weeknd'},
    {id: 6, img: 'https://assets.smoothradio.com/2017/26/ed-sheeran-1498662806-editorial-short-form-0.jpg', name: 'Ed Sheeran'},
    {id: 7, img: 'https://yt3.ggpht.com/a/AGF-l79GimB74yxWUXwCWaFmrvEDzs1brA9uz5QKLQ=s900-c-k-c0xffffffff-no-rj-mo', name: 'Megan Thee Stallion'},
    {id: 8, img: 'https://i1.sndcdn.com/avatars-000695384719-x7tkv5-t500x500.jpg', name: 'Dan Fresco'},
    {id: 11,  img: 'https://pbs.twimg.com/profile_images/1171534523718193152/-cBcnDzM.png', name: '2 Maroon 5'},
    {id: 12,  img: 'https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg', name: '2 Travis Scott'},
    {id: 13,  img: 'https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg', name: '2 Post Malone'},
    {id: 14,  img: 'https://cdn.spinrilla.com/albums/160751/original/124cada7a205cbf7dc37.JPG?1534416653', name: '2 Young Thug'},
    {id: 15,  img: 'https://media.gq.com/photos/55d25378606992214f1ecc7d/1:1/w_1557,h_1557,c_limit/The-Weekend-GQ-2015-01.jpg', name: '2 The Weeknd'},
    {id: 16, img: 'https://assets.smoothradio.com/2017/26/ed-sheeran-1498662806-editorial-short-form-0.jpg', name: '2 Ed Sheeran'},
    {id: 17, img: 'https://yt3.ggpht.com/a/AGF-l79GimB74yxWUXwCWaFmrvEDzs1brA9uz5QKLQ=s900-c-k-c0xffffffff-no-rj-mo', name: '2 Megan Thee Stallion'},
    {id: 18, img: 'https://i1.sndcdn.com/avatars-000695384719-x7tkv5-t500x500.jpg', name: '2 Dan Fresco'},
    {id: 21,  img: 'https://pbs.twimg.com/profile_images/1171534523718193152/-cBcnDzM.png', name: '3 Maroon 5'},
    {id: 22,  img: 'https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg', name: '3 Travis Scott'},
    {id: 23,  img: 'https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg', name: '3 Post Malone'},
    {id: 24,  img: 'https://cdn.spinrilla.com/albums/160751/original/124cada7a205cbf7dc37.JPG?1534416653', name: '3 Young Thug'},
    {id: 25,  img: 'https://media.gq.com/photos/55d25378606992214f1ecc7d/1:1/w_1557,h_1557,c_limit/The-Weekend-GQ-2015-01.jpg', name: '3 The Weeknd'},
    {id: 26, img: 'https://assets.smoothradio.com/2017/26/ed-sheeran-1498662806-editorial-short-form-0.jpg', name: '3 Ed Sheeran'},
    {id: 27, img: 'https://yt3.ggpht.com/a/AGF-l79GimB74yxWUXwCWaFmrvEDzs1brA9uz5QKLQ=s900-c-k-c0xffffffff-no-rj-mo', name: '3 Megan Thee Stallion'},
    {id: 28, img: 'https://i1.sndcdn.com/avatars-000695384719-x7tkv5-t500x500.jpg', name: '3 Dan Fresco'},

]

const Artists:React.FC = () => {
    
    return (
        <Grid alignItems='start' width='100%'>
            <Grid fontSize='28px' fontWeight='700' color='var(--platinum)' justifyContent='center'>Artists</Grid>
            <Slider artists={ArtistsArray} title='Top Artists:' borderRadius='50%'></Slider>
            <Slider artists={ArtistsArray} title='Featured Artists:' borderRadius='50%'></Slider>
            <Slider artists={ArtistsArray} title='Discover Artists:' borderRadius='50%'></Slider>
            <Slider artists={ArtistsArray} title='New Artists:' borderRadius='50%'></Slider>
        </Grid>
    )
}

const Page: IPage = {
    routeProps: {
        path: '/Artists',
        component: Artists,
        exact: true
    },
    name: 'Artists',
}   

export default Page;

// let match = useRouteMatch();
// {/* <Grid>
//             match => {JSON.stringify(match)}
//             </Grid>
//             <Grid>
//                 <Link to={`${match.url}/5`}>ID5</Link>
//             </Grid> */}