import React from "react";
import Options from "./Options";
import { AiOutlineSend } from "react-icons/ai";


type Props = {};

const SendMessage = (props: Props) => {
  return (
    <div className=" flex w-full justify-center items-center mb-8">
      <div className="bg-white w-full flex p-2 justify-between rounded-lg mt-7">
        <form action="" className="flex w-full p-1 px-2">
          <input
            className="text-[14px]  focus:
              outline-none w-full placeholder:text-[#B7B7B7] font"
            placeholder="Reply to @Rohit Yadav"
          />
          <div className="flex items-center">
            <Options/>
            <button>
              <AiOutlineSend size={24} className="w-[20px] mr-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
