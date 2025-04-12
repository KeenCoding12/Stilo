import { Heart, ShoppingBag, Star } from 'lucide-react'
import React,{ useState } from 'react'


const PopularProductsCard = ({ img,name,price,rating }) => {
  const [isFavorited,setIsFavorited] = useState(false);
  return (
    <div className='group flex h-full flex-col'>
      {/* card img */}
      <div className="relative flex-1 overflow-hidden p-6">
        <img 
          src={img} 
          alt={`${name} display in a home setting`} 
          width={300}
          height={300}
          className='h-auto w-full object-cover transition-transform group-hover:scale-105' 
          loading='lazy'
          decoding='async'
        />
        <div className="absolute right-4 top-4 grid gap-3">
          <button 
            className="rounded-full bg-white/90 p-2 shadow-sm transition-all" 
            onClick={()=>setIsFavorited(!isFavorited)}
            aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}  
          >
            <Heart
              fill={isFavorited ? '#f9bf29' : 'transparent'}
              stroke='#555'
              className='transition-colors'
            />
          </button>
          <button className="rounded-full bg-white/90 p-2 shadow-sm transition-all">
            <ShoppingBag stroke='#555' />
          </button>
        </div>
      </div>

      {/* card content */}
      <div className="border-t border-gray-300/50 p-4">
        <h3 className="mb-1 text-lg font-medium">{name}</h3>
        <div className="mb-2 flex items-center gap-1">
          <Star
            fill='#f9bf29'
            stroke='#f9bf29'
            size={16}
          />
          <span className="text-sm text-gray-600">
            {rating.toFixed(1)} {' '}
            <span className="sr-only">rating</span>
          </span>
        </div>
        <p className="font-semibold text-primaryClr">
          ${price.toFixed(2)}
        </p>
      </div>
      
    </div>
  )
}

export default PopularProductsCard