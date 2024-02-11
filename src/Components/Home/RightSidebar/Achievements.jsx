import React from 'react'
import sih from '../../../assets/SIH.png'
import sit from '../../../assets/sit.png'
import { MdDeveloperBoard } from "react-icons/md";


const Achievements = () => {

    const data = [
        {
            id:1,
            img:sih,
            title:'Winner of Smart India Hackathon 2022',
        },
        {
            id:2,
            img:sit,
            title:'Winner of SIT Hackfest 2K23',
        },
    ]

  return (
    <div className='p-1 mt-2'>
        <h2 className='text-gray-200 text-lg md:text-xl lg:text-xl mb-3 ml-2'>Acheivements</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            <div className='p-4 rounded-3xl shadow-xl bg-[#1A1D24]'>
            <h3 className='text-xl font-bold text-gray-200 font-pj mb-2 flex gap-2 items-center'><MdDeveloperBoard/>Work Experience</h3>
                <span className='text-[16px] text-gray-400 block'>EIS Digital Campus</span>
                <span className='text-[13px] text-gray-400'>Full stack Developer Intern - (Aug 2023 - Nov 2023)</span><hr />
                <div className='mt-4 text-sm'>
                    <p className='text-gray-400 mb-2'><span className='text-white fw-bold'>The Atom Blog:</span> Developed a functional MVP for theatomblog.</p>
                    <p className='text-gray-400'><span className='text-white fw-bold'>EIS:</span> Improved UI/UX with Admin, Faculty, and Student dashboards Additionally, designed CSQ (Crowd Source Questioning) to boost engagement.</p>
            </div>
        </div>
        {data && data.map((item)=>( 
        <figure class="relative transition-all duration-300 cursor-pointer">
                <div className='overflow-hidden cursor-pointer h-72 rounded-3xl'>
                    <img class="w-full h-full object-cover object-center " src={item.img} alt="image description"/>
                </div>
                <figcaption class="absolute px-4 w-full text-center text-lg text-gray-200 bottom-0 font-extrabold bg-[#1A1D24] rounded-b-2xl">
                    {item.title}
                </figcaption>
            </figure>
            ))}
        </div>
    </div>
  ) 
}

export default Achievements