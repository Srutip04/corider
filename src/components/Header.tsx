import React from 'react'
import Navbar from './Navbar'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className="z-10">
      <Navbar />
      Header
    </div>
  );
}

export default Header