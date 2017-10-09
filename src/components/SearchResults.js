import React, { Component } from 'react';
import SearchResult from './SearchResult';
import './SearchResults.css'

class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var searchedFor = this.props.searchedFor;

        if(this.props.loading) {
            return(
                <img className='loading-wheel' src="Rolling.gif" alt="" />
                // <h3 className="loading">Loading Relevant {this.props.category}...</h3>
            )
        }
        if(this.props.results) {
          if (this.props.results.length === 0) {
            return (<h1>Cannot Find Results for {searchedFor}, check your spelling and try again.</h1>)
          } else {
            return(
                <div>
                    <h3 className="showingTop">Showing the Top {this.props.results.length} {this.props.category} Relating to; {searchedFor}</h3>
                    {this.props.results.data.map((result, index) => {
                        return (
                            <SearchResult 
                                result={result} 
                                key={index}
                                resultType={this.props.category} 
                                index={index}
                                query={searchedFor}
                            ></SearchResult>
                        )
                    })}
                    <center><h5 id='presented-by'>Presented by the University of Western Australia</h5></center>
                </div>
            )
          }
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default SearchResults;
