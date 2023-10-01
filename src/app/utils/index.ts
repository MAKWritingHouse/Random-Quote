/**
 * Generates a random index within the bounds of an array's length.
 *
 * @param {any[]} arr - The array for which to generate a random index.
 * @returns {number} A random index within the bounds of the array's length.
 */
export const getRandomIndexOfTheArray = (arr: any[]): number => {
	// Generate a random index using Math.random and the array's length
	const randomIndex: number = Math.floor(Math.random() * arr.length);
	return randomIndex;
};
