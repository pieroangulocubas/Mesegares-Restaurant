// import data
import { navData } from '@/constants/data';
import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


