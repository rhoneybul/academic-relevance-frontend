import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './CompanyAdd.css'

class componentName extends Component {
  constructor(props) {
    super(props)
    const args = this.props.match.params.id
    const searchString = args.split(",")[0]
    const id = args.split(',')[1]
    this.state = {
      id: id,
      searchString: searchString,
      loading: true,
    } 

  }

  componentDidMount() {
    // const companySymbol = this.state.symbol
    // const companyMarket = this.state.market
    var BASE_URL = 'http://localhost:5000/'
    // var BASE_URL = 'http://139.59.243.97/'
    var QUERY_URL = BASE_URL + 'new_company/?name='+this.state.searchString+'&id='+this.state.id
    console.log(QUERY_URL)
    fetch(QUERY_URL).then(
      res => res.json()
    ).then(
      json => {
        this.setState({
          result: json.response,
          loading: false,
        })
      }
    ).catch(
      this.setState({result: "ERROR"})
    )
  }

  render() {
    if (!this.state.loading) {
      if (this.state.result === "ERROR") {
        return (<h1>Could not add Company</h1>)
      } else {
        return (
          <div>
            <h1>Company Added!</h1>
            <Link to={"/company/"+this.state.id}>
              <h3>
                  {this.state.searchString}
              </h3>
            </ Link>
          </ div>
        )
      }
    } else {
      return (
        <div>
          <h1>Adding Company to Database...</h1>
          <img className = 'loading-wheel' src="../Rolling.gif" alt="" />
        </div>
      ) 
    }
  }
}

export default componentName