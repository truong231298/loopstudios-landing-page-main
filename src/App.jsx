import React from 'react';
import Navbar from './components/Navbar';
import Images from './components/Images.json';
import logo from "/images/logo.svg"
import iconFacebook from "/images/icon-facebook.svg"
import icontwitter from "/images/icon-twitter.svg"
import iconpinterest from "/images/icon-pinterest.svg"
import iconinstagram from "/images/icon-instagram.svg"

const App = () => {
  const ImageCard = ({ imageUrl, title }) => {
    return (
      <div className="relative sm:text-center text-left">
        <img className="w-full sm:h-auto h-48" src={imageUrl} alt={title} />
        <div className="absolute bottom-0 left-0bg-opacity-50 text-white p-2 w-full">
          <h3 className="text-lg font-bold uppercase text-white">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen">
      <section className="flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Body */}
        <div className="p-4 m-8 ">
          {/* Part 1 */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 text-center sm:text-justify ">
            <div className='hidden sm:block sm:w-1/2'>
              <ImageCard
                imageUrl={Images.projects[0].desktop}
                title={Images.projects[0].title}
              />
            </div>
            <div className='sm:hidden w-full'>
              <ImageCard
                imageUrl={Images.projects[0].mobile}
                title={Images.projects[0].title}
              />
            </div>

            <div className='sm:w-1/2 flex flex-col sm:gap-48 bg-white mb-4'>
              <p className='hidden sm:block'></p>
              <span className='bg-white sm:w-74 w-auto sm:-translate-x-10 sm:p-8'>
                <h1 className='text-2xl uppercase sm:m-2'>The leader in interactive VR</h1>
                <p className='sm:text-justify text-VeryDarkGray sm:m-2'>
                  Founded in 2011, Loopstudios has been producing world-class
                  virtual reality projects for some of the best companies around
                  the globe. Our award-winning creations have transformed
                  businesses through digital experiences that bind to their
                  brand.
                </p>
              </span>

            </div>
          </div>

          {/* Part 2 */}
          <div className="flex flex-col">
            <span className='flex justify-between items-center'>
              <h1 className='text-Black text-xl'>OUR CREATIONS</h1>
              <button className='border-2 px-4 font-semibold hidden sm:block'>See all</button>
            </span>
            <div className="flex flex-col sm:flex-row flex-wrap">
              {Images.projects.slice(1).map((project, index) => (
                <div key={index} className="m-2">
                  <ImageCard
                    imageUrl={project.desktop}
                    title={project.title}
                  />
                </div>
              ))}
            </div>
            <button className='border-2 px-4 font-semibold sm:hidden'>See all</button>

          </div>
        </div>

        {/* footer */}
        <div className='flex p-8 flex-col sm:flex-row sm:justify-between justify-center items-center bg-Black'>
          <div className='flex flex-col  justify-center items-center mb-4'>
            <img src={logo} alt="" className='mb-4 sm:mb-auto'/>
            <ul className='flex flex-col sm:flex-row gap-4'>
              {["About", "Careers", "Events", "Products", "Support"].map((link, index) => (
                <li key={index}><a href="#" className='text-white'>{link}</a></li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-2 justify-center items-center'>
            <div className='flex flex-row'>
              {[iconFacebook, icontwitter, iconpinterest, iconinstagram].map((icon, index) => (
                <div key={index}>
                  <img src={icon} alt="" className='w-6 h-6 mx-2'/>
                </div>

              ))}
            </div>
            <p className='text-DarkGray'> © 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
