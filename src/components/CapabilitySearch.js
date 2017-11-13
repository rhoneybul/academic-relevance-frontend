import React, { Component } from 'react';
import SearchResults from './SearchResults';

class CapabilitySearch extends Component {

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
      var baseUrl = 'http://128.199.196.81/search/tag/'
      // var baseUrl = 'http://localhost:5000/search/tag/'
      var query = baseUrl + encodeURIComponent(this.state.query);
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
                  <h1>Research Capability Search</h1>
                  <form onSubmit={this.handleSearch}>
                      <input type="text" className="form-control" placeholder="Search for a Research Capability..." value={this.state.query} onChange={this.handleChange} />
                      <br/>
                      <input type="submit" className="btn" value="Find Research Capabilities" />
                  </form>
                  <SearchResults
                    loading={this.state.isLoading}
                    category={"Capability"}
                    query={this.state.query}
                    searchedFor={this.state.searchedFor}
                    results={this.state.results}
                  />
              </center>
          </div>
      );
  }
}

export default CapabilitySearch;
