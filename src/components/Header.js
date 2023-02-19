import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';

import {Context} from "../Context";

function Header(){
    const {cartItems} = useContext(Context);
    
    const unfilledCart = <svg className="absolute inset-x-auto  w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    
    const filledCart = <svg className="w-6 h-6 fill-white" fill="" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

    const cartIcon = cartItems.length > 0 ? filledCart : unfilledCart 

    return (
        <header className="flex pt-2 justify-middle">
            <NavLink to="/">
                <h2 className="ml-2 font-semibold">Cafe Tbilisi</h2>
            </NavLink>
            <h2 className="ml-12 italic ">Გემრიელად მიირთვით!</h2>
            <NavLink className="absolute ml-[90%]" to="/cart">
                {cartIcon}
            </NavLink>
        </header>

    )
}

export default Header;


