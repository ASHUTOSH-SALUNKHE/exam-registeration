import React from 'react'
import { Link } from "react-router-dom";
import indiaLogo from "../assets/india-logo.png";
import testagencyLogo from "../assets/national-testing-agency.png"
import testlogo from "../assets/national-logo.png"
function Navbar1() {
  return (
    
      <div className = "w-full flex items-center justify-between gap-5 bg-base-100 border-b border-base-300 fixed  top-0 z-40 backdrop-blur-lg lg-base-100/80 min-h-20 bg-amber-50">
          <div className = "flex items-center gap-1 hover:opacity-80 transition-all">
              <img src = {indiaLogo} alt ="logo" className = "h-13  md:h-15 xl:h-25" />
              <h1 className="text-[10px] font-light md:text-[15px] tracking-tighter w-10 leading-3 md:w-22 text-center md:leading-3.5 xl:text-[23px] xl:leading-6 ">Department Of Higher Education</h1>
          </div>

          <div className = "text-center text-[13px] md:text-[18px] md:font-bold xl:text-[25px] font-semibold">NATIONAL ELIGIBILITY CUM ENTRANCE TEST (UG)</div>
          
          <div className = "flex gap-2 items-center">
            <img src = {testlogo} alt ="logo" className = "h-10 xl:h-16 " />
            <div className = "flex-col ">
            <div className = "hidden md:block text-md text-blue-600 xl:text-[22px] ">National Testing Agency</div>
            <div className = "hidden md:inline italic text-sm bg-green-400 relative top-[-4px] xl:text-[18px]">Excellence in Assesment</div>
          </div>
        </div>
      </div>
       
  )
}

export default Navbar1