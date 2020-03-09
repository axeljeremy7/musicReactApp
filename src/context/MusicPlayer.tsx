import {createContext, Dispatch, Reducer} from 'react';

export interface ITrack{
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
            this.playlist = this.playlist.filter((track, index) => {
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

    pauseSong(){
        this.audio.pause();
    }

    playNextSong() {
        if (this.playlist.length > 0 && (this.currentIndex + 1) < this.playlist.length) {
            let nextSong = this.playlist[this.currentIndex + 1].src;
            if(nextSong){
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
            if(previousSong){
                this.setSong(previousSong);
                this.updatePlaylist(previousSong);
                this.playSong();
            }
        } else {
            this.reset();
        }
    }


}

export interface Actions{
    type: string;
    newSong?: ITrack;
    playlist?: ITrack[];
}

export interface IMusicPlayerStateProps {
    songs: ITrack[];
    audio: Audio;
}

export const MusicPlayerStateContext = createContext({} as IMusicPlayerStateProps);
export const MusicPlayerDispatchContext = createContext({} as Dispatch<Actions>);

export const MusicPlayerReducer: Reducer<IMusicPlayerStateProps, Actions> = (state, action) => {
    switch (action.type) {
        case 'setSongs':
            if(action.playlist && action.playlist[0].src){
                state.audio.setPlaylist(action.playlist);
                state.audio.setSong(action.playlist[0].src);
            }
            return {...state};
        case 'addSong':
            const {songs} = state;
            if(action.newSong){
                return {...state, songs: [...songs, action.newSong]};
            }
            return {...state};
        case 'playSong':
            state.audio.playSong();
            return {...state};
        case 'pauseSong':
            state.audio.pauseSong();
            return {...state};
        default:
            return state;
    }
};

export const MusicPlayerInitialState: IMusicPlayerStateProps = {
    songs: [],
    audio: new Audio(),
};

