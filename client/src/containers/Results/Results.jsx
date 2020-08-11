import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
  state = {
    savedBooks: [],
  };
  //component did mount would grab all saved books with savedBooks(), showAllSaved made in api.js file
  //pulls all saved books from db and displays them in state
  //renders in render return
  //for all books the user saved
  render() {
    return <div></div>;
  }
}

export default Results;
