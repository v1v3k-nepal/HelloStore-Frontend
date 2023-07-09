import React, { useEffect, useContext } from 'react'
import "./Home.scss"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Products from "../Products/Products"
import fetchDataFromApi from '../../utils/api'
import { Context } from "../../utils/context"

const Home = () => {

  const {categories, setCategories, products, setProducts} = useContext(Context);

  useEffect(()=>{

    const getCategories = ()=>{
      fetchDataFromApi("/api/categories?populate=*").then((response)=>{
        setCategories(response);
        console.log(response)});
    }
  
    const getProducts= ()=>{
      fetchDataFromApi("/api/products?populate=*").then((response)=>{
        console.log(response);
        setProducts(response);
      })
    }

    getCategories();
    getProducts();

  },[setCategories,setProducts]);
  


  return (
    <div>
      <Banner/>
      <div className="main-content">
        <div className="layout">
          <Category categories={categories}/>
          <Products products={products} headingText="Popular Products"/>
        </div>
      </div>
    </div>
  )
}

export default Home;
