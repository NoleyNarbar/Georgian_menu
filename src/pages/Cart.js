import React, { useState, useContext, useEffect } from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [placed, setPlaced] = useState(false)
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem className="m-1" key={item.id} item={item} />
        
    ))
    
    
    
    const Total_price = `${cartItems.reduce(function(acc, obj) { return acc + obj.price}, 0)}.00 GEL`
    
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
                emptyCart()
                setPlaced(false)
            }, 30000)
        }
    }, [placed, emptyCart])
     


    return (
        <main className="flex flex-col justify-items-center space-x-2 p-10 m-2">
            <h1 className="mb-2">Check out</h1>
            <div className="flex flex-col">
            {cartItemElements}
            </div>
            <p className="mt-4">Total: {Total_price}</p>
            <div className="mt-4">
                {Place_order}
                {Order_placed}
</div>
        </main>
    )
}

export default Cart