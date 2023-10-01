import { IQuote } from '../interfaces/home';
import { getRandomIndexOfTheArray } from './index';

/**
 * Retrieves a random quote from an array of quotes.
 *
 * @param {any[]} arr - The array containing quotes.
 * @returns {IQuote} A randomly selected quote from the array.
 */
export const getRandomQuote = (arr: any[]): IQuote => {
	// Get a random index within the bounds of the array's length
	const randomIndex = getRandomIndexOfTheArray(arr);

	// Retrieve the quote at the random index
	const randomQuote: IQuote = arr[randomIndex];

	return randomQuote;
};
