import React, { useState, useContext } from "react"
import {Context} from '../Context'
import PropTypes from "prop-types"


function Image({className, img}) {
    const [hover, setHover] = useState(false);
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context);

    const alreadyInCart = cartItems.some(item => item.id === img.id);

    const heartIcon = (hover & !img.isFavorite) && <svg className="w-6 h-6 absolute inset-y-1 fill-none" fill="" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => toggleFavorite(img.id)}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        
    const heart_and_fav = img.isFavorite && <svg className="w-6 h-6 absolute inset-y-1 fill-solid" fill="" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => toggleFavorite(img.id)}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        
    const cartIcon = hover && <svg className="w-6 h-6 absolute inset-y-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => addToCart(img)}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    
    const perm_cartIcon = alreadyInCart && <svg className="w-6 h-6 absolute inset-y-8 fill-solid" fill="" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => removeFromCart(img.id)}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    

    return (
        <div className={`${className} relative`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={img.url} className="w-full h-full object-cover"/>           
            {heartIcon}
            {heart_and_fav}
            {cartIcon}
            {perm_cartIcon}
        </div>
    )
}


Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}


export default Image