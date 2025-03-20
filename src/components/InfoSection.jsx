import React from 'react'
import { FaShippingFast,  FaHeadset, FaMoneyBillWave, FaLock,  FaTag} from "react-icons/fa";

const InfoSection = () => {

  const infoItems = [
    {
      icon: <FaShippingFast className=" text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get Your Orders Delivered With No Extra Cost",
    },
    {
      icon: <FaHeadset className=" text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We Are Here To Assist To Any Time ",
    },
    {
      icon: <FaMoneyBillWave className=" text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full Refund If You Are Not Satisfied",
    },
    {
      icon: <FaLock className=" text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your Payment  Information Is Safe With Us",
    },
    {
      icon: <FaTag className=" text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy The Best Price On Your Products",
    },
  ];
  return (
    <div className=' bg-gray-100 '>
      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {infoItems.map((item, index) => (
         <div key={index} className=' flex flex-col items-center text-center p-4 border rounded lg:shadow md:transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          {item.icon}
          <h3 className=' text-xl font-semibold mt-4'>{item.title}</h3>
          <p className=' text-gray-800m mt-2'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default InfoSection