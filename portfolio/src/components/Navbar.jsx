import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>

        <div className='text-2xl font-bold'>Stefan</div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>


        <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <a href="#home" className='block md:inline-block py-2 hover:text-gray-400'>Home</a>
          <a href="#about" className='block md:inline-block py-2 hover:text-gray-400'>About Me</a>
          <a href="#service" className='block md:inline-block py-2 hover:text-gray-400'>Services</a>
          <a href="#project" className='block md:inline-block py-2 hover:text-gray-400'>Projects</a>
          <a href="#contact" className='block md:inline-block py-2 hover:text-gray-400'>Contact</a>
        </div>


        <button className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;