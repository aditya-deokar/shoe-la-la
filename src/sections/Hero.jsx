import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { statistics ,shoes } from "../contants"

import { useState } from "react"

import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images"

const Hero = () => {

  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)



  return (
    <section 
        id="Hero"
        className="w-full min-h-screen max-container p-2 flex flex-col lg:flex-row justify-center items-center gap-10"
    >
       <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 z-10 ">

        <p className="font-montserrat text-coral-red text-xl mt-10">Our Summer collection</p>

        <h1 className="font-palanquin text-8xl max-sm:text-[7vmax] leading-none font-bold">
          <span className="relative pr-10 xl:whitespace-nowrap">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block ">Shoe La la</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm">Discover Stylish Shoe la la arrivals,quality comfort, and innovation for your action life.</p>

        <Button label="Shop now" iconURL={arrowRight}/>

        <div className="w-full mt-10 flex items-start justify-start flex-wrap gap-16">

          {statistics.map((item ,index)=>(
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold ">{item.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{item.label}</p>
            </div>
          ))}

        </div>

       </div>

       {/* right side */}
       
       <div className="relative flex flex-1 justify-center items-center xl:min-h-screen  max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src={bigShoeImg} alt="shoe image"
            width={610}
            height={500}
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


       

    </section>
  )
}

export default Hero