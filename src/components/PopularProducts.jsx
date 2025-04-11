import React from 'react';
import { popularProducts } from '../constant/data';
import PopularProductCard from './PopularProductCard';

const PopularProducts = () => {
  return (
    <section className="section" aria-labelledby="popular-products-heading" id='products'>
      <div className="container">
        <header className="text-center">
          <h2 id="popular-products-heading" className="md:text-center">
            Popular Products
          </h2>
          <p className="md:text-center md:max-w-[500px] mx-auto mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio et quasi!
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-20">
          {popularProducts.map((product) => (
            <div 
              className="bg-gray-200/50 hover:bg-gray-200/70 transition-colors duration-200"
              key={product.id}
            >
              <PopularProductCard 
                id={product.id}
                img={product.imgUrl}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;