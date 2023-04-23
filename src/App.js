import React, { useState } from 'react';
import Quote from "./components/Quote";
import Empty from './components/Empty';

function App() {
  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    return await fetch('https://raw.githubusercontent.com/rolling-scopes-school/file-storage/random-jokes/quotes.json')
    .then(response => response.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length)
      
      setQuote(data[randomNum]);
    })
  }

  return (
    <div className="App">
      <div className="wrapper">
      
      {(quote.length === 0) ? <Empty /> : <Quote quote={quote} />}

      <button onClick={fetchQuote}>Сгенерировать новую цитату</button>

    </div>
    </div>
  );
}

export default App;
