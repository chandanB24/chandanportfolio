import React from 'react'
import { GrDownload } from "react-icons/gr";
import TypingAnimator from 'react-typing-animator';

const Header = () => {

    const textArray = ["Chandan's Development Mastery.","Full Stack Developer.","MERN Stack Developer.","Click Below to get my Resume."];

    const downloadFile = ()=>{
      const fileUrl = 'https://drive.google.com/file/d/1n5Qvnusqi63yShZd3u36YFxnnm67edat/view?usp=share_link';
    window.open(fileUrl, '_blank');
  }


  return (
    <div class="h-64 mb-4 rounded-3xl overflow-hidden relative">
    <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="coverimage" className='object-cover object-center1 w-full h-full brightness-75' />
    <div className='absolute top-0 w-full h-full backdrop-blur-sm flex items-center p-4'>
        <div className='p-4 flex flex-col gap-4 justify-center items-center w-full h-full'>
              <span className='text-gray-200 text-xl md:text-2xl lg:text-5xl font-bold'>Where Vision Meets Execution</span>
              <span className='text-gray-200 text-sm md:text-lg lg:text-xl font-semibold'>   
              <TypingAnimator
                  textArray={textArray}
                  cursorColor="#333"
                  textColor='#eeeeee'
                  fontSize='20px'
                  loop
                  height='20px'
                  typingSpeed={60}
                  delaySpeed={1500}
                  backspace
                />
             </span>
              <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-2 text-center flex gap-3 items-center mt-2" onClick={()=>downloadFile()}>Resume<GrDownload/></button>
        </div>
    </div>
  </div>
  )
}

export default Header