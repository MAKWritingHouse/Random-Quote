'use client';

import { IQuote } from '@/app/interfaces/home';
import { useLayoutEffect, useState } from 'react';
import './style.scss';

const Home = () => {
	const [quote, setQuote] = useState<IQuote>({
		text: '',
		author: '',
	});
	const [copyBtnText, setCopyBtnText] = useState<string>('Copy to Clipboard');

	const fetchQuotes = async (): Promise<void> => {
		try {
			const response = await fetch(`/api/quote`).then((res) => {
				return res.json();
			});
			setQuote(response);
			setCopyBtnText('Copy to Clipboard');
		} catch (error) {
			console.error('Error fetching quotes:', error);
		}
	};

	const copyToClipboard = (): void => {
		navigator.clipboard
			.writeText(`${quote.text} - ${quote.author.replace(', type.fit', '')}`)
			.then(() => {
				setCopyBtnText('Copied');
				setTimeout(() => setCopyBtnText('Copy to Clipboard'), 2500);
			});
	};

	useLayoutEffect(() => {
		fetchQuotes();
	}, []);

	return (
		<div className="container">
			<h1>Random Quote</h1>
			<p className="subheading">Get Inspired and Uplifted!</p>
			<div className="quote-container">
				<div id="quoteDisplay" className="quote">
					{quote.text} - {quote.author.replace(', type.fit', '')}
				</div>
				<div className="button-container">
					<button
						id="generateBtn"
						className="generate-btn"
						onClick={fetchQuotes}
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
							quote.text
						} - ${quote.author.replace(', type.fit', '')}`}
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
