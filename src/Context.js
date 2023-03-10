import React, { useEffect, useState } from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/NoleyNarbar/georgian-food-images/main/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id){
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart(){
        setCartItems([])
    }

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}