import { QuoteType } from '../types/home';
import { getRandomIndexOfTheArray, getRandomQuote } from './quote';

describe('getRandomIndexOfTheArray', () => {
	it('should return a valid random index within the array length', () => {
		const testArray = [1, 2, 3, 4, 5];
		const randomIndex = getRandomIndexOfTheArray(testArray);
		expect(randomIndex).toBeGreaterThanOrEqual(0);
		expect(randomIndex).toBeLessThan(testArray.length);
	});

	it('should return 0 for an array with a single element', () => {
		const testArray = [42];
		const randomIndex = getRandomIndexOfTheArray(testArray);
		expect(randomIndex).toEqual(0);
	});

	it('should return o for an empty array', () => {
		const testArray: number[] = [];
		const randomIndex = getRandomIndexOfTheArray(testArray);
		expect(randomIndex).toEqual(0);
	});
});

describe('getRandomQuote', () => {
	it('should return a random quote from the array and array length should be 1', () => {
		const testQuotes = [
			{ text: 'Quote 1', author: 'Author 1' },
			{ text: 'Quote 2', author: 'Author 2' },
			{ text: 'Quote 3', author: 'Author 3' },
		];
		const randomQuote: QuoteType = getRandomQuote(testQuotes);
		expect(testQuotes).toContainEqual(randomQuote);
	});
	it('should return undefined for an empty array', () => {
		const testQuotes: QuoteType[] = [];
		const randomQuote = getRandomQuote(testQuotes);
		expect(randomQuote).toBeUndefined();
	});
});
