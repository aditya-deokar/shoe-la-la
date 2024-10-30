import React from 'react'
import Nav from '../components/Nav'
import { products } from '../contants'
import ProductCard from '../components/ProductCard'

const Product = () => {
  return (
    <section className='w-full h-full flex'>
        <section className='w-[15%] h-screen max-sm:hidden bg-slate-900'>

        </section>

        <section id="products" className="product-container max-sm:w-full w-[85%] p-4 h-screen overflow-y-scroll">
            <div className="mt-16 grid place-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-sm:gap-x-3 max-sm:gap-y-8  gap-14 ">
                    {
                    products.map((product)=>(
                        <ProductCard key={product.name} {...product}
                        />
                    ))
                    }
                    {
                    products.map((product)=>(
                        <ProductCard key={product.name} {...product}
                        />
                    ))
                    }
            </div>
        </section>
    </section>
   
   

  )
}

export default Product