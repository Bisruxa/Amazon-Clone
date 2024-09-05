import React from 'react'
import './catagory.css'
function CatagoryCard({data}) {
  return (
    <div className='catagory'>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  )
}

export default CatagoryCard
