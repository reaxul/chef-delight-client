import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({to,children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-warning text-decoration-none"
            :  "text-secondary text-decoration-none"
        }
      >{children}
        
      </NavLink>
    );
};

export default ActiveRoute;