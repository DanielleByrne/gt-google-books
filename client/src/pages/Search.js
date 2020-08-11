import React, { Component } from "react";
import API from "../utils/API";


class Search extends Component {
    constructor(props){
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
  state = {
    results: [],
  };

  componentDidMount (){
      this.userSearch()
  }
  userSearch = (query) => {
    API.searchBook(query).then(function (response) {
      this.setState({ results: response });
      console.log(response);
    }.bind(this))
  };

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value });
  }
  
  handleFormSubmit(e) {
    e.preventDefault();
    this.userSearch(this.state.name);
  }
  render() {
    return (
        <div className="container">
            <h1 style={{ marginTop: "30px" }}>Search for a book!</h1>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.name}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a Book"
              id="search"
            />
            <br />
            <button onClick={this.handleFormSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Search;
