import React, { useState, useEffect } from 'react';
import Quote from "./components/Quote";
import Empty from './components/Empty';

function App() {
  const [quote, setQuote] = useState([]);
  const [dataQuote, setDataQuote] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      return await fetch('https://raw.githubusercontent.com/rolling-scopes-school/file-storage/random-jokes/quotes.json')
      .then(response => response.json())
      .then((data) => {
        setDataQuote(data);
      })
    }
    fetchQuote();
  }, [])

  const addOneQuote = () => {
    let randomNum = Math.floor(Math.random() * dataQuote.length)
    setQuote(dataQuote[randomNum]);
  }


  return (
    <div className="App">
      <div className="wrapper">
      
      {(quote.length === 0) ? <Empty /> : <Quote quote={quote} />}

      <button onClick={addOneQuote}>Сгенерировать новую цитату</button>

    </div>
    </div>
  );
}

export default App;
