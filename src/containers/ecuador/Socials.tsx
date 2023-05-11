// import data
import { socialData } from '@/constants/data';
import Link from 'next/link';


export const Socials = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((item, index) => {
        return (
          <Link
            className='border border-white/60 text-mes-white/60 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'
            href={item.href}
            key={index}
            target='__blank'
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};


