import React, {useContext} from 'react'
import { Ctx } from '../data/Context'
import { FaRegTrashAlt } from "react-icons/fa";


const Cart = () => {
  const { cart, setCart } = useContext(Ctx);

  const changeQnt = (id, type) => {
    setCart(cart.map(obj => {
      if (obj.id === id) {
        if (type === "minus" && obj.quantity > 1) {
          return {...obj, quantity: obj.quantity - 1}
        } else if (type === "plus") {
          return {...obj, quantity: obj.quantity + 1}
        } else {
          return obj
        }
      } else {
        return obj
      }
    }))
  }

  const deleteProduct = (id) => {
    setCart(cart.filter(obj => obj.id !== id))
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Cart</h1>
      <div className='grid grid-cols-3 '>
        <div className='col-span-2 flex flex-col gap-2'>
        {
          cart.map(obj => (
            <div className=' grid grid-cols-5 p-2 rounded justify-items-center items-center' key={obj.id}>
              <img className='h-28 rounded-md ' src={obj.image} alt="Product image" />
              <h1 className='font-semibold text-lg'>{obj.brand} {obj.model}</h1>
              <p>
                {
                  obj.quantity > 1 ?
                  `${obj.quantity} x ${obj.price} MDLb= ${obj.quantity * obj.price}` :
                  `${obj.price} MDL`
                }
              </p>
              <div className='flex gap-2 items-center justify-center'>
                <button onClick={() => changeQnt(obj.id, "minus")} className={`h-10 w-10 text-lg bg-red-500 text-white rounded-full border-2 border-red-600 ${obj.quantity <= 1 ? "hidden" : ""} `}>-</button>
                <h2 className='text-2xl font-semibold'>{obj.quantity}</h2>
                <button onClick={() => changeQnt(obj.id, "plus")} className='h-10 w-10 text-lg bg-green-500 text-white rounded-full border-2 border-green-600'>+</button>
              </div>
              <div>
                <button onClick={() => deleteProduct(obj.id)} className='text-xl text-white rounded-full bg-gradient-to-r from-red-600 to-red-800 px-3 py-2 flex gap-2 items-center justify-center'>Delete <FaRegTrashAlt /></button>
              </div>
            </div>
          ))
        }
        </div>
        <div>
          <h1>Total</h1>
          <div>
            {
              cart.map(obj => (
                <div>
                  <h1>{obj.brand} {obj.model}</h1>
                  <p>{obj.quantity} x {obj.price} MDL = {obj.quantity * obj.price} MDL</p>
                </div>
              ))
            }
          </div>
          <h1>
            {
              cart.reduce((sum, obj) => sum +(obj.quantity * obj.price), 0)
            }
            MDL
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Cart