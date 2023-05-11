import React from 'react';

export const Copyright = () => {
  return (
    <div className='border-t border-white/20'>
      <div className='container mx-auto'>
        <div className='pt-6 pb-8'>
          <p className='text-base text-center'>
            Copyright &copy; {new Date().getFullYear()} Los Mesegares. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};


