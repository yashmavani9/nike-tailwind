import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span> 
        Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        hear genuine feedback from our customers who have experienced our products and services first-hand.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) =>{
          return(
            <ReviewCard key={review.customerName} review={review}/>
          )
        })}
      </div>
    </section>
  )
}

export default CustomerReviews