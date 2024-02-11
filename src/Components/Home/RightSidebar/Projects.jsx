import React from 'react'
import SIH2 from '../../../assets/SIH2.png'
import falcon from '../../../assets/falcon.png'
import SIT2 from '../../../assets/EvSit.png'
import Snapcash from '../../../assets/Snapcash.png'
import collegenews from '../../../assets/collegenews.png'
import shopmate from '../../../assets/shopmate.png'
import atomblog from '../../../assets/atomblog.png'


const Projects = () => {

    const projectData = [
        {
            id:1,
            title:"Shopmate",
            img:shopmate,
            des:'Leading the team of 4,To Develop an e-commerce solution to empower local sellers in creating and customizing their online stores, while efficiently connecting consumers with nearby Shops',
            technology:['React.js','Node.js','express.js','TailwindCSS','MongoDB'],
            status:'Ongoing'
        },
        {
            id:2,
            title:"The Atom Blog",
            img:atomblog,
            des:'Collaborated with a product designer and senior developer at EIS Digital Campus to create the Minimal Viable Product for theatomblog, an intuitive platform for generating multiple blog pages',
            technology:['React.js','TailwindCSS','Bootstrap','Codeigniter4','MySQL'],
            status:'Ongoing'
        },
        {
            id:3,
            title:"College News",
            img:collegenews,
            des:'Created a demo platform aimed at establishing streamlined communication between students and authorities, fostering updates and eliminating the need for multiple WhatsApp groups',
            technology:['React.js','Node.js','express.js','TailwindCSS','MongoDB'],
            status:'Personal'
        },
        {
            id:4,
            title:"Anti Piracy Smart India Hackathon Project ",
            img:SIH2,
            des:'Teamed up for Anti-Piracy Smart India Hackathon. Developed a system detecting pirated users on platforms like OTT, reporting their usernames.',
            technology:['HTML','CSS','Javascript','Flask(Python)','MySQL'],
            status:'Winner'
        },
        {
          id:5,
          title:"EV vehicle charging station locator Hackfest2k23",
          img:SIT2,
          des:'Voltage Vikings an EV station locator web app. Users locate nearby charging stations and access a module supporting small EV businesses.',
          technology:['HTML','CSS','Javascript','Django','MySQL'],
          status:'Winner'
      },
        {
          id:6,
          title:"Falcon a CSE Forum Event Management System",
          img:falcon,
          des:"Falcon a streamlined Forum event management system with user participation features, and an intuitive admin panel for managing events.",
          technology:['React.js','Node.js','express.js','MySQL'],
          status:'Personal'
        },
        {
          id:7,
          title:"SnapCash",
          img:Snapcash,
          des:"Developed a payment wallet application with simulated user balances, facilitating seamless peer-to-peer transactions.",
          technology:['React.js','Node.js','express.js','MongoDB','TailwindCSS'],
          status:'Personal'
        },
     
    ]




  return (
    <div className='p-1'>
        <h2 className='text-gray-200 text-lg md:text-xl lg:text-xl mb-3 ml-2'>Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
       {projectData && projectData.map((item)=>(
       <div className="bg-[#1A1D24] border-none mt-3 rounded-3xl shadow-l relative" key={item.id}>
            <span className=' absolute top-4 right-3 bg-green-500 text-gray-200 px-3 py-1 rounded-3xl border-none text-sm'>{item.status}</span>
            <div className="overflow-hidden cursor-pointer h-56 rounded-t-3xl rounded-b-none">        
                <img className="w-full h-full object-cover object-center" src={item.img} alt='computer'/>
            </div>
            <div className="p-4">
                <h2 class="block lg:text-xl sm:text-lg poppins font-bold text-gray-200">{item.title}</h2>
                <span className="block text-sm lg:text-[16px] mt-3 mb-3">
                    <span className="leading-5 text-gray-400">{item.des}</span>
                </span>
                <div className="card-footer bg-transparent border-none bottom-0 flex flex-wrap mt-auto">
                    {item.technology.map((tech)=>(
                    <button className='bg-[#33363d] text-gray-200 px-3 py-1 rounded-3xl border-none shadow-md mt-3 text-sm mr-3'>{tech}</button>))}
                </div>
            </div>
        </div>
        )) }
        </div>
    </div>
  )
}

export default Projects