import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section id="wrapper">
      <div id="quote-box">
        <div id="text-box">
          <span id="text"></span>
        </div>
        <div id="author-box">
          <span id="author"></span>
        </div>
        <div class="buttons">
          <a class="button" id="tweet-quote"></a>
          <a class="button" id="tumblr-quote"></a>
          <button class="button" id="new-quote">New Quote</button>
        </div>
      </div>
    </section>
  );
}

export default App;
