import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Navbar.css'

export const Navigation = () => {
    return (
        <nav style={{borderBottom: '0.2px solid grey'}} className='navbar navbar-expand-lg navbar-light'>
            <p className='navbar-brand' style={{fontWeight: 500, alighContent: 'center', paddingTop: '15px'}}>
                SSF
            </p>
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