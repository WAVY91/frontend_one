import React from 'react'
import { Link} from 'react-router-dom'
// import Signuserup from '../pages/Signuserup';

const Navbar = () => {
  return (
    <div>
        <h3>Home</h3>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/signuserup">Signuserup</Link></li>
            <li><Link to="/props">Props</Link></li>

        </ul>
    </div>
  )
}

export default Navbar