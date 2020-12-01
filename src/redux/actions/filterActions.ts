import { ActionCreator } from 'redux';
import {FilterType} from '../../type';

export enum filterActionTypes {
    SET_FILTER = 'SET_FILTER',
	DELETE_FILTER = 'DELETE_FILTER',
	CLEAR_FILTER = 'CLEAR_FILTER'
}
export type setFilterType = {
	type: filterActionTypes.SET_FILTER,
    data: FilterType
};
export type deleteFilterType = {
	type: filterActionTypes.DELETE_FILTER,
    data: FilterType
};
export type clearFilterType = {
	type: filterActionTypes.CLEAR_FILTER
};

export type FilterActions = setFilterType | deleteFilterType | clearFilterType;

export const setFilterAction: ActionCreator<setFilterType> = (data: FilterType) => ({
	type: filterActionTypes.SET_FILTER,
	data: data,
});
export const deleleteFilterAction: ActionCreator<deleteFilterType> = (data: FilterType) => ({
	type: filterActionTypes.DELETE_FILTER,
	data: data,
});
export const clearFilterAction: ActionCreator<clearFilterType> = () => ({
	type: filterActionTypes.CLEAR_FILTER
});