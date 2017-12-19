import React, { Component } from 'react';
// import SearchResult from './SearchResult';
import {Link} from 'react-router-dom';
import './AcademicData.css'

class AcademicData extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var results = this.props.results.data;
        var name = this.props.results.name;
        console.log(this.props.results.data.length)
        return (
          <div>
            <h1 className="academicName">
              <a href={this.props.results.url} target="_blank">
                {name}
              </a>
            </h1>
            <h5 className="school">{this.props.results.school}</h5>
            <h5 className='capabilities'>{this.props.results.data.length} Capabilities Found</h5>
            {
              results.map((result, index) => {
                return (
                  <div>
                    <Link to={"/capability/"+result['tag-id']}>
                      <h5 className='academicResult'>{index+1}: {result.tag}, Frequency: {result.freq}</h5>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        )
    }
}

export default AcademicData;
