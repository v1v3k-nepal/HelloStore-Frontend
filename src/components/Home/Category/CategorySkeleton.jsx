import React from 'react'
import "./CategorySkeleton.scss"

const CategorySkeleton = ({count}) => {
  return (
    <div className="container">
            <div className="categories">
        {Array(count).fill(0).map((item, index)=>(
            <div key={index} className='category'></div>
         ))}
    </div>
    </div>
  )
}

export default CategorySkeleton;