import { IQuote } from '../interfaces/home';
import { getRandomIndexOfTheArray } from './index';

export const getRandomQuote = (arr: any[]): IQuote => {
	return arr[getRandomIndexOfTheArray(arr)];
};
