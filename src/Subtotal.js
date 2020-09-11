import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer'
import './Subtotal.css'

function Subtotal() {
    const [{ basket}] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <div>
                    <p>
            Subtotal ({basket.length} item):<strong>{`${value}`}</strong>
                    </p>
                    <small className='subtotal_gift'>
                     <input type='checkbox'/>This order contains
                    </small>
                </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
          <button>Procced to Checkout</button>  
        </div>
    )
}

export default Subtotal
