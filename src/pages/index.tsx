  

import Artists from './Artists';
import Artist from './Artist';
import DJs from './DJs';
import Events from './Events';
import Home from './Home';
import Library from './Library';
import Music from './Music';
import MusicVenues from './MusicVenues';
import NotFound from './NotFound';

export interface IPage {
    routeProps: {
        path: string,
        component: React.FC
        exact?: boolean
    },
    name: String
}

export const sidebarPages = [
    Artists,
    DJs,
    Events,
    Home,
    Library,
    Music,
    MusicVenues,
];


const Pages: Array<IPage> = [
    Artist,
    Artists,
    DJs,
    Events,
    Home,
    Library,
    Music,
    MusicVenues,
    NotFound
];

export default Pages;