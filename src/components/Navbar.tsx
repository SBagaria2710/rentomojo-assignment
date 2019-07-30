import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Navbar.css'

export const Navigation = () => {
    return (
        <nav style={{borderBottom: '0.2px solid grey', marginBottom: '2em'}} className='navbar navbar-expand-lg navbar-light nav-btm'>
            <a href='/' className='navbar-brand' style={{fontWeight: 500, alignContent: 'center', paddingTop: '15px'}}>
                <img src="https://www.rentomojo.com/public/images/logo.svg" alt="RentoMojo"/>
            </a>
            <div className="collapse navbar-collapse" style={{display: 'flex !important'}}>
                <ul className="navbar-nav ml-auto">
                    <NavItem path='/' name='Home' />
                </ul>
            </div>
        </nav>
    );
}

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    return (
      <li className={liClassName}>
        <Link to={props.path} className="nav-link">
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </Link>
      </li>
    );
  }

export default Navigation;