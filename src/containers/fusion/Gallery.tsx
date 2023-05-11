import { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';

import { galleryImages } from '@/constants/data';
import { classNames } from 'utils/classNames';


import styles from '@/styles/Gallery.module.css';
import { SubHeading } from '@/components/fusion';
import Link from 'next/link';

export const Gallery = () => {
  const scrollRef = useRef<any>(null);

  const scroll = (direction:string) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <section className={classNames(styles["app__gallery"],"flex__center")} id="gallery">
      <div className={classNames(styles["app__gallery-content"])}>
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Galería de fotos</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>¡Descubre nuestras deliciosas creaciones en "Mesegares Fusión"! Síguenos en Instagram para estar al tanto de las novedades en nuestro restaurante de comida fusion. Explora nuestras fotos y descubre nuestra irresistible fusión de sabores.</p>
        <Link href="https://instagram.com" target='__blank' className="custom__button mt-8">Síguenos</Link>
      </div>
      <div className={classNames(styles["app__gallery-images"])}>
        <div className={classNames(styles["app__gallery-images_container"])} ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className={classNames(styles["app__gallery-images_card"],"flex__center")} key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className={classNames(styles["gallery__image-icon"])} />
            </div>
          ))}
        </div>
        <div className={classNames(styles["app__gallery-images_arrows"])}>
          <BsArrowLeftShort className={styles["gallery__arrow-icon"]} onClick={() => scroll('left')} />
          <BsArrowRightShort className={styles["gallery__arrow-icon"]} onClick={() => scroll('right')} />
        </div>
      </div>
    </section>
  );
};
