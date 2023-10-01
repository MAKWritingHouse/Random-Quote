import { getRandomIndexOfTheArray } from './index';

/**
 * Test suite for the getRandomIndexOfTheArray function.
 */
describe('getRandomIndexOfTheArray', () => {
	/**
	 * Test case: should return a valid random index within the array length.
	 * It checks if the function returns a random index that is greater than or equal to 0
	 * and less than the length of the test array.
	 */
	it('should return a valid random index within the array length', () => {
		const testArray = [1, 2, 3, 4, 5];
		const randomIndex = getRandomIndexOfTheArray(testArray);

		// Expect the random index to be greater than or equal to 0
		expect(randomIndex).toBeGreaterThanOrEqual(0);

		// Expect the random index to be less than the length of the test array
		expect(randomIndex).toBeLessThan(testArray.length);
	});

	/**
	 * Test case: should return 0 for an array with a single element.
	 * It checks if the function correctly handles an array with a single element,
	 * and expects the function to always return 0 for such arrays.
	 */
	it('should return 0 for an array with a single element', () => {
		const testArray = [42];
		const randomIndex = getRandomIndexOfTheArray(testArray);

		// Expect the random index to be equal to 0 for a single-element array
		expect(randomIndex).toEqual(0);
	});

	/**
	 * Test case: should return 0 for an empty array.
	 * It checks if the function correctly handles an empty array and expects the function
	 * to always return 0 for empty arrays.
	 */
	it('should return 0 for an empty array', () => {
		const testArray: number[] = [];
		const randomIndex = getRandomIndexOfTheArray(testArray);

		// Expect the random index to be equal to 0 for an empty array
		expect(randomIndex).toEqual(0);
	});
});
