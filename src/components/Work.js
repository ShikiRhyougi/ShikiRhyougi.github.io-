import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// motion
import { motion } from 'framer-motion';
// link
import { Link } from 'react-router-dom';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/medium2.jpeg';
import Img2 from '../assets/background3.jpeg';
import Img3 from '../assets/nox house1.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
              <h2 className='h2 text-accent font-brush-script text-5xl'>My Latest Work</h2>
              </h2>
              <p className='max-w-sm mb-16'>
              Discover my unique decoration style in my latest works. More designs available in the gallery, 
              spanning contemporary to timeless classics. I aim for functional elegance tailored to individual preferences. 
              Your feedback is valued as I look forward to enhancing my next housing project.
              </p>
            </div>
            <div>
              <button className='btn btn-sm'>
                <a href="http://127.0.0.1:5500/Index2.html" target="_blank" rel="noopener noreferrer" className='btn btn-sm'>View Gallery</a>
            </button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-4 border-red-800 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Medium</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Rainy Japandi House</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <div className='group relative overflow-hidden border-4 border-red-800 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Medium</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Tea House</span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-4 border-red-800 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Small</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Modern Japanese House</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
