import { Reducer } from "redux";
import {
    cardActionTypes,
    CardsActions,
} from "../actions/AllCardsActions";
import { CardType } from "../../type";

const initialState: Array<CardType> = [];

const allCardsReducer: Reducer<Array<CardType>, CardsActions> = (
  state: Array<CardType> = initialState,
  action
) => {
  switch (action.type) {
    case cardActionTypes.CARDS_LOAD:
      return action.data;
    default:
      return state;
  }
};
export default allCardsReducer;