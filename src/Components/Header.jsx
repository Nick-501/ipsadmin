import React, { Component } from 'react';
import '../Style/Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <header className='p-3' id='header'>
                <div className='container'>
                    <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                        <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                            <li><Link to='/' className='nav-link px-2 text-header'>Home</Link></li>
                            <li><Link to ='/profile' className='nav-link px-2 text-header'>Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
         );
    }
}
 
export default Header;
