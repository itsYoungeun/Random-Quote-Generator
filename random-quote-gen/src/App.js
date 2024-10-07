import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import twitterLogo from './images/twitter.png';

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [buttonColor, setButtonColor] = useState('#16a085');
  const [fontColor, setFontColor] = useState('#16a085');
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    '#1abc9c',
    '#2ecc71',
    '#34495e',
    '#e67e22',
    '#e74c3c',
    '#8e44ad',
    '#fd79a8',
    '#7f8c8d',
    '#d35400',
    '#c0392b',
    '#9b59b6',
    '#4cd137',
    '#f6b93b',
    '#c8d6e5',
    '#6ab04c',
    '#00a8ff'
  ];

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
    const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    setQuote({ text: randomQuote.quote, author: randomQuote.author });
  };

  const changeColors = () => {
    const nextIndex = (colorIndex + 1) % colors.length;
    const nextColor = colors[nextIndex];
    
    document.body.style.backgroundColor = nextColor;
    setButtonColor(nextColor);
    setFontColor(nextColor);
    setColorIndex(nextIndex);
  };
  
  
  useEffect(() => {
    fetchQuotes();
    changeColors();
  }, []);

  return (
    <>
      <div id="wrapper">
        <div id="quote-box">
          <div id="text" style={{ color: fontColor }}>
            {loading ? (<p>Loading...</p>) : (<blockquote><p>"{quote.text}"</p></blockquote>)}
          </div>
          <div id="author" style={{ color: fontColor }}>
            {loading ? null : <span>- {quote.author}</span>}
          </div>
          <div className="buttons">
            <a className="button" id="tweet-quote" target="_blank" style={{ backgroundColor: buttonColor }} href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}>
              <img width="21rem" height="16rem" src={twitterLogo} alt="Twitter Logo" />
            </a>
            <button onClick={() => {
              generateRandomQuote(quotes); 
              changeColors();
              }} 
              className="button" 
              id="new-quote" 
              style={{ backgroundColor: buttonColor }}>
                New Quote
            </button>
          </div>
        </div>
      </div>
      <footer><h1><a href="https://github.com/JYoungeun" target="_blank">by Youngeun</a></h1></footer>
    </>
  );
}

export default App;