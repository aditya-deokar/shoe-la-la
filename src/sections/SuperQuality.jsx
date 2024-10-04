import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-center items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col ">
        

        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
         we Provide you
          <br />
          <span className="text-coral-red  ">Super</span> 
          <span className="text-coral-red  ">Quality</span> Shoes 
        </h2>

        <p className="mt-4 mb-4 sm:max-w-sm info-text">
        Step into luxury with our Super Quality collection, where craftsmanship meets innovation. Designed with premium materials and meticulous attention to detail, these shoes offer unmatched comfort, durability, and style.
        </p>
        <p className="mt-4 mb-8 sm:max-w-sm info-text">Elevate your wardrobe with footwear that's built to last and crafted for excellence."</p>
        <div className="mt-12">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt=""
          width={570}
          height={520}
          className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
