import React from 'react'
import ProductDescription from './ProductDescription'
import ImageGallery from './ImageGallery'
import {useParams} from 'react'

export default function Product() {
  
  const images = [
    "/assets/images/banner-1.jpg",
    "/assets/images/banner-2.jpg",
    "/assets/images/banner-1.jpg",
    "/assets/images/banner-2.jpg"
  ]

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side: Image Gallery*/}
        <div className="col-md-5 d-flex justify-content-center">
          <ImageGallery images={images} />
        </div>

        {/* Right Side: Product Description */}
        <div className="col-md-7">
          <ProductDescription />
        </div>
      </div>
    </div>
  )
}
