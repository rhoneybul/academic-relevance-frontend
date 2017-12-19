import React, { Component } from 'react';
import CapabilityData from './CapabilityData';
import './Capability.css';

class Capability extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: this.props.match.params.id,
        }
    }

    componentDidMount() {
      var baseUrl = 'http://localhost:5000/search/tags/'
      if (process.env.NODE_ENV === 'production'){
          baseUrl = 'http://128.199.196.81/search/tags/'
      };
      var query = baseUrl + encodeURIComponent(this.state.id);
      try {
        fetch(query).then(
          res => res.json()
        ).then(
          json => {
            this.setState({
              results: json,
              tag: json.tag
            })
          }
        )
      } catch (e) {
        this.setState({
          results: [],
        })
      }

    }

    render() {
      if (this.state.results) {
        if (this.state.results.length === 0) {
          return (
            <h1>Tag not Found.</h1>
          )
        } else {
          return (
            <div>
              <CapabilityData results={this.state.results} tag={this.state.tag}/>
            </div>
          )
        }
      } else {
        return <img className='loading-wheel' src="../Rolling.gif" alt="" />
      }

    }
}

export default Capability;
