import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Config from '../global-vars.json';

class CompanySearch extends Component {

  constructor(props) {
      super(props);

      var init = window.location.href.split('#')[1]

      this.state={
          query: init !== undefined ? init : '',
          isLoading: false,
          searchedFor: init !== undefined ? init : '',
          results: null
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange(e) {
    this.setState({
        query: e.target.value
    })
  }

  componentDidMount() {
    if (this.state.query !== '') {
      this.handleSearch()
    }
  }

  handleSearch(e) {
      try {
          e.preventDefault();
      } catch(err) {}

      this.setState({
          isLoading: true
      })
      var BASE_URL = Config.Company.dev
      if (process.env.NODE_ENV === "production") {
        BASE_URL = Config.Company.production
      }
      BASE_URL += 'search/'
      var query = BASE_URL + encodeURIComponent(this.state.query);
      fetch(query).then(
          res => res.json()
      ).then(
          json => {
              if (window.location.href.substring('#')) {
                window.location.href = window.location.href.split("#")[0] + `#${this.state.query}`
              }
              this.setState({
                  isLoading: false,
                  searchedFor: this.state.query,
                  results: json,
                  query: ''
              })
          }
      )
  }

  render() {
      return (
          <div>
              <center>
                  <h1>Company Search</h1>
                  <form onSubmit={this.handleSearch}>
                      <input type="text" className="form-control" placeholder="Search for an Industry Partner..." value={this.state.query} onChange={this.handleChange} />
                      <br/>
                      <input type="submit" className="btn" value="Find Industry Partners" />
                  </form>
                  <SearchResults
                    loading={this.state.isLoading}
                    category={"Company"}
                    query={this.state.query}
                    searchedFor={this.state.searchedFor}
                    results={this.state.results}
                  />
              </center>
          </div>
      );
  }
}

export default CompanySearch;
