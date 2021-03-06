import React, { Component } from 'react';
// import AcademicData from './AcademicData';
import './CompanyPage.css';
import {Link} from 'react-router-dom'
import {Row} from 'react-bootstrap';
import Config from '../global-vars.json'


class CompanyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: this.props.match.params.id,
        }
    }

    componentDidMount() {
      var BASE_URL = Config.Company.dev
      if (process.env.NODE_ENV === "production") {
        BASE_URL = Config.Company.production
      }
      var url = BASE_URL + 'company_data/'+this.state.id
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
              <Row className='company-page-header'>
                {/* <Col xs={1}> */}
                  <img src={this.state.results.logoUrl} alt="" className="company-logo"/> 
                {/* </Col> */}
                {/* <Col xs={9}> */}
                  <h1 className='company-name'>{this.state.results.name}</h1>
                {/* </Col> */}
              </Row>
              <p className='description'>{this.state.results.description}</p>
               <h3 className="tag_header">Relevant Academic Topics</h3>
               <div className='tags_container'>
                 {this.state.results.tags.map((el, i) => {
                  return (
                    <Link to={'/capability/'+el[1]}>
                      <h5 className="company_tags">{el[0]}</h5>
                    </Link>
                  )
                })}
               </div> 
            </div>
          )
        }
      } else {
        return <img className='loading-wheel' src="../Rolling.gif" alt="" />
      }
    }
}

export default CompanyPage;
