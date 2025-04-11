import React from 'react'

const Link = ({label,path}) => {
  return (
    <a href={path} className='font-medium relative inline-block after:block after:absolute after:left-0 after:h-0.5 after:bg-secondaryClr after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left hover:text-secondaryClr transition-colors'>{label}</a>
  )
}

export default Link