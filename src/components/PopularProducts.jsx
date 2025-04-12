import React from 'react'
import { popularProducts } from '../constant/data'
import PopularProductsCard from './PopularProductsCard'
import Button from './Button'
const PopularProducts = () => {
  return (
    <section className='section' id='products'>
      <div className="container">
        {/* title */}
        <header className="text-center">
          <h2>Popular products</h2>
          <p className="mx-auto mt-3 max-w-[550px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio libero fugiat cumque.</p>
        </header>
        {/* products */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {popularProducts.map((product)=>(
            <div 
              className="h bg-gray-200/50" 
              key={product.id}
            >
              <PopularProductsCard
                id={product.id}              
                img={product.imgUrl}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
        <Button label='All products' className='primary-btn m-20 mx-auto block' />
      </div>
    </section>
  )
}

export default PopularProducts