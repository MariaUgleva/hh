import { Reducer } from "redux";
import { filterActionTypes, FilterActions } from "../actions/filterActions";
import { FilterType, FilterObjectRedux } from "../../type";
import { flattenDiagnosticMessageText } from "typescript";

const initialState: FilterObjectRedux = {
  role: [],
  level: [],
  languages: [],
  tools: [],
};

const filterReducer: Reducer<FilterObjectRedux, FilterActions> = (
  state: FilterObjectRedux = initialState,
  action
) => {
  switch (action.type) {
    case filterActionTypes.SET_FILTER:
      const key: string = Object.keys(action.data)[0];
      const newState: FilterObjectRedux = { ...initialState };
      Object.keys(state).forEach((item) => {
        newState[item] = [...state[item]];
      });
      if (newState[key].includes(action.data[key])) return newState;
      newState[key].push(action.data[key]);
      return newState;
    case filterActionTypes.DELETE_FILTER:
      const keyToDelete: string = Object.keys(action.data)[0];
      const newFilter: FilterObjectRedux = { ...initialState };
      Object.keys(state).forEach((item) => {
        newFilter[item] = [...state[item]];
      });
      newFilter[keyToDelete].splice(
        newFilter[keyToDelete].findIndex(
          (item) => item === action.data[keyToDelete]
        ),
        1
      );
      return newFilter;
    case filterActionTypes.CLEAR_FILTER:
      return { ...initialState };
    default:
      return state;
  }
};
export default filterReducer;
