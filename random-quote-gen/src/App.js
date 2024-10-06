import React from 'react';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="text-box">
          <span id="text"></span>
        </div>
        <div id="author-box">
          <span id="author"></span>
        </div>
        <div class="buttons">
          <a class="button" id="tweet-quote" target="_top"></a>
          <a class="button" id="tumblr-quote" target="_blank"></a>
          <button class="button" id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
