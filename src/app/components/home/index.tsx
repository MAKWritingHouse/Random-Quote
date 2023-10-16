'use client';

import { IQuote } from '../../interfaces/home';
import { useLayoutEffect, useState } from 'react';
import './style.scss';

// Function to fetch quotes from the server
const fetchQuotes = async (): Promise<IQuote> => {
	try {
		// Send a GET request to the '/api/quote' endpoint
		const response = await fetch(`/api/quote`).then((res) => {
			// Parse the response as JSON
			return res.json();
		});
		// Return the response data
		return response;
	} catch (error) {
		// Log an error message if there is an error fetching quotes
		console.error('Error fetching quotes:', error);
	}
};

const Home = () => {
	// State variables to store the current quote and the text of the "Copy to Clipboard" button
	const [quote, setQuote] = useState<IQuote>({
		quote: '',
		author: '',
	});
	const [copyBtnText, setCopyBtnText] = useState<string>('Copy to Clipboard');

	// Function to copy the current quote to the clipboard
	const copyToClipboard = (): void => {
		// Use the Clipboard API to write the quote to the clipboard
		navigator.clipboard
			.writeText(`${quote.quote} - ${quote.author}`)
			.then(() => {
				// Update the text of the "Copy to Clipboard" button to indicate that the quote has been copied
				setCopyBtnText('Copied');
				// Reset the text of the "Copy to Clipboard" button after a delay
				setTimeout(() => setCopyBtnText('Copy to Clipboard'), 2500);
			});
	};

	// Function to handle fetching and updating the quote
	const handleQuotes = async () => {
		// Fetch a new quote from the server and update the state variable
		setQuote(await fetchQuotes());
		// Reset the text of the "Copy to Clipboard" button
		setCopyBtnText('Copy to Clipboard');
	};

	// Use the useLayoutEffect hook to fetch and update the quote when the component is mounted
	useLayoutEffect(() => {
		handleQuotes();
	}, []);

	return (
		<div className="container">
			<h1>Random Quote</h1>
			<p className="subheading">Get Inspired and Uplifted!</p>
			<div className="quote-container">
				<div id="quoteDisplay" className="quote">
					{/* Display the current quote */}
					{quote.quote} - {quote.author}
				</div>
				<div className="button-container">
					{/* Button to fetch a new quote */}
					<button
						id="generateBtn"
						className="generate-btn"
						onClick={handleQuotes}
					>
						Random Quote
					</button>
					{/* Button to copy the current quote to the clipboard */}
					<button id="copyBtn" className="copy-btn" onClick={copyToClipboard}>
						{copyBtnText}
					</button>
					{/* Link to tweet the current quote */}
					<a
						id="tweetBtn"
						className="tweet-btn"
						href={`https://twitter.com/intent/tweet?text=${
							quote.quote
						} - ${quote.author.replace(
							', type.fit',
							'',
						)} - I found this Quote on random-quote.makwritinghouse.com - @makwritinghouse`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-twitter"></i> Tweet
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
