import {createContext, Dispatch, Reducer} from 'react';
import {act} from "react-dom/test-utils";

export interface IArtist {
    id: number;
    img: string;
    name: string;
    backgroundImage?: string;
    place?: string;
    country?: string;
    genre?: string;
}

export let artist: IArtist = {
    id: 1,
    img: "https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg",
    name: "Post Malone",
    backgroundImage:
        "https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/09/post-malone-saint-tropez-music-video@2000x1270.jpg",
    place: "Seanhaven, OR",
    country: "US",
    genre: "Pop"
};

export interface IAlbum {
    id: number;
    name: string;
    artistName: string;
    genre: string;
    year: string;
    numberOfSongs: number;
    image: string;
}

export interface ISong {
    id: number;
    num: number;
    name: string;
    explicit: boolean;
    star: boolean;
    length: string;
    album: IAlbum;
    img: string;
    src: string;
}

export const artists: Array<IArtist> = [
    {
        id: 1,
        img: "https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg",
        name: "Post Malone"
    },
    {
        id: 2,
        img: "https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg",
        name: "Travis Scott"
    },
    {
        id: 3,
        img:
            "https://pbs.twimg.com/profile_images/1171534523718193152/-cBcnDzM.png",
        name: "Maroon 5"
    },
    {
        id: 4,
        img:
            "https://cdn.spinrilla.com/albums/160751/original/124cada7a205cbf7dc37.JPG?1534416653",
        name: "Young Thug"
    },
    {
        id: 5,
        img:
            "https://media.gq.com/photos/55d25378606992214f1ecc7d/1:1/w_1557,h_1557,c_limit/The-Weekend-GQ-2015-01.jpg",
        name: "The Weeknd"
    },
    {
        id: 6,
        img:
            "https://assets.smoothradio.com/2017/26/ed-sheeran-1498662806-editorial-short-form-0.jpg",
        name: "Ed Sheeran"
    },
    {
        id: 7,
        img:
            "https://yt3.ggpht.com/a/AGF-l79GimB74yxWUXwCWaFmrvEDzs1brA9uz5QKLQ=s900-c-k-c0xffffffff-no-rj-mo",
        name: "Megan Thee Stallion"
    },
    {
        id: 8,
        img: "https://i1.sndcdn.com/avatars-000695384719-x7tkv5-t500x500.jpg",
        name: "Dan Fresco"
    },
    {
        id: 11,
        img:
            "https://pbs.twimg.com/profile_images/1171534523718193152/-cBcnDzM.png",
        name: "2 Maroon 5"
    },
    {
        id: 12,
        img: "https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg",
        name: "2 Travis Scott"
    },
    {
        id: 13,
        img: "https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg",
        name: "2 Post Malone"
    },
    {
        id: 14,
        img:
            "https://cdn.spinrilla.com/albums/160751/original/124cada7a205cbf7dc37.JPG?1534416653",
        name: "2 Young Thug"
    },
    {
        id: 15,
        img:
            "https://media.gq.com/photos/55d25378606992214f1ecc7d/1:1/w_1557,h_1557,c_limit/The-Weekend-GQ-2015-01.jpg",
        name: "2 The Weeknd"
    },
    {
        id: 16,
        img:
            "https://assets.smoothradio.com/2017/26/ed-sheeran-1498662806-editorial-short-form-0.jpg",
        name: "2 Ed Sheeran"
    },
    {
        id: 17,
        img:
            "https://yt3.ggpht.com/a/AGF-l79GimB74yxWUXwCWaFmrvEDzs1brA9uz5QKLQ=s900-c-k-c0xffffffff-no-rj-mo",
        name: "2 Megan Thee Stallion"
    },
    {
        id: 18,
        img: "https://i1.sndcdn.com/avatars-000695384719-x7tkv5-t500x500.jpg",
        name: "2 Dan Fresco"
    },
    {
        id: 21,
        img:
            "https://pbs.twimg.com/profile_images/1171534523718193152/-cBcnDzM.png",
        name: "3 Maroon 5"
    },
    {
        id: 22,
        img: "https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg",
        name: "3 Travis Scott"
    },
    {
        id: 23,
        img: "https://i1.sndcdn.com/artworks-000138655459-s0lv9h-t500x500.jpg",
        name: "3 Post Malone"
    },
    {
        id: 24,
        img:
            "https://cdn.spinrilla.com/albums/160751/original/124cada7a205cbf7dc37.JPG?1534416653",
        name: "3 Young Thug"
    },
    {
        id: 25,
        img:
            "https://media.gq.com/photos/55d25378606992214f1ecc7d/1:1/w_1557,h_1557,c_limit/The-Weekend-GQ-2015-01.jpg",
        name: "3 The Weeknd"
    },
    {
        id: 26,
        img:
            "https://assets.smoothradio.com/2017/26/ed-sheeran-1498662806-editorial-short-form-0.jpg",
        name: "3 Ed Sheeran"
    },
    {
        id: 27,
        img:
            "https://yt3.ggpht.com/a/AGF-l79GimB74yxWUXwCWaFmrvEDzs1brA9uz5QKLQ=s900-c-k-c0xffffffff-no-rj-mo",
        name: "3 Megan Thee Stallion"
    },
    {
        id: 28,
        img: "https://i1.sndcdn.com/avatars-000695384719-x7tkv5-t500x500.jpg",
        name: "3 Dan Fresco"
    }
];

export let album: IAlbum = {
    id: 1,
    name: "Beerbongs & Bentleys",
    artistName: "Post Malone",
    genre: "Pop/Hip-Hop/R&B",
    year: "2018",
    numberOfSongs: 18,
    image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Beerbongs_%26_Bentleys_by_Post_Malone.png"
};

export const albums: Array<IAlbum> = [
    {
        id: 1,
        image: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
        name: "Red Pill Blues",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 2,
        image: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
        name: "Overexposed",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 3,
        image:
            "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
        name: "ASTROWORLD",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 4,
        image:
            "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
        name: "Beauty behind the madness",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 5,
        image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
        name: "No.6 Collaboration Project",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 6,
        image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
        name: "V",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 7,
        image:
            "https://upload.wikimedia.org/wikipedia/en/c/c1/Beerbongs_%26_Bentleys_by_Post_Malone.png",
        name: "Beerbongs & Bentleys",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 8,
        image: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
        name: "Starboy",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 21,
        image: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
        name: "2Red Pill Blues",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 22,
        image: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
        name: "2Overexposed",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 23,
        image:
            "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
        name: "2ASTROWORLD",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 24,
        image:
            "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
        name: "2Beauty behind the madness",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 25,
        image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
        name: "2No.6 Collaboration Project",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 26,
        image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
        name: "2V",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 27,
        image:
            "https://i.pinimg.com/originals/1b/fb/be/1bfbbe210fc438c8a13c092fdb2fcd76.jpg",
        name: "2Huncho Jack",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 28,
        image: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
        name: "2Starboy",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 31,
        image: "https://images.genius.com/a581c79e3201364cb5f11f3bd1b5f161.1000x1000x1.png",
        name: "3Red Pill Blues",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 32,
        image: "https://angelaboozer.files.wordpress.com/2014/10/final1.png",
        name: "3Overexposed",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 33,
        image:
            "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
        name: "3ASTROWORLD",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 34,
        image:
            "https://i.pinimg.com/originals/34/d8/05/34d805497ee78286e698122972d57fd3.jpg",
        name: "3Beauty behind the madness",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 35,
        image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png/220px-Ed_Sheeran_-_No._6_Collaborations_Project.png",
        name: "3No.6 Collaboration Project",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 36,
        image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/94/10/75/941075a2-0414-d785-f592-67c65db00eab/source/1200x1200bb.jpg",
        name: "3V",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 37,
        image:
            "https://i.pinimg.com/originals/1b/fb/be/1bfbbe210fc438c8a13c092fdb2fcd76.jpg",
        name: "3Huncho Jack",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
    {
        id: 38,
        image: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
        name: "3Starboy",
        artistName: "Post Malone",
        genre: "Pop/Hip-Hop/R&B",
        year: "2018",
        numberOfSongs: 18,
    },
];

export const songList: Array<ISong> = [
    {
        id: 1,
        num: 1,
        name: "Paranoid",
        explicit: false,
        star: false,
        length: "3:44",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Paranoid%20%28Lyrics%29.mp3',
    },
    {
        id: 2,
        num: 2,
        name: "Spoil My Night",
        explicit: true,
        star: false,
        length: "3:54",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Spoil%20My%20Night%20%28Lyrics%29.mp3',
    },
    {
        id: 3,
        num: 3,
        name: "Rich & Sad",
        explicit: true,
        star: true,
        length: "3:14",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Rich%20%26%20Sad.mp3',
    },
    {
        id: 4,
        num: 4,
        name: "Zack and Codeine",
        explicit: true,
        star: false,
        length: "3:23",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Zack%20And%20Codeine.mp3',
    },
    {
        id: 5,
        num: 5,
        name: "Takin' Shots",
        explicit: true,
        star: true,
        length: "3:37",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Takin%27%20Shots.mp3',
    },
    {
        id: 6,
        num: 6,
        name: "Rockstar (feat. 21 Savage)",
        explicit: true,
        star: true,
        length: "3:39",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20%28Official%20Audio%29.mp3',
    },
    {
        id: 7,
        num: 7,
        name: "Over Now",
        explicit: true,
        star: true,
        length: "4:07",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Over%20Now.mp3',
    },
    {
        id: 8,
        num: 8,
        name: "Psycho (feat. Ty Dolla Sign)",
        explicit: true,
        star: true,
        length: "3:41",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Psycho%20%28Lyrics%29%20ft.%20Ty%20Dolla%20%24ign.mp3',
    },
    {
        id: 9,
        num: 9,
        name: "Better Now",
        explicit: true,
        star: true,
        length: "3:50",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Better%20Now.mp3',
    },
    {
        id: 10,
        num: 10,
        name: "Ball for Me (feat. Nicki Minaj)",
        explicit: true,
        star: true,
        length: "3:27",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Post%20Malone%20-%20Ball%20For%20Me%20Ft.%20Nicki%20Minaj%20%28beerbongs%20%26%20bentleys%29.mp3',
    },
    {
        id: 11,
        num: 11,
        name: "Otherside",
        explicit: true,
        star: false,
        length: "3:48",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Otherside.mp3',
    },
    {
        id: 12,
        num: 12,
        name: "Stay",
        explicit: true,
        star: false,
        length: "3:28",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/199705246Stay.mp3',
    },
    {
        id: 13,
        num: 13,
        name: "Blame It on Me",
        explicit: true,
        star: false,
        length: "4:24",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Blame%20It%20On%20Me.mp3',
    },
    {
        id: 14,
        num: 14,
        name: "Same Bitches (feat. G-Eazy and YG)",
        explicit: true,
        star: false,
        length: "3:31",
        album: album,
        img:
            "https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635-640x543.jpg",
        src: 'https://f2-default.s3.amazonaws.com/screenshots/424242/3465/ot/images/1144262708Same%20Bitches.mp3',
    }
];

export interface ITrack {
    src?: string;
    played?: boolean;
}

class Audio {
    audio: HTMLMediaElement;
    playlist: ITrack[] = [];
    currentIndex: number = 0;

    constructor() {
        this.audio = document.createElement('audio');
        this.audio.addEventListener("canplay", (e) => {
            console.log('[canplay]', {e});
        });
        this.audio.addEventListener("ended", () => {
            console.log('song ended');
            this.playNextSong()
        });
    }

    reset() {
        this.playlist = [];
        this.currentIndex = 0;
    }

    setPlaylist(list: ITrack[]) {
        this.playlist = list;
    };

    setSong(path: string) {
        this.audio.src = path;
    }

    updatePlaylist(path: string) {
        if (this.playlist.length > 0) {
            this.playlist = this.playlist.map((track, index) => {
                if (track.src === path) {
                    track.played = true;
                    this.currentIndex = index;
                }
                return track;
            });
        }
    };

    playSong() {
        this.audio.play().catch(error => console.log('Error in play()', {error}));
    }

    pauseSong() {
        this.audio.pause();
    }

    playNextSong() {
        if (this.playlist.length > 0 && (this.currentIndex + 1) < this.playlist.length) {
            let nextSong = this.playlist[this.currentIndex + 1].src;
            if (nextSong) {
                this.setSong(nextSong);
                this.updatePlaylist(nextSong);
                this.playSong();
            }

        } else {
            this.reset();
        }
    }

    playPreviousSong() {
        if (this.playlist.length > 0 && (this.currentIndex - 1) >= 0) {
            let previousSong = this.playlist[this.currentIndex - 1].src;
            if (previousSong) {
                this.setSong(previousSong);
                this.updatePlaylist(previousSong);
                this.playSong();
            }
        } else {
            this.reset();
        }
    }
}

interface IActions {
    type: string;
    newSong?: ITrack;
    songs?: Array<ISong>;
}

export interface IMusicPlayerStateProps {
    songs: ITrack[];
    audio: Audio;
}

export const MusicPlayerStateContext = createContext({} as IMusicPlayerStateProps);
export const MusicPlayerDispatchContext = createContext({} as Dispatch<IActions>);

export const MusicPlayerReducer: Reducer<IMusicPlayerStateProps, IActions> = (state, action) => {
    switch (action.type) {
        case 'setSongs':
            if(action.songs && action.songs.length > 0){
                let playlist = action.songs.map(item => ({src: item.src, played: false}));
                if (playlist && playlist[0].src) {
                    state.audio.setPlaylist(playlist);
                    state.audio.setSong(playlist[0].src);
                }
            }

            return {...state};
        case 'addSong':
            const {songs} = state;
            if (action.newSong) {
                return {...state, songs: [...songs, action.newSong]};
            }
            return {...state};
        case 'playSong':
            state.audio.playSong();
            return {...state};
        case 'pauseSong':
            state.audio.pauseSong();
            return {...state};
        case 'nextSong':
            state.audio.playNextSong();
            return {...state};
        case 'previousSong':
            state.audio.playPreviousSong();
            return {...state};
        default:
            return state;
    }
};

export const MusicPlayerInitialState: IMusicPlayerStateProps = {
    songs: [],
    audio: new Audio(),
};

