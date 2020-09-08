import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <nav className='header'>
            <Link to='/login'>
            <img className="header_logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt="img"></img>
            </Link>
            <input type='text' className='header_searchInput'/>
            <SearchIcon className='header_searchIcon'/>
        </nav>
    )
}

export default Header
