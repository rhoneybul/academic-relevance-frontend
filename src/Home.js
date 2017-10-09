import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeDiv">
        <center>
        <h1>Academic Relevance Search Engine</h1>
        <div className='textDiv'>
          <p>
            This search engine is designed to identify talent at the University of Western Australia, related to particular topic areas.
          </p>
          <p>
            You can either search for academics relevant to a particular topic <Link className="intext" to="/academic_search">here</Link>.
          </ p>
          <p>
            Or, you can search for academic capabilities <Link className='intext' to='/capability_search'>here</ Link>.
          </ p>
        </div>
        </center>
        <img src="http://static.weboffice.uwa.edu.au/visualid/sites/alpha/img/uwacrest-blue.svg" alt=""/>
      </div>
    );
  }
}

export default Home;
