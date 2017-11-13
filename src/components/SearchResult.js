import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SearchResult.css';

class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.academicClick = this.academicClick.bind(this)
    }

    academicClick(q, res) {
        // var base_url = 'http://localhost:5000'
        var base_url = 'http://128.199.196.81'
        fetch(base_url + '/path/academic', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: q,
                academic: res.name,
                academicId: res.id
            })
        })
    }

    capabilityClick(q, tag, tag_id) {
        // var base_url = 'http://localhost:5000'
        var base_url = 'http://128.199.196.81'
        fetch(base_url + '/path/capability', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: q,
                tag: tag,
                id: tag_id
            })
        })
    }


    render() {
        if (this.props.resultType === 'Company') {
            const displayDescription = this.props.result["Display Description"];
            return (
                <div className='resultDiv'>
                    <Link 
                        to={"/company/"+this.props.result.symbol+","+this.props.result.market}
                        className='companyLink'
                    >
                    <h4 className='company'>
                        <span className="companyName">
                            {this.props.result.Name}
                        </span>
                        <br />
                        <span className='companyDetails'>
                                Symbol: {this.props.result.symbol}, Market: {this.props.result.market}
                        </span>
                    </h4>
                    </Link>
                    <p className="companyDescription">
                        { 
                            displayDescription.length > 150 ? 
                                displayDescription.slice(0, 150)+'...' :
                                displayDescription
                        }
                    </p>
                </div>
            )
        }
        if (this.props.resultType === "Academics") {
            return (
                <div className="resultDiv">
                    <Link to={"/academic/"+this.props.result.id}>
                        <h4 className="result">{this.props.result.name}</h4>
                    </Link>
                    <div className="topTags">
                        <h4>Top Tags:</h4>
                        <div className="topTagResults">
                            {Object.keys(this.props.result['top tags']).map(
                                  (key, index) => {
                                    return (
                                        <Link className='tagLink' key={index} to={'/capability/'+this.props.result['top tags'][key]}>
                                            <h5 className='tagResult'>{key}</h5>
                                        </Link>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            );
        }
        if (this.props.resultType === "Capability") {
            return (
                <div className="resultDiv">
                    <Link
                        className="capabilityLink"
                        to={"/academic/"+this.props.result.id}
                        onClick={() => this.academicClick(this.props.query, this.props.result)}
                    >
                        <h4 className="result">{this.props.result.name}</h4>
                    </Link>
                    <div className="topTags">
                        <h4>Top Tags:</h4>
                        <div className="topTagResults">
                            {Object.keys(this.props.result['top tags']).map(
                                (key, index) => {
                                    return (
                                        <Link
                                            className='tagLink'
                                            key={index}
                                            to={'/capability/'+this.props.result['top tags'][key]}
                                            onClick={
                                                () => this.capabilityClick(
                                                        this.props.query,
                                                        key,
                                                        this.props.result['top tags'][key]
                                                )
                                            }
                                        >
                                            <h5 className='tagResult'>{key}</h5>
                                        </Link>
                                    )
                                }
                            )}
                        </div>
                    </div>

                </div>
            )
        }
    }
}

export default SearchResult;
