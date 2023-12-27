import React, {useContext} from 'react'
import { Ctx } from '../data/Context'
import { FaRegTrashAlt } from "react-icons/fa";


const Cart = () => {
  const { cart } = useContext(Ctx);

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Cart</h1>
      <div className='flex flex-col gap-2'>
        {
          cart.map(obj => (
            <div className=' grid grid-cols-5 p-2 rounded justify-items-center items-center' key={obj.id}>
              <img className='h-28 rounded-md ' src={obj.image} alt="Product image" />
              <h1 className='font-semibold text-lg'>{obj.brand} {obj.model}</h1>
              <p>{obj.price} MDL</p>
              <div className='flex gap-2 items-center justify-center'>
                <button className='h-10 w-10 text-lg bg-red-500 text-white rounded-full border-2 border-red-600'>-</button>
                <h2 className='text-2xl font-semibold'>{obj.quantity}</h2>
                <button className='h-10 w-10 text-lg bg-green-500 text-white rounded-full border-2 border-green-600'>+</button>
              </div>
              <div>
                <button className='text-xl text-white rounded-full bg-gradient-to-r from-red-600 to-red-800 px-3 py-2 flex gap-2 items-center justify-center'>Delete <FaRegTrashAlt /></button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart