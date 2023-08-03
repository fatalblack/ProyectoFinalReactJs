import { createContext, useEffect, useState } from "react"

export const CartContext = createContext({cart: [], cartTotalPrice: 0, cartTotalItems: 0})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    const [cartTotalItems, setCartTotalItems] = useState(0)

    useEffect(() => {
        const calculateTotalPrice = () => {
            var calculatedTotalPrice = 0;
            cart.forEach((item) => {
                calculatedTotalPrice += item.total
            })
            return calculatedTotalPrice
        }

        const calculateTotalItems = () => {
            var calculatedTotalItems = 0;
            cart.forEach((item) => {
                calculatedTotalItems += item.quantity
            })
            return calculatedTotalItems
        }

        setCartTotalPrice(calculateTotalPrice())
        setCartTotalItems(calculateTotalItems())
    }, [cart])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            const total = item.price * quantity
            setCart(prev => [...prev, {...item, quantity, total}])
        }else{
            console.error("¡El producto ya se encuentra agregado en el carrito!")
        }
    }

    const removeItem = (itemId) => {
        const cartFiltered = cart.filter(item => item.id !== itemId)
        setCart(cartFiltered)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.find(item => item.id === itemId) !== undefined
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartTotalPrice, cartTotalItems }}>
            { children }
        </CartContext.Provider>
    )
}