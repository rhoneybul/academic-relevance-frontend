import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            route: {
                home: true,
                academics: false,
                publications: false,
                capability: false,
            }
        }
    }

    isSelected(href, _id) {
        if(_id === href) {
            return true
        } else{
            return false
        }
    }

    render() {

        // var href = window.location.href.split("/")[1].split("?")[0];

        // var homeSelected = this.isSelected(href, "");
        // var academicsSelected = this.isSelected(href, "academic_search");
        // // var publicationsSelected = this.isSelected(href, "publication_search");
        // var capabilitySelected = this.isSelected(href, 'capability_search')

        return (
            <div>
                <div className="navComponent">
                    <img id='menu-img' src="http://static.weboffice.uwa.edu.au/visualid/sites/alpha/img/uwacrest-blue.svg" alt=""/>
                    <h4>
                        <Link className={"navbarlink"} id="home" to="/">Academic Relevance</Link>
                        <Link className={"navbarlink"} id='acad-search' to="/academic_search">Academic Search</Link>
                        <Link className={'navbarlink'} id='capability-search' to='/capability_search'>Capability Search</Link>
                        <Link className={"navbarlink"} id='company-search' to='/company_search'>Company Search</Link>
                    </h4>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Header;