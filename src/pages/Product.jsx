import React from 'react'
import Nav from '../components/Nav'
import { products } from '../contants'
import ProductCard from '../components/ProductCard'

const Product = () => {
  return (
    <section className='w-full h-full flex'>
        <section className='w-[15%] h-screen max-sm:hidden bg-coral-red/35'>
          <div className='text-2xl flex flex-col gap-10 px-4 py-16'>
            <h4>All Products</h4>
            <div className='text-xl flex flex-col gap-3 px-4'>
                  <h4>cateogory1</h4>
                  <h4>cateogory1</h4>
                  <h4>cateogory1</h4>
                  <h4>cateogory1</h4>
            </div>
          </div>

        </section>

        <section id="products" className="product-container max-sm:w-full w-[85%] px-8 py-4 h-screen overflow-y-scroll">
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