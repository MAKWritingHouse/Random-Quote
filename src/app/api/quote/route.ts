import { getRandomQuote } from '@/app/utils/quote';
import { NextResponse } from 'next/server';

export async function GET() {
	const response = await fetch('https://type.fit/api/quotes').then((res) => {
		return res.json();
	});
	return NextResponse.json(getRandomQuote(response));
}
