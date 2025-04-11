import React from 'react'

const BlogCard = ({id,imgUrl,title,text,post}) => {
  return (
    <div className='' key={id}>
      <div className="rounded-lg overflow-hidden">
        <img src={imgUrl} alt={title} className='w-full' />
      </div>

      <div className="">
        <a href='#' className='mt-2 text-xl inline-block font-semibold hover:text-primaryClr transition-colors duration-200'>{title}</a>
        <p className='mt-1 mb-3'>{text}</p>
        <p>{post}</p>
      </div>
    </div>
  )
}

export default BlogCard