import React from 'react'
import { blogCardItem } from '../constant/data'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <section className='section pb-[120px] md:pb-[150px] bg-gray-100' id='blog'>
        <div className="container">
            <div className="md:flex md:justify-between">
                <h2>Recent Blog</h2>
                <a href="#" className='hover:underline'>View All Posts</a>
            </div>

            <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3">
                {blogCardItem.map((item,index)=>(
                    <BlogCard key={index} id={item.id} imgUrl={item.imgUrl} title={item.title} text={item.text} post={item.postDate} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog