import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className='header'>
            {/* logo on the left */}
            <Link to='/'>
            <img className="header_logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt="img"></img>

            </Link>
             {/* Search box */}
             <div className='header_search'>
            <input type='text' className='header_searchInput'/>
            <SearchIcon className='header_searchIcon'/>
            </div>
           
            <div className='header_nav'>
               <Link  to='/login' className='header_link' >
                    <div className='header_option'>
                            <spam>Hello,</spam>
                            <spam>Sign in</spam>
                     </div>
                </Link>
               
                <Link  to='/' className='header_link' >
                    <div className='header_option'>
                            <spam>Returms</spam>
                            <spam>& Orders</spam>
                     </div>
                </Link>
                
                <Link  to='/' className='header_link' >
                    <div className='header_option'>
                            <spam>Your</spam>
                            <spam>Prime</spam>
                     </div>
                </Link>
               
                <Link  to='/checkout'  >
                    <div className='header_optionBasket'>
                            <ShoppingBasketIcon />
                            <spam className='header_basketCount'>0</spam>
                     </div>
                </Link>
               
            </div>

            
        </nav>
    )
}

export default Header
