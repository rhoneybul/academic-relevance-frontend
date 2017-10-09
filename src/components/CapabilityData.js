import React, { Component } from 'react';
// import SearchResult from './SearchResult';
import { Link } from 'react-router-dom';
import './CapabilityData.css'

class CapabilityData extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var results = this.props.results;
        var tag = this.props.tag;

        return (
          <div>
            <h1 className='tagName'>{tag}</h1>
            {
              results.data.map((result, index) => {
                return (
                  <div>
                    <Link to={"/academic/"+result.id}>
                      <h5 className='tagResult'>{index+1}: {result.name}, Frequency: {result.freq}</h5>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        )
    }
}

export default CapabilityData;
