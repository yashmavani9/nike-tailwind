import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container' >

      <div className='flex-1 '>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Special sale on selected items. Get up to 50% off on our exclusive collection of shoes. Hurry up and grab your favorite pair before they run out of stock.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Never before has there been a better time to shop for shoes. With our special offer, you can get the best deals on the best shoes. Don't miss out on this opportunity to get the shoes you've always wanted at a price you can afford.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundcolor="bg-white" bordercolor="border-slate-grey" textcolor="text-slate-grey"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer