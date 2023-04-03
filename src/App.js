import React, { useState, useEffect } from 'react';
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState({
    author: null,
    text: null
  });

  const fetchQuote = async () => {
    return await fetch('https://raw.githubusercontent.com/rolling-scopes-school/file-storage/random-jokes/quotes.json')
    .then(response => response.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length)
      setQuote(data[randomNum]);
    })
  }
  // console.log(fetchQuote())

  const generate = () => {
    setQuote(fetchQuote);
  }

  useEffect(() => {
   setQuote(fetchQuote);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
      <Quote quote={quote} />

      <button onClick={generate}>Сгенерировать новую цитату</button>
    </div>
    </div>
  );
}

export default App;
