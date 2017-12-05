import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SuggestedCompany.css'

export default class SuggestedCompany extends Component {

  render() {
    const result = this.props.result
    const description = result.description
    if (description !== undefined) {
      return (
        <div className='suggested_company'>
          <h1>{result.name}</h1>
          {/* <h3>Symbol: {result.symbol}, Market: {result.market}</h3> */}
          <p>
            { 
              description.length > 150 ? 
                  description.slice(0, 150)+'...' :
                  description
            }
          </p>
          <Link to={"/addcompany/"+result.symbol+","+result.market}>
            <h4>Add Company</h4>
          </Link>
        </div>
      )
    }
    return <div></div>
  }
}
