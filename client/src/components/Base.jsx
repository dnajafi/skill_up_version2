import React from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
    <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink style={{fontFamily: 'Satisfy'}} to="/">Skill Up</IndexLink>
      </div>
      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}
    </div>
    { /* child component will be rendered here */ }
    {children}
  </div>
);

export default Base;
