import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import CapabilitySearch from './components/CapabilitySearch.js'
import AcademicSearch from './components/AcademicSearch.js';

import Home from './Home.js';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />  
        <Route exact path='/capability_search' component={CapabilitySearch} />
        <Route exact path='/academic_search' component={AcademicSearch} />
      </ Switch>    
    )
  }
  
}

export default Main;