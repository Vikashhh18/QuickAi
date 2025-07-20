import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold leading-tight">
          Create amazing content <br /> with <span className="text-primary">AI tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
          Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow effortlessly.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base mt-4">
        <button
          onClick={() => navigate('/ai')}
          className="cursor-pointer bg-primary text-white px-8 sm:px-10 py-3 rounded-xl shadow-md hover:scale-105 active:scale-95 transition duration-300"
        >
          Start creating now
        </button>
        {/* <button
          className= "cursor-pointer font-semibold text-2xl bg-white text-primary border border-gray-300 px-4 sm:px-10 py-1 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition duration-300"
        >
            Explore
        </button> */}
       <button
  onClick={() =>
    document
      .getElementById('ai-tools')
      .scrollIntoView({ behavior: 'smooth' })
  }
  className="cursor-pointer font-semibold text-2xl bg-white text-primary border border-gray-300 px-4 sm:px-10 py-1 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition duration-300"
>
  Explore
</button>
      </div>

      <div className="flex items-center gap-3 mt-10 mx-auto text-gray-600 text-sm sm:text-base">
        <img src={assets.user_group} alt="Users" className="h-8" />
        <span>Trusted by <strong>10k+</strong> creators</span>
      </div>
    </div>
  );
};

export default Hero;
