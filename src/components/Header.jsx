// src/components/Header.jsx
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-black' : 'bg-transparent'} h-[100px]`}>
      <div className="container mx-auto flex items-center justify-between h-full px-6 py-[20px] md:py-[30px]">
        <div className="logo flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dwiujlec2/image/upload/v1696529247/Akatsuki/img/fav_amzyeb.png" 
              alt="Akatsuki Logo"
              className="mr-2"
              style={{ maxHeight: '50px' }} // Logo size
            />
            <span className="text-white text-4xl font-bold">AKATSUKI</span> {/* Larger text */}
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <a className="text-white text-[25px] hover:text-red-500 transition-all duration-300 p-4" href="#hero">Home</a>
            </li>
            <li>
              <a className="text-white text-[25px] hover:text-red-500 transition-all duration-300 p-4" href="#about">About Us</a>
            </li>
            <li>
              <a className="text-white text-[25px] hover:text-red-500 transition-all duration-300 p-4" href="#services">Mission & Vision</a>
            </li>
            <li className="relative">
              <a className="text-white text-[25px] hover:text-red-500 transition-all duration-300 p-4" href="#">
                Events <i className="bi bi-chevron-down"></i>
              </a>
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">
                <li><a className="block px-4 py-2 text-gray-800 hover:bg-red-100" href="hackyholi.html">Hacky Holi</a></li>
                <li><a className="block px-4 py-2 text-gray-800 hover:bg-red-100" href="#">Deep Drop Down 1</a></li>
              </ul>
            </li>
            <li>
              <a className="text-white text-[25px] hover:text-red-500 transition-all duration-300 p-4" href="#portfolio">Gallery</a>
            </li>
            <li>
              <a className="text-white text-[25px] hover:text-red-500 transition-all duration-300 p-4" href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <button className="text-white text-[25px] md:hidden mobile-nav-toggle">
          <i className="bi bi-list"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
