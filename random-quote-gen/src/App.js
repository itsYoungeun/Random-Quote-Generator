import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const data = await response.json();
      setQuotes(data.quotes);
      generateRandomQuote(data.quotes);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateRandomQuote = (quotesArray) => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomIndex];
    setQuote({ text: randomQuote.quote, author: randomQuote.author });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="text">
          {loading ? (<p>Loading...</p>) : (<blockquote><p>"{quote.text}"</p></blockquote>)}
        </div>
        <div id="author">
          {loading ? null : <span>- {quote.author}</span>}
        </div>
        <div className="buttons">
          <a className="button" id="tweet-quote" target="_top">
            <img width="21rem" height="16rem" src="/images/twitter.png" alt="Twitter Logo"/>
          </a>
          <button onClick={() => generateRandomQuote(quotes)} className="button" id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
