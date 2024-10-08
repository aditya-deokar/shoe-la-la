import { copyrightSign } from "../assets/icons"
import { footerLinks, socialMedia } from "../contants"


const Footer = () => {
  return (
   <footer className="max-container ">
    <div className="flex items-start justify-between gap-20  flex-wrap max-lg:flex-col ">
      <div className="flex flex-col items-start">
        <a href="/">
          {/* <img src={logo} alt="logo" width={150} height={46} /> */}
        </a>
        <p className="text-white-400 sm:max-w-sm mt-16 text-base leading-7 font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex items-center gap-5 mt-8 ">
          {
            socialMedia.map((item,index)=>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={item.src} alt={item.alt}
                width={24} height={24} 
                />
              </div>

            ))
          }

        </div>
      </div>

      <div className="flex flex-1 text-white justify-between lg:gap-10 gap-20 flex-wrap">
       {
        footerLinks.map((item,index)=>(
          <div key={index}>
            <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6">
              {item.title}
            </h4>

            <ul>
              {
                item.links.map((linkitem ,i)=>(
                  <li key={i} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-600 transition-all ease-in-out">
                    <a href={linkitem.link}>{linkitem.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
       }
      </div>

    </div>


    <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex items-center justify-start gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={20} height={10} className="rounded-full m-0" />
          <p>copyright all rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
    </div>
   </footer>
  )
}

export default Footer