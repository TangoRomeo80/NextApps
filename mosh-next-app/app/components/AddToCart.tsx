'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
      {/* style using daisyui (tailwind library)*/}
      <button className='btn btn-primary'
        onClick={() => console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
