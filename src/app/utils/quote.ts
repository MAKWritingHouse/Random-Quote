import { QuoteType } from '../types/home';

export const getRandomIndexOfTheArray = (arr: any[]): number => {
	const randomIndex: number = Math.floor(Math.random() * arr.length);
	return randomIndex;
};

export const getRandomQuote = (arr: any[]): QuoteType => {
	return arr[getRandomIndexOfTheArray(arr)];
};
