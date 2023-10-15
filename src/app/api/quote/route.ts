import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

/**
 * Handles an HTTP GET request to fetch and return a random quote.
 *
 * @returns {NextResponse} A NextResponse object with a JSON response containing a random quote.
 */
export async function GET() {
	const count = await prisma.quote.count();
	const randomIndex = Math.floor(Math.random() * count);
	const quote = await prisma.quote.findMany({
		skip: randomIndex,
		take: 1,
	});
	return NextResponse.json(quote[0]);
}
