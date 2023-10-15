'use client';

import { IQuote } from '../../interfaces/home';
import { useLayoutEffect, useState } from 'react';
import './style.scss';

const fetchQuotes = async (): Promise<IQuote> => {
	try {
		const response = await fetch(`/api/quote`).then((res) => {
			return res.json();
		});
		return response;
	} catch (error) {
		console.error('Error fetching quotes:', error);
	}
};

const Home = () => {
	const [quote, setQuote] = useState<IQuote>({
		quote: '',
		author: '',
	});
	const [copyBtnText, setCopyBtnText] = useState<string>('Copy to Clipboard');

	const copyToClipboard = (): void => {
		navigator.clipboard
			.writeText(`${quote.quote} - ${quote.author}`)
			.then(() => {
				setCopyBtnText('Copied');
				setTimeout(() => setCopyBtnText('Copy to Clipboard'), 2500);
			});
	};

	const handleQuotes = async () => {
		setQuote(await fetchQuotes());
		setCopyBtnText('Copy to Clipboard');
	};

	useLayoutEffect(() => {
		handleQuotes();
	}, []);

	return (
		<div className="container">
			<h1>Random Quote</h1>
			<p className="subheading">Get Inspired and Uplifted!</p>
			<div className="quote-container">
				<div id="quoteDisplay" className="quote">
					{quote.quote} - {quote.author}
				</div>
				<div className="button-container">
					<button
						id="generateBtn"
						className="generate-btn"
						onClick={handleQuotes}
					>
						Random Quote
					</button>
					<button id="copyBtn" className="copy-btn" onClick={copyToClipboard}>
						{copyBtnText}
					</button>
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
