import { getRandomIndexOfTheArray } from './index';

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
