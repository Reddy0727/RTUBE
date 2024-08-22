import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { icon, logo } from '../utils/constants';
import SearchBar from './SearchBar';
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { layout, styles } from '../utils/styles';

const Header = () => {
  return (
    <header className= {`${styles.paddingX} ${layout.flexBetween} sticky top-0 bg-gradient-to-r from-sky-500 to-indigo-500 z-[5]`}>
      <div className="flex gap-4">
        {/* <IoMdMenu  className={icon}/> */}
        <Link to='/'>
            <img src={logo} alt="logo"  width={50}/>
        </Link>
      </div>
      <SearchBar />
    
     <div className='flex gap-5'>
      <MdOutlineVideoCall className={`${icon} sm:flex hidden`}/>
      <IoIosNotificationsOutline className={icon}/>
      <div className="avatar">
        <RxAvatar className={icon}/>
      </div>
     </div>
    </header>
  )
}

export default Header
