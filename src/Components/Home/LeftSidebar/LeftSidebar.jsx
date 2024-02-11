import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import LeftSidebarContent from './LeftSidebarContent';
import RightSideContent from '../RightSidebar/RightSideContent';


const LeftSidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
  <>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" onClick={toggleSidebar}>
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside id="default-sidebar"  className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${
                isSidebarOpen ? '' : '-translate-x-full sm:translate-x-0'
              }`} aria-label="Sidebar">
          <div class="h-full px-2 py-3 overflow-y-auto bg-black">
            <div className="flex justify-end items-center mb-2">
              <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 ms-3 text-xl font-bold rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 " onClick={toggleSidebar}>
                <RxCross1/>
              </button>
            </div>
            <LeftSidebarContent/>
          </div>
      </aside>
      <div class="p-4 sm:ml-72 ">
          <RightSideContent/>
      </div>
  </>
  )
}

export default LeftSidebar