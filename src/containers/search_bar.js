import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
  	super(props);

  	this.state = {term: ''};
  	// If you've got a call back to this (onInputChange)
  	// you need to bind it to this
  	this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
  	console.log(event.target.value);
  	this.setState ({term: event.target.value});
  }

  onFormSubmit(event) {
  	event.preventDefault();
  }

  render() {
  	return (
  		<form onSubmit={this.onFormSubmit} className="input-group">
  		  <input 
  		    placeholder="Get the forecast"
  		    className="form-control"
  		    value={this.state.term}
  		    onChange={this.onInputChange}/>
  		    <span className="input-group-btn">
  		      <button type="submit" className="btn btn-secondary" >Submit</button>
  		    </span>
  		</form>
  		)
    }
}

db45db0337e2fb330f52bf44be1a67da