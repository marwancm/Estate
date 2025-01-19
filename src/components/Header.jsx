import React from 'react'
import Navebar from './Navebar'

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full
    overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
      <Navebar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
          <a href='#Projects' className='border border-white	py-3 px-8 rounded'>Projects</a>
          <a href='#Contact' className='bg-blue-500 py-3 px-8 rounded'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header