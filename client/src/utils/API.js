import axios from "axios";

export default {
  searchBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  }
};
