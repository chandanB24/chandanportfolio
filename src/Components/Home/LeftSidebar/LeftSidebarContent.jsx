import React from 'react'
import profile from '../../../assets/profile.png'
import cover from '../../../assets/cover.png'
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrMail } from "react-icons/gr";





const LeftSidebarContent = () => {
  return (
    <div className='flex flex-col justify-center items-center text-gray-200 font-sans'>
        <div
            class="max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-[#1A1D24] shadow-2xl rounded-3xl ">
            <div class="rounded-t-3xl h-32 overflow-hidden">
                <img class="object-cover object-center w-full" src={cover} alt='proflie'/>
            </div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img class="object-cover object-center h-32 w-full" src={profile} alt='chandan'/>
            </div>
            <div class="text-center mt-2">
                <h2 class="font-semibold text-gray-200 text-lg">Chandan B</h2>
                <p class="text-gray-200 text-sm">Full Stack Web Developer</p>
            </div>
            <ul class="py-3 text-gray-200 flex items-center justify-around px-16">
            <li class="flex flex-col items-center justify-around">
                    <a href='mailto:chandanb24002@gmail.com' class="w-4 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <GrMail/>
                    </a>
                </li>
                <li class="flex flex-col items-center justify-around">
                    <a href='https://linkedin.com/in/chandan-b-2a4b6a225' class="w-4 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <GrLinkedin/>
                    </a>
                </li>
                <li class="flex flex-col items-center justify-around">
                    <a href='https://github.com/chandanB24' class="w-4 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <GrGithub/>
                    </a>
                </li>
                <li class="flex flex-col items-center justify-around">
                    <a href='https://www.instagram.com/mr__chandu_24/' class="w-4 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <GrInstagram/>
                    </a>
                </li>
            </ul>
            <div className='p-4'>
                <div className="flex justify-between items-center mb-2">
                    <span className='text-sm text-gray-200 font-semibold'>Residence</span>
                    <span className='text-sm text-gray-400'>India</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className='text-sm text-gray-200 font-semibold'>City</span>
                    <span className='text-sm text-gray-400'>Davanagere</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className='text-sm text-gray-200 font-semibold'>Age</span>
                    <span className='text-sm text-gray-400'>21</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className='text-sm text-gray-200 font-semibold'>Mobile</span>
                    <span className='text-sm text-gray-400'>+91 9986723172</span>
                </div>
            </div>
        </div>

        <div className='w-full sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-[#1A1D24] shadow-2xl rounded-3xl py-2 px-4 mt-4'>
            <span className='text-lg text-gray-200'>Education</span><br/>
            <span className='text-sm text-gray-500'>Computer Science & Engineering</span><br/>
            <span className='text-xs text-gray-500'>7th semester - 8.51 CGPA</span><br/>
            <span className='text-xs text-gray-500'>2020 - present</span>
        </div>
        <div className='w-full sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-[#1A1D24] shadow-2xl rounded-3xl py-2 px-4 mt-4'>
            <span className='text-lg text-gray-200'>Soft Skills</span><br/>
            <span className='text-sm text-gray-500'>Quick Decision Making</span><br/>
            <span className='text-sm text-gray-500'>Time Management</span><br/>
            <span className='text-sm text-gray-500'>Planning</span><br/>
        </div>
        <div className='w-full sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-[#1A1D24] shadow-2xl rounded-3xl py-4 px-4 mt-4'>
            <span className='text-lg text-gray-200'>Language</span><br/>
            <span className='text-sm text-gray-500'>English</span><br/>
            <div class="w-full rounded-full h-1.5 bg-gray-700 mt-1 mb-2">
                <div class="bg-orange-500 h-1.5 rounded-full" style={{width:'85%'}}></div>
            </div>
            <span className='text-sm text-gray-500'>Kannada</span><br/>
            <div class="w-full rounded-full h-1.5 bg-gray-700 mt-1 mb-2">
                <div class="bg-orange-500 h-1.5 rounded-full" style={{width:'100%'}}></div>
            </div>
            <span className='text-sm text-gray-500'>Hindi</span><br/>
            <div class="w-full rounded-full h-1.5 bg-gray-700 mt-1">
                <div class="bg-orange-500 h-1.5 rounded-full" style={{width:'65%'}}></div>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebarContent