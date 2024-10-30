import React from 'react'
import { star } from '../assets/icons'

const ProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 border-2 rounded-md px-3 p-2 flex-col w-full max-sm:w-40 '>
            <img src={imgURL}
                 alt={name}
                 className='w-[280px] h-[280px] max-sm:h-fit'
            />
            <div className='max-sm:mt-2 mt-8 flex justify-start gap-2.5'>
                <img src={star} alt="rating" width={24} height={24} />
                <p className='font-montserrat text-xl max-sm:text-lg leading-normal text-slate-gray '>(4.5)</p>
            </div>
            <h3 className='mt-2 max-sm:text-xl text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <p className='mt-2 font-semibold max-sm:text-xl text-2xl leading-normal text-coral-red'>{price}</p>
    </div>
  )
}

export default ProductCard