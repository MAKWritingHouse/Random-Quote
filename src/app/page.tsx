'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '../../public/logo.png';

type randomQuoteType = {
  text: string;
  author: string;
};

const Home = () => {
  const [randomQuote, setRandomQuote] = useState<randomQuoteType>({
    text: '',
    author: '',
  });
  const [copyBtnText, setCopyBtnText] = useState('Copy to Clipboard');

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const quotes: { text: string; author: string }[] = await response.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
      setCopyBtnText('Copy to Clipboard');
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(
        `${randomQuote.text} - ${randomQuote.author.replace(', type.fit', '')}`
      )
      .then(() => {
        setCopyBtnText('Copied');
        setTimeout(() => setCopyBtnText('Copy to Clipboard'), 2500);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      <header>
        <a href='#' id='currentPage'>
          <Image
            src={logo}
            alt='Random Quote | MAK Writing House | MAKSTYLE119'
            height={50}
          />
        </a>
      </header>
      <div className='container'>
        <h1>Random Quote</h1>
        <p className='subheading'>Get Inspired and Uplifted!</p>
        <div className='quote-container'>
          <div id='quoteDisplay' className='quote'>
            {randomQuote.text} - {randomQuote.author.replace(', type.fit', '')}
          </div>
          <div className='button-container'>
            <button
              id='generateBtn'
              className='generate-btn'
              onClick={fetchQuotes}
            >
              Random Quote
            </button>
            <button id='copyBtn' className='copy-btn' onClick={copyToClipboard}>
              {copyBtnText}
            </button>
            <a
              id='tweetBtn'
              className='tweet-btn'
              href={`https://twitter.com/intent/tweet?text=${
                randomQuote.text
              } - ${randomQuote.author.replace(', type.fit', '')}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i> Tweet
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p>
          <a href='https://makwritinghouse.com' target='_blank'>
            MAK Writing House{' '}
          </a>
          - Random Quote &copy; {new Date().getFullYear()}. DEVELOP & MAINTAIN
          BY MAK DEVELOPMENT HOUSE.
        </p>
      </footer>
    </>
  );
};

export default Home;
