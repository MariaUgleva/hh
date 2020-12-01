import { ActionCreator } from 'redux';
import {CardType} from '../../type';

export enum cardActionTypes {
	CARDS_LOAD = 'CARDS_LOAD',
}
export type loadCardsType = {
	type: cardActionTypes.CARDS_LOAD,
    data: Array<CardType>;
};

export type CardsActions = loadCardsType;

export const loadCardsAction: ActionCreator<loadCardsType> = (data: Array<CardType>) => ({
	type: cardActionTypes.CARDS_LOAD,
	data: data,
});