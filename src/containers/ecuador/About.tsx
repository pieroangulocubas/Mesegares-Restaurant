import React from 'react';
// import data
import { aboutData } from '@/constants/data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, plateVariants, staggerContainer } from '@/utils/variants';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
  // destructure data
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className='min-h-[620px]' id="about">
      <div className='container mx-auto min-h-[620px]'>
        {/* text & image wrapper */}
        <motion.div
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='min-h-[620px] flex flex-col lg:flex-row items-center'
        >
          {/* text */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className='flex-1 text-center lg:text-left'
          >
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8 max-w-[560px]'>{subtitle}</p>
            <Link href="#menu" className='btn w-fit capitalize mx-auto lg:mx-0'>
              {btnText}
            </Link>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className='-mb-[200px] -mr-[186px] z-10'
          >
            <Image src={image} alt='plato flotante' width={778} height={682} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


