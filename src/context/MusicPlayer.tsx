import { createContext, Dispatch, Reducer } from 'react';
import { act } from "react-dom/test-utils";

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
            "data:image/jpeg;base64,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",
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
        img: "https://wp3-fatsomasites.imgix.net/uploads/sites/825/2019/06/60262210_2337195026496913_8414791722659217408_o.jpg?auto=format%2Ccompress",
        name: "Dan Fresco"
    },
    {
        id: 11,
        img:
            "data:image/jpeg;base64,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",
        name: "#2 Maroon 5"
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
        img: "https://wp3-fatsomasites.imgix.net/uploads/sites/825/2019/06/60262210_2337195026496913_8414791722659217408_o.jpg?auto=format%2Ccompress",
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
            console.log('[canplay]', { e });
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
        this.audio.play().catch(error => console.log('Error in play()', { error }));
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
            if (action.songs && action.songs.length > 0) {
                let playlist = action.songs.map(item => ({ src: item.src, played: false }));
                if (playlist && playlist[0].src) {
                    state.audio.setPlaylist(playlist);
                    state.audio.setSong(playlist[0].src);
                }
            }

            return { ...state };
        case 'addSong':
            const { songs } = state;
            if (action.newSong) {
                return { ...state, songs: [...songs, action.newSong] };
            }
            return { ...state };
        case 'playSong':
            state.audio.playSong();
            return { ...state };
        case 'pauseSong':
            state.audio.pauseSong();
            return { ...state };
        case 'nextSong':
            state.audio.playNextSong();
            return { ...state };
        case 'previousSong':
            state.audio.playPreviousSong();
            return { ...state };
        default:
            return state;
    }
};

export const MusicPlayerInitialState: IMusicPlayerStateProps = {
    songs: [],
    audio: new Audio(),
};

