import React from 'react'
import Navbar from './Navbar'
import Dropdown from './Dropdown'
import groupimg from "../assests/Group 5.png"
type Props = {}

const Header = (props: Props) => {
  return (
    <div className="z-10">
      <Navbar />
      <div className="flex justify-between border-b-[1px] items-center mt-2 pb-3">
        <div className="flex items-center">
          <img src={groupimg} className="w-[48px] mr-4 cursor-pointer" alt="" />
          <div>
            <p className="font-medium text-[16px]">
              From{" "}
              <span className="font-bold text-[18px]">IGI Airport, T3</span>
            </p>
            <p className="font-medium text-[16px]m ">
              To <span className="font-bold text-[18px]">Sector 28</span>
            </p>
          </div>
        </div>
        <Dropdown/>
      </div>
    </div>
  );
}

export default Header