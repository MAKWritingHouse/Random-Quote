// Import the necessary dependencies
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Create an instance of the Prisma client
const prisma = new PrismaClient();

// Define an async function called `GET`
export async function GET() {
	// Get the total count of quotes in the database
	const count = await prisma.quote.count();

	// Generate a random index within the range of the quote count
	const randomIndex = Math.floor(Math.random() * count);

	// Retrieve a single quote from the database using the random index
	const quote = await prisma.quote.findMany({
		skip: randomIndex,
		take: 1,
	});

	// Return the quote as a JSON response
	return NextResponse.json(quote[0]);
}
