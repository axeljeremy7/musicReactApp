
import { createContext, Dispatch, Reducer } from 'react';

export interface Actions {
    type: string;
}

export interface ToggleSidebarProps {
    show: boolean;
} 

export interface ToggleSidebarInitContext {
    state: ToggleSidebarProps;
    dispatch: Dispatch<Actions>;
}

export const ToggleSidebarContext = createContext({} as ToggleSidebarInitContext);

export const ToggleSidebarReducer: Reducer<ToggleSidebarProps, Actions> = (state, action) => {
    switch (action.type) {
        case 'setShow':
            if(!state.show){
                return { ...state, show: true};
            }
            return { ...state, show: false};
        default:
            return state;
    }
};

export const ToggleSidebarInitState: ToggleSidebarProps = {
    show: true
};

