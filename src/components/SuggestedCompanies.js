import React, { Component } from 'react'
import SuggestedCompany from './SuggestedCompany';
import './SuggestedCompany.css'

export default class SuggestedCompanies extends Component {
  constructor(props) {
    super(props)
    this.state={
      loading: true
    }
  }
  componentDidMount() {
    var BASE_URL='http://localhost:5000/suggestions/'
    // var BASE_URL='http://139.59.243.97/suggestions/'
    var URL = BASE_URL + encodeURIComponent(this.props.query);
    fetch(URL).then(
      res => res.json()
    ).then(
      json => {
        this.setState({
          results: json,
          loading: false
        })
      }
    ).catch(
      this.setState({results: undefined})
    )
  }
  render() {
    if (this.state.loading) {
      return(
        <img className='loading-wheel' src="Rolling.gif" alt="" />
      )
    }
    if (this.state.results) {
      console.log(this.state.results)
      if (this.state.results.length === undefined) {
        return (<h1>Couldn't Find any Suggested Companies</h1>)
      } else {
        return (
          <div>
            <h1>Couldn't find company, do you wish to add one of the following;</h1>
            <div className='suggested_companies_container'>
              {this.state.results.map((result, index) => {
                return (
                  <SuggestedCompany
                    result = {result}
                  ></SuggestedCompany>
                )
              })}
            </div>
          </div>
        )
      }
    } else {
      return <div></div>
    }
  }
}
