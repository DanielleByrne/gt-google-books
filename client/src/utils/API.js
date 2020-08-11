import axios from "axios";

export default {
  searchBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    //not sure if I'm making the api call wrong? I get a response but the data is undefined
  }
};
