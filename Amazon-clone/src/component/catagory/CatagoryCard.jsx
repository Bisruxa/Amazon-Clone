import React from 'react'
import './catagory.css'
import { Link } from 'react-router-dom'
function CatagoryCard({data}) {
  return (
    <div className='catagory'>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  )
}

export default CatagoryCard
