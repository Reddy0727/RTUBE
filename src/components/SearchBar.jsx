import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleChange = (e)=>setSearchTerm(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
   <form className='w-1/3 border-[1px] border-[#ccc] flex overflow-hidden rounded-full ' onSubmit={handleSubmit}>
      <input type="text" placeholder='search..' className='sm:flex-[0.92] text-dimBlack border-0 outline-0 px-2 flex-0 text-[14px]'
         value={searchTerm}
         onChange={handleChange}
      />
      <button type="submit" className='bg-gradient-to-r from-cyan-500 to-blue-500 flex-[0.08] p-[5px] text-primary text-center'>
        <IoSearch className='w-[30px] h-[25px]' />
      </button>
   </form>
  )
}

export default SearchBar
