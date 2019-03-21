import React, { Component } from "react";
import BusinessDetails from "./BusinessDetails";
import Map from "./Map";
import Review from "./Review";
import ReviewList from "./ReviewList";
import SearchBar from "./SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <BusinessDetails />
        <Map />
        <Review />
        <ReviewList />
      </div>
    );
  }
}

export default App;


