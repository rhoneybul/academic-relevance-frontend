import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SuggestedCompany.css';
import {Row, Col} from 'react-bootstrap';

export default class SuggestedCompany extends Component {

  render() {
    const result = this.props.result
    const description = result.description
    console.log(result)
    if (description !== undefined) {
      return (
        <div className='resultDiv'>
            <Row className='company-header'>
                <Col xs={3}>
                    <img id="company-logo" src={this.props.result.logoUrl} alt=""/>
                </Col>
                <Col xs={9}>
                    <h4 className='company-text'>{this.props.result.name}</h4>
                </Col>
            </Row>
            <p className="companyDescription">
                { 
                    description.length > 200 ? 
                        description.slice(0, 200)+'...' :
                        description
                }
            </p>
            <Link to={"/addcompany/"+result.name+","+result.id}>
              <h4 className="company-add">Add Company</h4>
            </Link>
        </div>
        // <div className='suggested_company'>
        //   <h1>{result.name}</h1>
        //   {/* <h3>Symbol: {result.symbol}, Market: {result.market}</h3> */}
        //   <p>
        //     { 
        //       description.length > 150 ? 
        //           description.slice(0, 150)+'...' :
        //           description
        //     }
        //   </p>

        // </div>
      )
    }
    return <div></div>
  }
}
