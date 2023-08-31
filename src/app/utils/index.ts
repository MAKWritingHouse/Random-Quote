export const getRandomIndexOfTheArray = (arr: any[]): number => {
	const randomIndex: number = Math.floor(Math.random() * arr.length);
	return randomIndex;
};
