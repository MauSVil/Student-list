import React from 'react'
import {Link} from '@reach/router'
import './styles/Nav.css'

const Nav = function(){
    return(
        <nav>
            <Link to="/" className="Link">
                Home
            </Link>
            <Link to="/ejemplo" className="Link">
                List
            </Link>
            <Link to="/post" className="Link">
                Add Student
            </Link>
        </nav>
    )
}

export default Nav