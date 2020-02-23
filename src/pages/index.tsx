import Artists from "./Artists";
import Artist from "./Artist";
import DJs from "./DJs";
import Events from "./Events";
import Home from "./Home";
import Library from "./Library";
import Music from "./Music";
import MusicVenues from "./MusicVenues";
import NotFound from "./NotFound";
import Album from './Album';
import Upload from './Upload';
import Search from './Search';

export interface IPage {
  routeProps: {
    path: string;
    component: React.FC;
    exact?: boolean;
  };
  name: String;
}

export const sidebarPages = [
  Home,
  Artists,
  Music,
  DJs,
  Events,
  Library,
  MusicVenues,
];

const Pages: Array<IPage> = [
  Home,
  Album,
  Artist,
  Artists,
  Music,
  DJs,
  Events,
  Library,
  MusicVenues,
  Upload,
  Search,
  NotFound
];

export default Pages;
