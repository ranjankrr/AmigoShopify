import React from 'react';
import {NavLink} from 'react-router-dom';
const Shopfiy =()=>{
    return(
        <>
           <div className='shopify'><i class="bi bi-bag-fill"></i>Shopify</div>
           <div className='text-center text-light display-4'>Easily Build and Run Your<br/> Ecommerce Website</div>
           <p className='text-center text-light'>Try Shopify free for 14 days, and explore all the<br/> features you need to start a business fast.</p>
           <div className='input-button'>
                <input type='text' placeholder='Enter your Email Address'/>
                <NavLink exact activeClassName="active_class" to='/button'><button>Stored to Google sheets</button></NavLink>
                
           </div>
        
        </>
    )
}
export default Shopfiy;