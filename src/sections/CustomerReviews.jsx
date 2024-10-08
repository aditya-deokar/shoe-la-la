
import { reviews } from "../contants"
import ReviewCard from "../components/ReviewCard"
const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold "> 
        What Our <span className="text-coral-red">Customers </span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center ">hear genuine stories Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14  ">
        {
          reviews.map((item,index)=>(
            <ReviewCard 
              key={item.customerName}
              imgURL={item.imgURL}

             customerName={item.customerName}
             rating={item.rating}
             feedback={item.feedback}
             />
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews