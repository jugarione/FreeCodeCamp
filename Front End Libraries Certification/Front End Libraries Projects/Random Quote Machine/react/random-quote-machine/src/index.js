import React from 'react'
import ReactDom from 'react-dom'

import {quotes} from './quotes'
import './index.css';

class RandomQuotesMachine extends React.Component{
  constructor(props) {
    super(props);
  
  this.state = {
    quote: quotes[this.randomizer(0, quotes.length - 1)].quote,
    author: '- ' + quotes[this.randomizer(0, quotes.length - 1)].author
    
  }

this.randomizer = this.randomizer.bind(this);
this.clickHandler = this.clickHandler.bind(this);
  }

randomizer(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

clickHandler() {
  let chosenQuote = this.randomizer(0, quotes.length - 1);
  
  this.setState({
    quote: quotes[chosenQuote].quote,
    author: '- ' + quotes[chosenQuote].author
  })
}

  render() { 
    return(
      <div id='vertical-center' className='h-100'>
      <div id='quote-box' className='container p-5'>
        <div  className="row">
          <div className='col'>
          <p className='text-center display-3' id='text'><i className="fas fa-quote-left"></i>{" " +this.state.quote}</p>
          </div>
        </div>
        <div  className="row">
          <p className='text-end lead' id='author'>{this.state.author}</p>
        </div>

        <div className='row p- m-1'>
          <div className='col inline text-start'>
            <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world">
              <a id='tweet-quote' className='btn btn-dark btn-lg'><i class="fab fa-twitter"></i></a>
            </a>
          </div>
          <div className='col text-end'>
            <button className='btn btn-dark btn-lg' onClick={this.clickHandler} id='new-quote'>New Quote</button>
        </div>
        </div>
      </div>
      </div>
  );
  }
  }


  // Binding
ReactDom.render(<RandomQuotesMachine />, document.getElementById('root'))
