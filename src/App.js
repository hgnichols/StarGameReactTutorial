import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Game />
      </div>
    );
  }
}


const Stars = (props) => {
	return (
  	<div className="col-5">
      <FontAwesomeIcon icon="fas fa-star"/>
      <i className="fa fa-star"></i>
    	<i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
  )
}

const Button = (props) => {
	return (
  	<div className="col-2">
    	<button>=</button>
    </div>
  )
}

const Answer = (props) => {
	return (
  	<div className="col-5">
    	...
    </div>
  )
}

const Numbers = (props) => {
	return (
  	<div className="card text-center">
    	<div>
      	<span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  );
}

class Game extends React.Component {
	render() {
  	return (
    	<div className="container">
      	<h3>Play Nine</h3>
        <hr />
        <div className="row">
        	<Stars />
        	<Button />
        	<Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

export default App;
