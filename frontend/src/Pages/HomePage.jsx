import React from "react";
import Header from "../components/Layout/Header/Header";
import Sliders from "../components/Layout/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";



const HomePage = () => {
  return (

 
   <>
   
      <Sliders />
      <Categories />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      
     
   </>
  );
};

export default HomePage;