import { Copyright, Socials } from '@/containers/ecuador';
// import data
import { footerData } from '@/constants/data';
// import motion
import { motion } from 'framer-motion';
// import variants
import Link from 'next/link';
import { IoIosCall } from 'react-icons/io';
import { SiGooglemaps } from 'react-icons/si';
import { fadeIn } from 'utils/variants';


export const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className='relative top-96 z-1 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32' id="contact">
      <div className='container mx-auto h-full'>
        {/* newsletter & info */}
        <motion.div
          initial='hidden'
          whileInView={'show'}
          className='h-full flex flex-col gap-y-4'
        >
          {/* info */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12'
          >
            {/* contact */}
            <div className='flex-1 lg:max-w-[170px]'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-mes-white font-primary mb-[22px]'>
                {contact.title}
              </div>
              <Link href="https://goo.gl/maps/j47jQGcswL9J7gp8A?coh=178573&entry=tt" target='__blank' className='capitalize flex items-center gap-2 text-mes-yellow-500/80 transition hover:underline'> <SiGooglemaps className='text-2xl md:text-3xl'  /> {contact.address}</Link>
              <Link href="tel:+34914945748" className='capitalize flex items-center gap-2  text-mes-green-200 transition hover:underline'> <IoIosCall className='text-2xl' /> {contact.phone}</Link>
            </div>
            {/* program */}
            <div className='flex-1'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-mes-white font-primary mb-[22px]'>
                {hours.title}
              </div>
              <div className='flex gap-x-[46px]'>
                {hours.program.map((item, index) => {
                  return (
                    <div className='capitalize' key={index}>
                      <div>
                        <div className='text-mes-white/60'>{item.days}</div>
                        <div className='text-[20px] text-accent'>
                          {item.hours}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* social */}
            <div className='flex-1 lg:max-w-[280px] mb-12'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-mes-white font-primary mb-[22px]'>
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
          {/* copyright */}
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

