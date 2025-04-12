import React from 'react'

const Link = ({ label,path }) => {
  return (
    <a href={path} className='relative inline-block font-medium transition-colors after:absolute after:left-0 after:block after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-secondaryClr after:transition after:duration-300 hover:text-secondaryClr after:hover:origin-left after:hover:scale-x-100'>{label}</a>
  )
}

export default Link