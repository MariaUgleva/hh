import {combineReducers } from 'redux';
import allCardsReducer from './allCardsReducer';
import filterReducer from './filterReducer';
import {CardType, FilterObjectRedux} from '../../type';


export type AppState = {
    cards: Array<CardType>,
    filter: FilterObjectRedux
  };
const rootReducer  = combineReducers<AppState>({
    cards: allCardsReducer,
    filter: filterReducer
});

export default rootReducer;