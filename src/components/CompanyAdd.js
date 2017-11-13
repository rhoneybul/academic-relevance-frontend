import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './CompanyAdd.css'

class componentName extends Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id
    const symbol = id.split(",")[0]
    const market = id.split(',')[1]
    this.state = {
      market: market,
      symbol: symbol,
      loading: true,
    } 

  }

  componentDidMount() {
    const companySymbol = this.state.symbol
    const companyMarket = this.state.market
    var QUERY_URL = 'http://localhost:5000/new_company/?symbol='+companySymbol+'&market='+companyMarket
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
            <Link to={"/company/"+this.state.symbol+","+this.state.market}>
              <h3>
                Symbol: {this.state.symbol}, Market: {this.state.market}
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