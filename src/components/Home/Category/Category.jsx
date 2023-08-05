import React from 'react'
import "./Category.scss"
import { useNavigate } from 'react-router-dom'
import CategorySkeleton from './CategorySkeleton';

const Category = ({categories}) => {
  const navigate = useNavigate();
  if(!categories)
  return(<CategorySkeleton count={4}/>)
  else return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item)=>(
          <div  
            key={item.id}
            onClick={()=>navigate(`/category/${item.id}`)}
            className="category">
            <img src={
              // process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url
              item.attributes.img.data.attributes.url
              } 
              alt="" />
          </div>
        ))}


      </div>
    </div>
  )
}

export default Category;