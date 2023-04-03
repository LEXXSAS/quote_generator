import React from 'react'

function Quote({quote}) {
  return (
    <div className='quote'>
        <div className='title' title={quote.author}><p className='p'>{quote.author}</p></div>

        <blockquote>
            {quote.text}
        </blockquote>

        {/* <div className="character" title={quote.author}>{quote.author}</div> */}
    </div>
  )
}

export default Quote
