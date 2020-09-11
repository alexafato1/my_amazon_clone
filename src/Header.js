import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div>
        <div className='header'>
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
                            <span>Hello,</span>
                            <span>Sign in</span>
                     </div>
                </Link>
               
                <Link  to='/' className='header_link' >
                    <div className='header_option'>
                            <span>Returms</span>
                            <span>& Orders</span>
                     </div>
                </Link>
                
                <Link  to='/' className='header_link' >
                    <div className='header_option'>
                            <span>Your</span>
                            <span>Prime</span>
                     </div>
                </Link>
               
                <Link  to='/checkout'  >
                    <div className='header_optionBasket'>
                            <ShoppingBasketIcon />

    <span className='header_basketCount'>{basket?.length}</span>
                     </div>
                </Link>
               
            </div>
              
            
        </div>
        <div className='header_baner'>
        <Link  to='/' className='header_link' >
        <LocationOnIcon/>
                    <div className='header_option'>
                     
                           <span>Deliver to</span>
                            <span>Russian Federation</span>
                     </div>
                </Link>
               
                <Link  to='/' className='header_link' >
                    <div className='header_optionSecond'>
                            <span>Today's Deals</span>
                            
                     </div>
                </Link>
                
                <Link  to='/' className='header_link' >
                    <div className='header_optionSecond'>
                            <span>Customer Service</span>
                            
                     </div>
                </Link>
                <Link  to='/' className='header_link' >
                    <div className='header_optionSecond'>
                            <span>Gifts Card</span>
                            
                     </div>
                </Link>
                
                <Link  to='/' className='header_link' >
                    <div className='header_optionSecond'>
                            <span>Registry</span>
                            
                     </div>
                </Link>
                <Link  to='/' className='header_link' >
                    <div className='header_optionSecond'>
                            <span>Sell</span>
                            
                     </div>
                </Link>
               
               
        </div>
        </div>
    )
}

export default Header
