import { createContext, Dispatch, Reducer } from "react";

export interface Action {
  type: string;
  searchValue: string;
}

export interface SearchContextsState {
  searchValue: string | null;
}

export interface ToggleSidebarInitContext {
  state: SearchContextsState;
  dispatch: Dispatch<Action>;
}

export const SearchContext = createContext({} as ToggleSidebarInitContext);

export const SearchReducer: Reducer<SearchContextsState, Action> = (
  state,
  action
) => {
  switch (action.type) {
    case "setSearchValue":
      return { ...state, searchValue: action.searchValue };
    default:
      return state;
  }
};

export const SearchInitialState: SearchContextsState = {
    searchValue: null
};
