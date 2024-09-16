import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../constants/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"> 
          <span className="text-coral-red" >Special</span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text ">Ensuring Premium Style , comfort and quality for our customers crafted footwear is designed to elevate your style and make you unmatched with the quality of hte product  </p>
          <p className="mt-4 lg:max-w-lg info-text ">Our dedication ensures that user get the details and esures satisfaction </p>
          <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More " iconURL={arrowRight} backgroundColor='bg-white' borderColor='border-coral-red' textColor='text-slate-gray' />


          </div>


        
      </div>
      
    </section>
  )
}

export default SpecialOffer
