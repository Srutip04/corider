import React from 'react'
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io';
import {LuEdit} from "react-icons/lu"
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <IoMdArrowRoundBack size={28} className="mr-4" />
        </Link>
        <p className="text-[24px] font-bold">Trip 1</p>
      </div>
      <LuEdit size={28} />
    </div>
  );
}

export default Navbar