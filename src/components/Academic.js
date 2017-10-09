import React, { Component } from 'react';
import AcademicData from './AcademicData';
import './Academic.css';

class Academic extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: this.props.match.params.id,
        }
    }

    componentDidMount() {
      var baseUrl = 'http://128.199.207.88/academics/'
      var query = baseUrl + encodeURIComponent(this.state.id);
      fetch(query).then(
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
        if (this.state.results === undefined) {
          return (<h1>Cannot fetch academic data.</h1>)
        } else {
          return (
            <div>
              <AcademicData results={this.state.results}/>
            </div>
          )
        }
      } else {
        return <img className='loading-wheel' src="../Rolling.gif" alt="" />
      }
    }
}

export default Academic;
