import { getRandomQuote } from '@/app/utils/quote';
import { NextResponse } from 'next/server';

/**
 * Handles an HTTP GET request to fetch and return a random quote.
 *
 * @returns {NextResponse} A NextResponse object with a JSON response containing a random quote.
 */
export async function GET() {
	// Send an HTTP GET request to the 'https://type.fit/api/quotes' API
	const response = await fetch('https://type.fit/api/quotes').then((res) => {
		// Parse the response body as JSON
		return res.json();
	});

	// Get a random quote from the fetched quotes using the getRandomQuote function
	const randomQuote = getRandomQuote(response);

	// Return a NextResponse with a JSON payload containing the random quote
	return NextResponse.json(randomQuote);
}
