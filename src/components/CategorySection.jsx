import React from 'react'

const CategorySection = () => {
    const categories = [
      {
        title: "Men",
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/054/979/617/non_2x/man-in-plaid-shirt-with-hands-in-pockets-free-png.png",
      },
      {
        title: "Women",
        imageUrl:
          "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated_158538-8578.jpg",
      },
      {
        title: "Kids",
        imageUrl:
          "https://5.imimg.com/data5/SELLER/Default/2023/8/338827951/SU/UX/LA/20299944/boys-shirt-and-jeans-500x500.png",
      },
    ];
  return (
    <div className=' container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
       {categories.map((category, index) => (
         
         <div key={index} className=' mt-4 relative  h-85 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={category.imageUrl} alt='' className=' w-full h-full border-1 object-cover rounded-lg shadow-md'/>
            <div className=' absolute top-10 left-4'>
             <p className=' text-xl font-bold'>{category.title}</p>
             <p className=' text-gray-600'>View All</p>
            </div>
         </div>

       ))}
    </div>
  )
}

export default CategorySection


