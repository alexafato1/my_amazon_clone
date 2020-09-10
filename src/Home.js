import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            
            <img className='home_image'
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'  alt='' />
        
        <div className='home_rowFirst'>
        <Product
        id='5456789909'
         title='1000 places to see before you die' 
         image='https://www.bigw.com.au/medias/sys_master/images/images/h84/hde/14666415538206.jpg'
         price={5}
          rating={5}
        />

        <Product
        id='5456789909'
         title='1000 places to see before you die' 
         image='https://www.bigw.com.au/medias/sys_master/images/images/h84/hde/14666415538206.jpg'
         price={5}
          rating={5}
        />
       

        </div>
         
        <div className='home_row'>
        <Product
        id='5456789909'
         title='1000 places to see before you die' 
         image='https://www.bigw.com.au/medias/sys_master/images/images/h84/hde/14666415538206.jpg'
         price={5}
          rating={5}
        />

        <Product
        id='5456789909'
         title='1000 places to see before you die' 
         image='https://www.bigw.com.au/medias/sys_master/images/images/h84/hde/14666415538206.jpg'
         price={5}
          rating={5}
        />
         <Product
        id='5456789909'
         title='1000 places to see before you die' 
         image='https://www.bigw.com.au/medias/sys_master/images/images/h84/hde/14666415538206.jpg'
         price={5}
          rating={5}
        />
          

        </div>
        </div>
    )
}

export default Home
