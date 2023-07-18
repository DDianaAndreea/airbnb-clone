'use client'
import React, { useState } from 'react'
import Image from "next/legacy/image"
import { MagnifyingGlassCircleIcon,GlobeAltIcon,Bars3Icon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {
  const [searchInput, setSearchInput] =useState('');
  const [startDate,setStartDate] =useState(new Date());
  const [endDate,setEndDate] =useState(new Date());
  const [numberOfGuests,setNumberOfGuests]= useState(1);

  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  }

  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput=()=>{
    setSearchInput('')
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

        {/*Logo-section */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                // src='https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW'
                src='data:image/png;base64,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'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                alt=''
            />
        </div>

        {/*Search-section */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
          <input 
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            type='text'  
            className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600' 
            placeholder='Start your search'
          />
          <MagnifyingGlassCircleIcon 
            className=" hidden h-10 w-10 text-red-400 cursor-pointer md:inline-flex pr-1 md:mx-2" 
          />
        </div>

        {/*Right-section */}
        <div className='flex items-center space-x-4 justify-end text-gray-500'>
          <p className='hidden md:inline'>Become a host</p>
          <GlobeAltIcon className='h-8 cursor-pointer'/>

          <div className='flex items-center space-x-2 border-2 p-2 rounded-full  text-gray-500'>
            <Bars3Icon  className='h-8 cursor-pointer' />
            <UserCircleIcon  className='h-8 cursor-pointer' />
          </div>

        </div>

        {searchInput && (
          <div className='flex flex-col col-span-3 mx-auto mt-3'>
            <DateRangePicker 
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5861"]}
              onChange={handleSelect}
            />
            <div className='flex items-center border-b mb-4'>
              <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
              <UsersIcon className='h-5' />
              <input 
                value={numberOfGuests} 
                onChange={(e)=>setNumberOfGuests(e.target.value)}
                type='number' 
                min={1}
                className='w-12 pl-2 text-lg outline-none text-red-400'
                />
            </div>
            <div className='flex'>
              <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
              <button className='flex-grow text-red-400'>Search</button>
            </div>
          </div>
        ) }
    </header>
  )
}

export default Header