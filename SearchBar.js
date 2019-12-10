import React, { Component } from 'react';

class SearchBar extends React.Component
{

  state = {term: '' };

  onInputClick(){
    console.log("Input was Clicked");
  }
  render() 
  {
    return (
    <div className="ui segment">
      <form className="ui form">
        <div className = "feild">
        <label>Image Search</label>
          <input type="text" 
          value={this.state.term}
          onChange={(e) => this.setState({term: e.target.value })}
          onClick = {this.onInputClick}
          />
        </div>
      </form>
    </div>
    )
  }
}

export default SearchBar;