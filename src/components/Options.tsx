import React from "react";
import Popup from "reactjs-popup";
import { HiOutlineCamera } from "react-icons/hi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { CgFileDocument } from "react-icons/cg";
import { GrAttachment } from "react-icons/gr";
type Props = {};

const Options = (props: Props) => {
  return (
    <>
      <Popup
        className="my-popup"
        trigger={<GrAttachment size={24} className="cursor-pointer w-[20px] mr-3" />}
        position="top center"
      >
        {/* <div className="rounded-full px-5 justify-between flex bg-[#008000] w-[124px] items-center h-[44px]">
          <HiOutlineCamera className="w-5" />
          <GoDeviceCameraVideo className="w-5" />
          <CgFileDocument className="w-5" />
        </div> */}
      </Popup>
    </>
  );
};

export default Options;
