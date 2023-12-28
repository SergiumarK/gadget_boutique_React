import React, {useState, useEffect, useContext} from 'react'
import { Ctx } from '../data/Context'
import { Link } from 'react-router-dom' //pentru a putea naviga pe alta pagina folosind router
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  const {data, addToCart} = useContext(Ctx)
  const brandFilters = ["Apple", "Xiaomi", "Samsung"]
  const [brandFilter, setBrandFilter] = useState("")
  const [products, setProducts] = useState(data)
  const [priceFilter, setPriceFilter] = useState({
    min: 0,
    max: 100000
  })

  useEffect(() => {
    // avem nevoie de un tablou dinamic care va inlocui tabloul de data
    if (brandFilter !== "") {
      setProducts(data.filter(pr => pr.brand === brandFilter))
    }
  }, [brandFilter])

  useEffect(() => {
    if (priceFilter.min !== 0 || priceFilter.max !== 0) {
      setProducts(data.filter(pr => pr.price >= priceFilter.min && pr.price <= priceFilter.max))

      if (brandFilter !== "") {
        setProducts(data.filter(pr => pr.price >= priceFilter.min && pr.price <= priceFilter.max && pr.brand === brandFilter))
      }
    }
  }, [priceFilter])

  return (
    <div>
      {/* filter by brand */}
      <div className='flex my-2 gap-5'>
        <div className='flex flex-col gap-1'>
          <label className='text-lg font-medium' htmlFor="brandFilter">Filter by brand</label>
          <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className='p-2 border border-gray-300 bg-gray-100 rounded' id='brandFilter'>
            {
              brandFilters.map(filter => <option value={filter}>{filter}</option>)
            }
          </select>
        </div>

        {/* filter by min price */}
        <div className="flex flex-col gap-1">
          <label className="text-lg font-medium" htmlFor="minPriceFilter">Filter by min price</label>
          <input type="number" className="p-2 border border-gray-300 bg-gray-100 rounded" placeholder="Min Price" value={priceFilter.min} onChange={(e) => setPriceFilter({...priceFilter, min: e.target.value })} />
        </div>

        {/* filter by max price */}
        <div className="flex flex-col gap-1">
          <label className="text-lg font-medium" htmlFor="minPriceFilter">Filter by max price</label>
          <input type="number" className="p-2 border border-gray-300 bg-gray-100 rounded" placeholder="Max Price" value={priceFilter.max} onChange={(e) => setPriceFilter({...priceFilter, max: e.target.value})} />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-lg font-medium' htmlFor="brandFilter">Filter by brand</label>
          <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className='p-2 border border-gray-300 bg-gray-100 rounded' id='brandFilter'>
            {
              brandFilters.map(filter => <option value={filter}>{filter}</option>)
            }
          </select>
        </div>
        <div className='flex flex-col justify-end'>
          <button onClick={() => setProducts(data)} className='bg-black text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-blue-700'>Reset</button>
        </div>
      </div>
      <div className='flex gap-4'>
        {
          products.map(obj => (
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