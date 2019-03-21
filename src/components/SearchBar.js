import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log("this.state.term:", this.state.term);

    // this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        < form className = "ui form"
        onSubmit={this.onFormSubmit} >
          <div className="ui form">
            <div className="field">
              <label> Search for video </label>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
