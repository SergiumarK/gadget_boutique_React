import { useState, createContext } from "react";
import dataJSON from "./Data.json"

export const Ctx = createContext()

const Context = ({children}) => {
    const [data, setData] = useState(dataJSON)
    const [cart, setCart] = useState([])


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

        console.log(cart)
    }

    return (
        <Ctx.Provider value={{data: data, cart: cart, addToCart: addToCart}}>
            {children}
        </Ctx.Provider>
    )
}

export default Context