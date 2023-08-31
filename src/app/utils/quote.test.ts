import { IQuote } from '../interfaces/home';
import { getRandomQuote } from './quote';

describe('getRandomQuote', () => {
	it('should return a random quote from the array and array length should be 1', () => {
		const testQuotes = [
			{ text: 'Quote 1', author: 'Author 1' },
			{ text: 'Quote 2', author: 'Author 2' },
			{ text: 'Quote 3', author: 'Author 3' },
		];
		const randomQuote: IQuote = getRandomQuote(testQuotes);
		expect(testQuotes).toContainEqual(randomQuote);
	});
	it('should return undefined for an empty array', () => {
		const testQuotes: IQuote[] = [];
		const randomQuote = getRandomQuote(testQuotes);
		expect(randomQuote).toBeUndefined();
	});
});
