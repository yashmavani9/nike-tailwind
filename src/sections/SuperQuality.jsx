import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    //we can scroll with the help of the id
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red'> Super</span> 
          <span className='text-coral-red'> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and durability for your feet with our high-quality shoes. Our shoes are designed to provide you with the best possible comfort and support for your daily activities.</p>
        <p className='mt-6 lg:max-w-lg info-text'> our dedication to the quality of our products is reflected in the materials we use, the craftsmanship that goes into each pair, and the attention to detail that we put into every shoe we make. We are committed to providing you with the best possible shoes that will last you a lifetime.</p>
        <div className='mt-11'>
          <Button label="View details"/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality