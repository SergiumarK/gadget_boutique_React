import { useState, useEffect, createContext } from "react";
import dataJSON from "./Data.json"
import { json } from "react-router-dom";

export const Ctx = createContext()

const Context = ({children}) => {
    const [data, setData] = useState(dataJSON)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (id) => {
        const product = data.find(obj => obj.id === id);

        const cartProduct = cart.find(obj => obj.id === id)
        if (cartProduct) {
            setCart(cart.map(obj => {
                if (obj.id === cartProduct.id) {
                    return {...obj, quantity: obj.quantity + 1 }
                } else {
                    return obj
                }
            }))
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }
        // crearea unei valori in localStorage cu denumirea cart si valloarea de tip string al tabloului cart
        
    }

    return (
        <Ctx.Provider value={{data: data, cart: cart, addToCart: addToCart, setCart: setCart}}>
            {children}
        </Ctx.Provider>
    )
}

export default Context