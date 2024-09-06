// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center">
      {/* Overlay with reduced opacity */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{ zIndex: 1 }} // Ensure this is above the background image
      ></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dwiujlec2/image/upload/v1696529276/Akatsuki/img/teamAkatsuki6_cmfaas.jpg")`,
          backgroundSize: 'cover', // Ensures the image covers the entire section
          backgroundPosition: 'center top', // Positions the image at the top center
          zIndex: 0, // Ensure this is below the overlay
        }}
      ></div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white px-4 pt-24 md:pt-32 lg:pt-48 z-20">
        <h1 className="text-2xl md:text-4xl lg:text-8xl font-bold uppercase mb-4 md:mb-6 lg:mb-8">
          Welcome to Akatsuki
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-12">
          The Coding Club of R.C.Patel Institute of Technology
        </h2>
        <a
          href="#about"
          className="inline-flex items-center justify-center w-16 h-16 text-2xl font-medium text-white border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-10"
        >
          <i className="bx bx-chevrons-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
