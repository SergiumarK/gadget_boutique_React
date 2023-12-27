import React, {useContext} from 'react'
import { Ctx } from '../data/Context'

const Home = () => {
  const {data} = useContext(Ctx)

  return (
    <div>
      <div className='flex gap-4'>
        {
          data.map(obj => (
            <a href={`/product/${obj.id}`} className="h-80 w-64 bg-grey-100 border border-grey-200 rounded overflow-hidden p-2" key={obj.id}>
              <img  src={obj.image} alt={obj.id} />
              <div className='p-1'>
                <h1 className='font-semibold text-xl'>{obj.brand} {obj.model}</h1>
                <p className='text-lg opacity-80'>{obj.price} MDL</p>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Home