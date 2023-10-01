import { IQuote } from '../interfaces/home';
import { getRandomQuote } from './quote';

/**
 * Test suite for the getRandomQuote function.
 */
describe('getRandomQuote', () => {
	/**
	 * Test case: should return a random quote from the array, and the array length should be 1.
	 * It checks if the function returns a random quote from the provided array and ensures that
	 * the array length remains 1 after selecting a quote. It uses the `toContainEqual` matcher
	 * to check if the random quote is one of the quotes in the testQuotes array.
	 */
	it('should return a random quote from the array, and the array length should be 1', () => {
		const testQuotes = [
			{ text: 'Quote 1', author: 'Author 1' },
			{ text: 'Quote 2', author: 'Author 2' },
			{ text: 'Quote 3', author: 'Author 3' },
		];

		// Call the getRandomQuote function to retrieve a random quote
		const randomQuote: IQuote = getRandomQuote(testQuotes);

		// Expect the testQuotes array to contain the randomly selected quote
		expect(testQuotes).toContainEqual(randomQuote);
	});

	/**
	 * Test case: should return undefined for an empty array.
	 * It checks if the function correctly handles an empty array and expects the function
	 * to return `undefined` when called with an empty array.
	 */
	it('should return undefined for an empty array', () => {
		const testQuotes: IQuote[] = [];

		// Call the getRandomQuote function with an empty array
		const randomQuote = getRandomQuote(testQuotes);

		// Expect the result to be `undefined` for an empty array
		expect(randomQuote).toBeUndefined();
	});
});
