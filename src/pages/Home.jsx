import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData'
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import { useDispatch, useSelector } from 'react-redux';
import { setProdutcts } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

const Home = () => { 

  const dispatch = useDispatch();
  const products = useSelector (state => state.product) 
  useEffect(() => {
    dispatch(setProdutcts(mockData))
    
  }, )
  return (
    <div>
      <div className=" bg-white mt-4 px-5 md:px-16 lg:px-24">
        <div className=" container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
            <div className=" bg-red-600 text-white text-xs font-bold px-2 py-3">
              SHOP BY CATOGARIES
            </div>
            <ul className="gap-y-4 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className=" flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-600 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src="images/ab-img.jpeg" className="w-full h-full" />
            <div className=" absolute top-16 left-8">
              <p className=" text-gray-800 mb-4">Code With Yousafe</p>
              <h2 className=" text-2xl font-bold text-gray-800">
                WELCOME TO E-SHOP
              </h2>
              <p className=" text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS+ PRODUCT
              </p>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <InfoSection />
        <CategorySection />

        <div className=" container mx-auto py-12">
          <h2 className=" mb-4 font-bold text-xl text-center">Top Products</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
            {products.products.slice().map((product) => (
              < ProductCard product ={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop/>
    </div>
  );
}

export default Home










