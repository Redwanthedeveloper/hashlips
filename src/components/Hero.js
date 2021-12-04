import React from 'react';
import hero from '../images/hero-image.jpg';

const Hero = () => {
  return (
    <section className='relative w-full mx-auto herofull'>
      <div className='h-full'>
        <div className='device-layout-component'>
          <div className='hero__bg'>
            <div
              style={{
                display: 'block',
                boxSizing: 'border-box',
                paddingTop: '50%',
              }}
            ></div>
            <img src={hero} alt='hero' className='hero__image' />
          </div>
        </div>
      </div>
      <div className='absolute inset-0 flex justify-center'>
        <div className='relative'>
          <div className='relative mx-auto mt-40 sm:mt-56 sm:w-96'>
            <div className='relative text-center flex flex-col'>
              <div className='btn-gradient p-0.5 btn-animate w-80 mx-auto mt-5'>
                <a
                  target='_blank'
                  className='uppercase text-default font-bold text-sm tracking-wider h-14 px-8 flex justify-center items-center btn-bg-gradient focus:outline-none'
                  href='#'
                >
                  <span>View on opensea</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
