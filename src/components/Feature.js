import React from 'react';
import imagesGif from '../images/image.gif';
const Feature = () => {
  return (
    <>
      <section
        id='feature'
        className='bg-gray-section sm:bg-black mt-10 pt-10 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-0 text-center'
      >
        <div className='text-center text-xl text-primary font-semibold uppercase'>
          The specs
        </div>
        <div className='grid grid-cols-12 sm:grid-cols-10 gap-3 align-top py-4 sm:py-12'>
          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Innovation</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              With the Billionaire Club, ART becomes useful. You will discover
              different ways to use your goods in the next phases.
            </p>
          </div>

          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Collective</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              We encourage our community to share with us and be a full part of
              the Billionaire Club growth.
            </p>
          </div>

          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Unique</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              Once you acquire an NFT from the Billionaire Club collection, you
              will be the only holder on this universe and beyond.
            </p>
          </div>

          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Community</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              Be part of a smart and ambitious community. Common goals, make
              common success.
            </p>
          </div>

          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Long-term</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              Don't get involved with the hype, choose consistency. The
              Billionaire Club project is designed to evolve and expand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
