import { Heart, ShoppingBag, Star } from 'lucide-react';
import React, { useState } from 'react';

const PopularProductCard = ({  img, name, price, rating }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="group h-full flex flex-col">
      <div className="relative overflow-hidden p-6 flex-1">
        <img 
          src={img} 
          alt={`${name} displayed in a home setting`} 
          width={300}
          height={300}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        
        <div className="absolute top-4 right-4 grid gap-3">
          <button 
            className="bg-white/90 hover:bg-white transition-all p-2 rounded-full shadow-sm"
            onClick={() => setIsFavorited(!isFavorited)}
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              fill={isFavorited ? '#F9BF29' : 'transparent'} 
              stroke='#555' 
              className="transition-colors"
            />
          </button>
          <button 
            className="bg-white/90 hover:bg-white transition-all p-2 rounded-full shadow-sm"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingBag stroke='#555' />
          </button>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-300/50">
        <h3 className="font-medium text-lg mb-1">{name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <Star fill="#F9BF29" stroke="#F9BF29" size={16} />
          <span className="text-sm text-gray-600">
            {rating.toFixed(1)} <span className="sr-only">rating</span>
          </span>
        </div>
        <p className="font-semibold text-primaryClr">
          ${price.toFixed(2)} <span className="sr-only">dollars</span>
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;