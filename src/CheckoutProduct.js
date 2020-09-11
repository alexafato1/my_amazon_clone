import React, { useState } from 'react'
import './CheckoutProduct.css';
import { useStateValue }  from './StateProvider';

function CheckoutProduct({id, title, image,price, rating }) {
    const [{ basket}, dispatch] = useStateValue();

    const RemoveFromBasket =()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
          <img className='checkoutProduct_image' src={image} alt=''/>  
          <div className='checkoutProduct_info'>
           <p >{title}</p>
           <p className='checkoutProduct_price'>
              <small>$</small>
              <strong>{price}</strong>
              </p>

              <div className='checkoutProduct_rating'>
                        {
                            Array(rating)
                            .fill()
                            .map((_)=>(
                                <span role="img">⭐</span>  
                            ))
                        }</div>
             
        <button onClick={RemoveFromBasket}>Remove from basket</button>
           </div>
        </div>
    )
}

export default CheckoutProduct



