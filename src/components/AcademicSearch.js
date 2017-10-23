import React, { Component } from 'react';
import './AcademicSearch.css';
import SearchResults from './SearchResults';

class AcademicSearch extends Component {

    constructor(props) {
        super(props);

        var initial_query = window.location.href.split('#')[1]

        this.state = {
            query: initial_query !== undefined ? initial_query : '',
            isLoading: false,
            searchedFor: initial_query !== undefined ? initial_query : '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
      if (this.state.query !== '') {
          this.handleSearch()
      }
    }

    handleChange(e) {
        this.setState({
            query: e.target.value
        })
    }

    handleSearch(e) {
        try {
          e.preventDefault();
        } catch(err) {}
        this.setState({
            isLoading: true
        })
        // var baseUrl = 'http://localhost:5000/search/academics/'
        var baseUrl = 'http://128.199.196.81/search/academics/'
        var query = baseUrl + encodeURIComponent(this.state.query);
        fetch(query).then(
            res => res.json()
        ).then(
            json => {
              if (window.location.href.substring('#')) {
                window.location.href = window.location.href.split('#')[0] + `#${this.state.query}`
              }

                this.setState({
                    isLoading: false,
                    searchedFor: this.state.query,
                    results: json
                })
            }
        )
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Academic Search Component</h1>
                    <form onSubmit={this.handleSearch}>
                        <input type="text" className="form-control" placeholder="Search for an Academic..." value={this.state.query} onChange={this.handleChange} />
                        <br/>
                        <input type="submit" className="btn" value="Find Relevant Academics" />
                    </form>
                    <SearchResults
                      loading={this.state.isLoading}
                      category={"Academics"}
                      query={this.state.query}
                      searchedFor={this.state.searchedFor}
                      results={this.state.results}
                    />
                </center>
            </div>
        );
    }
}

export default AcademicSearch;
