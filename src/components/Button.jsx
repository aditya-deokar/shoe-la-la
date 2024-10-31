import React from 'react'

const Button = ( {label , iconURL ,backgroundColor, textColor , borderColor ,isHover} ) => {
  return (
   <button className={`flex items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none transition-all ease-in-out rounded-full
    ${backgroundColor ? 
      `${backgroundColor} ${borderColor} ${textColor} ${isHover}` : "text-white bg-coral-red border-coral-red"
    } 
     `}>
       {label}
       {iconURL && <img src={iconURL} alt={label} className='h-5 w-5 ml-2 rounded-full' />}
   </button>
  )
}

export default Button