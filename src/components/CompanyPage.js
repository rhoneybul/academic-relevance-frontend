import React, { Component } from 'react';
// import AcademicData from './AcademicData';

class CompanyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: this.props.match.params.id,
        }
    }

    componentDidMount() {
      var symbol = this.state.id.split(",")[0]
      var market = this.state.id.split(",")[1]
      console.log(symbol, market)
      var url = 'http://localhost:5000/company_data/?symbol=' + symbol + '&market=' + market;
      console.log(url)
      fetch(url).then(
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
          return (<h1>Cannot fetch company data.</h1>)
        } else {
          return (
            <div>
              <h1>{this.state.results.Name}</h1>
              <p>{this.state.results["Display Description"]}</p>
            </div>
          )
        }
      } else {
        return <img className='loading-wheel' src="../Rolling.gif" alt="" />
      }
    }
}

export default CompanyPage;
