import React, { Component } from 'react';
import './App.css';
import _ from 'underscore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

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
    	{_.range(props.numberOfStars).map(i =>
      <FontAwesomeIcon key={i} className="fas fa-star" icon="star"/>
      )}
    </div>
  );
};

const Button = (props) => {
	return (
  	<div className="col-2">
    	<button className="btn" disabled={props.selectedNumbers.length === 0}>
      	=
      </button>
    </div>
  )
}

const Answer = (props) => {
	return (
  	<div className="col-5">
    	{props.selectedNumbers.map((number, i) =>
      	<span key={i} onClick={() => props.unselectNumber(number)}>
        	{number}</span>
        )}
    </div>
  );
};

const Numbers = (props) => { 
	const numberClassName = (number) => {
  	if(props.selectedNumbers.indexOf(number) >= 0) {
    	return 'selected';
    }
  }
	return (
  	<div className="card text-center">
    	<div>
      	{Numbers.list.map((number, i) =>
        	<span key={i} className={numberClassName(number)}
          			onClick={() => props.selectNumber(number)}>
              {number}
            </span>
          )}
      </div>
    </div>
  );
};
Numbers.list = _.range(1, 10);

class Game extends React.Component {
	state = {
  	selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
  };
  selectNumber = (clickedNumber) => {
  	if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
  	this.setState(prevState => ({
    	selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  unselectNumber = (clickedNumber) => {
  	this.setState(prevState => ({
    	selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }
	render() {
  	const {selectedNumbers, randomNumberOfStars} = this.state;
  	return (
    	<div className="container">
      	<h3>Play Nine</h3>
        <hr />
        <div className="row">
        	<Stars numberOfStars={randomNumberOfStars} />
        	<Button selectedNumbers={selectedNumbers} />
        	<Answer selectedNumbers={selectedNumbers} 
          				unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers} 
        				 selectNumber={this.selectNumber}/>
      </div>
    );
  };
}

export default App;
