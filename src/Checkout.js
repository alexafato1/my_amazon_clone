import React from 'react';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
        <div className='checkout_left'>
           
         {basket?.length === 0 ? (
             <div className='checkout_title'>
                 <h2>Your Shoping Basket is empty</h2>
                 <p>
                     You have no item in your basket.
                 </p>
             </div>
         ) : (
            <div>
                <h2 className='checkout_title'>Your Shoping Basket</h2>
                {basket?.map(item =>(
                    
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                  />
                ))}
              </div>
             )}
           </div>
           {basket.length > 0  && (
            <div className ='heckout_subtotal'>
                <h2>Subtotal:</h2>
                 <Subtotal/>
            </div>
             
           )}
        </div>
        
    )
}

export default Checkout
