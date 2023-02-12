import React, { useState, useContext, useEffect } from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [placed, setPlaced] = useState(false)
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
        
    ))
    const Total_price = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const Place_order = !placed && <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={() => setPlaced(true)} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >Place Order</button> 

    const Order_placed = placed && <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >Ordering...</button> 
    
    useEffect(() => {
        if(placed){
            setInterval(() => {
                setPlaced(false)
                emptyCart()
            }, 3000)
        }
    }, [placed, emptyCart])
     


    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {Total_price}</p>
            <div className="flex space-x-2 justify-center">
                {Place_order}
                {Order_placed}
</div>
        </main>
    )
}

export default Cart