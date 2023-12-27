import React, {useContext} from 'react'
import { useParams } from 'react-router-dom' //Hook care poate lucra cu parametrii unui link
import { Ctx } from '../data/Context'

const Product = () => {
    const {data} = useContext(Ctx)
    const {id} = useParams()
    const currentProduct = data.find(obj => obj.id === id)
    

  return (
    <div className='flex items-center flex-col gap-3 '>
        <h1 className='text-3xl font-semibold'>{currentProduct.brand} {currentProduct.model}</h1>
        <img className='h-80 w-80 object-cover rounded-xl' src={currentProduct.image} alt={currentProduct.id} />
        <p className='p-3 bg-black text-white rounded-xl font-semibold'>{currentProduct.price} MDL</p>
    </div>
  )
}

export default Product