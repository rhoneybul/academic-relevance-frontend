import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import CapabilitySearch from './components/CapabilitySearch.js'
import AcademicSearch from './components/AcademicSearch.js';
import Capability from './components/Capability.js';
import Academic from './components/Academic.js';
import CompanySearch from './components/CompanySearch.js';
import CompanyPage from './components/CompanyPage.js';
import CompanyAdd from './components/CompanyAdd.js';

import Home from './Home.js';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />  
        <Route exact path='/capability_search' component={CapabilitySearch} />
        <Route exact path='/academic_search' component={AcademicSearch} />
        <Route exact path='/company_search' component={CompanySearch} />
        <Route path='/capability/:id' component={Capability}></Route>
        <Route path='/academic/:id' component={Academic}></Route>
        <Route path='/company/:id' component={CompanyPage}></Route>
        <Route path='/addcompany/:id' component={CompanyAdd}></Route>
      </ Switch>    
    )
  }
  
}

export default Main;