import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
          <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="#">Ticketing System</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Link 2</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Link 3</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header