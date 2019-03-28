import React, { Component } from "react";
import SearchBar from "./SearchBar";
import google from "../apis/google";


class App extends Component {

  onTermSubmit = async term => {
    const response = await google.get('', {
      params: {
        fields: 'formatted_address,geometry,icon,id,name,permanently_closed,photo,place_id,type,url,user_ratings_total,formatted_phone_number,opening_hours,website,review'
      }
    });
    console.log("response", response.data.result);
  };


  render() {
    return (
      <div className="App">
        < SearchBar onTermSubmit={this.onTermSubmit}/ >
      </div>
    );
  }
}

export default App;

