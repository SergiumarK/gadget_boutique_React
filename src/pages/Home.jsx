import React, {useContext} from 'react'
import { Ctx } from '../data/Context'
import { Link } from 'react-router-dom' //pentru a putea naviga pe alta pagina folosind router
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  const {data, addToCart} = useContext(Ctx)

  return (
    <div>
      <div className='flex gap-4'>
        {
          data.map(obj => (
            <div className="h-auto w-64 bg-grey-100 border border-grey-200 rounded overflow-hidden p-2 hover:border-blue-600 hover:shadow-lg" key={obj.id}>
              <img  src={obj.image} alt={obj.id} />
              <div className='p-1 flex flex-col gap-1'>
                <h1 className='font-semibold text-xl'>{obj.brand} {obj.model}</h1>
                <p className='text-lg opacity-80'>{obj.price} MDL</p>
                <Link className='text-black border border-black px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-blue-700 hover:bg-black hover:text-white' to={`/product/${obj.id}`}>See details</Link>
                <button onClick={() => addToCart(obj.id)} className='bg-black text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-blue-700'>Add to cart <FaShoppingCart /></button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home