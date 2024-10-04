import React from 'react'

const Button = ( {label , iconURL} ) => {
  return (
   <button className='flex items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white rounded-full'>
       {label}
       {iconURL && <img src={iconURL} alt={label} className='h-5 w-5 ml-2 rounded-full' />}
   </button>
  )
}

export default Button