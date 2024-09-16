import { shoe8 } from "../assets/images"
import Button from "../constants/Button"
const SuperQuality = () => {
  return (
    <section id='about-us' className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">We Provide You 
          <span className="text-coral-red" > Super </span> 
          <span className="text-coral-red" >Quaality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text ">Ensuring Premium Style , comfort and quality for our customers crafted footwear is designed to elevate your style and make you unmatched with the quality of hte product  </p>
          <p className="mt-4 lg:max-w-lg info-text ">Our dedication ensures that user get the details and esures satisfaction </p>
          <div className="mt-11">
          <Button label="View Details" />

          </div>


        
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt='shoe' width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality
