import React from 'react'

const BlogCard = ({ id,imgUrl,title,text,post }) => {
  return (
    <div>
      {/* card image */}
      <div className="overflow-hidden rounded-lg">
        <img 
          src={imgUrl} 
          alt={title} 
          className='w-full'
        />
      </div>
      {/* card content */}
      <div className="">
        <a href="#" className="mt-4 inline-block text-xl font-semibold duration-200 hover:text-primaryClr">{title}</a>
        <p className="mb-3 mt-1">{text}</p>
        <p>{post}</p>
      </div>
    </div>
  )
}

export default BlogCard