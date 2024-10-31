import React, { useState } from 'react'
import { shoes } from '../contants'
import ShoeCard from '../components/ShoeCard'
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images"
import Button from '../components/Button'
import { arrowRight, star } from '../assets/icons'

const SingleProduct = ({imgURL, name, price}) => {

    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <>
    <section className='max-container h-screen flex max-sm:flex-col '>
     <div className="relative w-1/2 max-sm:w-full flex flex-1 justify-center items-center h-[90vh]  max-xl:py-20 bg-primary bg-hero bg-cover bg-center">
          <img src={bigShoeImg} alt="shoe image"
            width={400}
            height={300}
            className="object-contain relative z-10"
          />

          <div className="flex sm:gap-6 gap-2 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
              {shoes.map((item,index)=>(
                <div key={index}>
                  <ShoeCard 
                    imgURL={item}
                    changeBigShoeImage={(shoe)=>setbigShoeImg(shoe)}
                    bigShoeImg={bigShoeImg}
                  />
                </div>
              ))}
          </div>
       </div>

       <div className="flex flex-1 flex-col justify-start mt-40 max-sm:w-full p-4 w-1/2 ">
        

            <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            Nike Air Jordan-10
            </h2>

            
            <p className="mt-4 mb-8 sm:max-w-sm info-text">Elevate your wardrobe with footwear that's built to last and crafted for excellence."</p>
            <div className='max-sm:mt-2 mt-3 flex justify-start gap-2.5'>
                <img src={star} alt="rating" width={24} height={24} />
                <p className='font-montserrat text-xl max-sm:text-lg leading-normal text-slate-gray '>(4.5)</p>
            </div>
           
            <p className='mt-2 font-semibold max-sm:text-2xl text-2xl leading-normal text-coral-red'>₹200</p>

            <div className="mt-12 flex flex-wrap gap-4">
                <Button label="Add to card" isHover="hover:bg-coral-red/40" backgroundColor="bg-white" borderCOlor="border-slate-700" textColor="text-slate-700" />
                <Button label="Buy Now" iconURL={arrowRight} />
             </div>

            
  
        </div>
        </section> 
    </>
  )
}

export default SingleProduct