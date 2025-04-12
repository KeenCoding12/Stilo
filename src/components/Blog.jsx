import React from 'react'
import { blogCardItem } from '../constant/data'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <section className='section bg-gray-100 pb-[120px] md:pb-[150px]' id='blog'>
      <div className="container">
        <div className="md:flex md:justify-between">
          <h2>Recent Blog</h2>
          <a href="#" className='hover:underline'>View All Posts</a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogCardItem.map((item)=>(
            <BlogCard
              key={item.id} 
              imgUrl={item.imgUrl}
              title={item.title}
              text={item.text}
              post={item.postDate}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog