import React, { Component } from 'react'
import SuggestedCompany from './SuggestedCompany';
import './SuggestedCompany.css'

export default class SuggestedCompanies extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }
  componentDidMount() {
    var BASE_URL='http://139.59.243.97/suggestions/'
    var URL = BASE_URL + encodeURIComponent(this.props.query);
    fetch(URL).then(
      res => res.json()
    ).then(
      json => {
        this.setState({
          results: json
        })
      }
    ).catch(
      this.setState({results: undefined})
    )
  }
  render() {
    if (this.state.results) {
      console.log(this.state.results)
      if (this.state.results === undefined) {
        return (<h1>Couldn't Find any Suggested Companies</h1>)
      } else {
        return (
          <div className='suggested_companies_container'>
            {this.state.results.map((result, index) => {
              return (
                <SuggestedCompany
                  result = {result}
                ></SuggestedCompany>
              )
            })}
          </div>
        )
      }
    } else {
      return <div></div>
    }
  }
}
