import React from 'react'
import { HiMiniWindow } from "react-icons/hi2";
import { MdBusiness } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";



const Services = () => {

    const data = [
        {
        id:1,
        title:'Web Development',
        description:'Building digital landscapes with code, where ideas come to life',
        icon:<HiMiniWindow/>,
        bg:'bg-orange-500'
    },
        {
        id:2,
        title:'Portfolio Development',
        description:'Elevate your professional image with expert portfolio development.',
        icon:<MdBusiness/>,
        bg:'bg-blue-500'

    },
        {
        id:3,
        title:'Database Development',
        description:'Crafting robust databases to fuel your business efficiency.',
        icon:<FaDatabase/>,
        bg:'bg-green-500'

    },
    ]


  return (
    <div className='p-1'>
         <h2 className='text-gray-200 text-lg md:text-xl lg:text-xl mb-3 ml-2'>Services</h2>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-4">
          { data && data.map((item)=>
          (
          <div className={`p-4 rounded-3xl shadow-xl ${item.bg} flex flex-col justify-center items-center`}>
                <span className='text-gray-200 text-5xl'>{item.icon}</span>
                    <div className='mt-3'>
                        <h3 className='text-xl font-bold text-gray-200 font-pj text-center'>{item.title}</h3>
                        <span class="text-sm text-gray-200 font-pj">
                            {item.description}
                        </span>
                    </div>
            </div>))}
         </div>
    </div>
  )
}

export default Services