import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div>
        <img src={offer} alt="" width={770} height={880}
        className="object-contain w-full" />
      </div>


      <div className="flex flex-1 flex-col ">
        

        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red  ">Special </span> 
           Offer
        </h2>

        <p className="mt-4 mb-4 sm:max-w-sm info-text">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in quaerat mollitia recusandae distinctio quo sunt vitae reprehenderit numquam impedit?
        </p>
        <p className="mt-4 mb-8 sm:max-w-sm info-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, rem!</p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="learn more" backgroundColor="bg-white" borderCOlor="border-slate-700" textColor="text-slate-700" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer