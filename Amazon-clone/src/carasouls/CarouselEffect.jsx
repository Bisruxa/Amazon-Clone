import React from 'react'
import {Carousel} from'react-responsive-carousel'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
function CarouselEffect() {
  return (
    <>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false} 
      showThumbs={false}>    
     {
      img.map((imageItem)=>{
        return <img src={imageItem}/>
      })
     }

      </Carousel>
     <div className='hero_img'></div> 
    </>
  )
}

export default CarouselEffect
