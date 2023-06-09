// import data
import { menuData } from '@/constants/data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '@/utils/variants';
import Image from 'next/image';
import Link from 'next/link';



export const Menu = () => {
  // destructure menu data
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;
  return (
    <section className='min-h-[780px]' id="menu">
      {/* background */}
      <div className='h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0'></div>
      {/* text */}
      <div className='relative z-10 top-72 lg:top-52'>
        <motion.div
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='container mx-auto flex flex-col items-center text-center'
        >
          <motion.h2
            variants={fadeIn('down', 'tween', 0.2, 1.6)}
            className='h2 capitalize text-mes-white max-w-[400px] text-center'
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.6)}
            className='text-mes-white/70 capitalize mb-8'
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn('down', 'tween', 0.6, 1.6)}>
            <Image src={modelImg} alt='adorno' width={150} height={27} />
          </motion.div>
        </motion.div>
      </div>
      {/* menu gallery */}
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          delay: 0.2,
          duration: 1.6,
          ease: 'easeOut',
        }}
        className='relative top-80 lg:top-96'
      >
        <div className='container mx-auto'>
          <div className='lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16'>
            {/* grid */}
            <div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>
              {menuItems.map((item, index) => {
                // destructure item
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className='flex flex-row lg:flex-col h-full'>
                      {/* image */}
                      {/* reverse order for the first image and the last one */}
                      <div
                        className={`w-[45%] md:w-auto ${
                          index === 1 || index === 3
                            ? 'lg:order-1'
                            : 'order-none'
                        } `}
                      >
                        <Image src={image} alt='plato de comida' width={720} height={960} />
                      </div>
                      {/* text */}
                      <div className='bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
                        <div className='text-center'>
                          <div className='text-xl font-semibold text-dark xl:text-2xl'>
                            {name}
                          </div>
                          <div className='my-1 text-[20px] lg:text-[40px] lg:my-6 text-accent font-semibold'>
                            {price}
                          </div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Link href="https://drive.google.com/file/d/1c_d8vmUs_SLdT7PDEZrPK97b8F-bCoag/view?usp=share_link" target='__blank' className='btn w-fit mx-auto capitalize'>{btnText}</Link>
        </div>
      </motion.div>
    </section>
  );
};


