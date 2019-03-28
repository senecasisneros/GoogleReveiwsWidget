import axios from "axios";

export default axios.create({
  baseURL:
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4`,
  params: {
      key: process.env.REACT_APP_KEY
  }
});
