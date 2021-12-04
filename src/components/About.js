import React from 'react';
import goldenBoy from '../images/golden-boy.png';
const About = () => {
  return (
    <>
      <div
        className='about mt-10 mx-auto max-w-7xl px-4 sm:px-0 sm:mt-24'
        id='about'
      >
        <div className='grid sm:grid-cols-12 items-center'>
          <div className='sm:col-start-auto sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
            <div className='flex-shrink-0 w-full'>
              <div className='grid gap-2 sm:gap-5 grid-cols-2'>
                <div className='grid__image'>
                  <img src={goldenBoy} alt='' />
                </div>
                <div className='grid__image'>
                  <img src={goldenBoy} alt='' />
                </div>
                <div className='grid__image'>
                  <img src={goldenBoy} alt='' />
                </div>
                <div className='grid__image'>
                  <img src={goldenBoy} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='row-start-1 sm:row-start-auto sm:pl-16 sm:text-left lg:col-span-6 pl-'>
            <p className='label-title'>
              About
              <span className='hidden sm:block label-line'></span>
            </p>
            <h2 className='text-3xl sm:text-4xl tracking-wide font-bold mb-4 space-y-1 sm:space-y-2'>
              <p className='text-default'>Welcome to the</p>
              <p className='text-primary'>Billionaire Club</p>
            </h2>
            <div className='text-sm sm:text-lg text-gray font-normal mt-10'>
              <div className='bcm leading-relaxed'>
                <p>
                  <strong>The BILLIONAIRE CLUB</strong> is a private collection
                  of <strong>10 000 billionaire apes NFTs</strong>—unique
                  digital collectibles. The apes are stored as ERC-721 tokens on
                  the Ethereum blockchain and hosted on&nbsp;IPFS. Reveal on
                  October 20th.
                  <br />
                  <br />
                  <br />
                  With <strong>more than 180+ hand drawn traits</strong>, each
                  NFT is unique and comes with a membership to an exclusive
                  group of successful investors. <strong>Join</strong> an
                  ambitious ever-growing community with multiple benefits and
                  utilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
