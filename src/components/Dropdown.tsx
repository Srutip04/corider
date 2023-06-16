import React from "react";
import Popup from "reactjs-popup";
import icon from "../assests/Icon.png";
import report from "../assests/Icon (1).png";
import { BsPeople, BsTelephone } from "react-icons/bs";
type Props = {};

const Dropdown = (props: Props) => {
  return (
    <>
      <Popup
        trigger={
          <div className="cursor-pointer ">
            <img src={icon} className=" h-[16px] mr-2" alt="" />
          </div>
        }
        position="bottom right"
      >
        <div className="w-[156px] bg-white h-[137px] rounded-xl shadow-lg">
          <div className="p-3 flex items-center border-b-[1px]">
            <BsPeople className="mr-3 w-[20px]" />
            <p className="font-semibold text-[14px]">Members</p>
          </div>
          <div className="p-3 flex items-center border-b-[1px]">
            <BsTelephone className="mr-3 w-[20px]" />
            <p className="font-semibold text-[14px]">Share Number</p>
          </div>
          <div className="p-3 flex items-center">
            <img src={report} className="mr-3 w-[20px]" alt="" />
            <p className="font-semibold text-[14px]">Report</p>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Dropdown;
