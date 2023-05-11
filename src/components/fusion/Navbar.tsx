import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import styles from '@/styles/Navbar.module.css';
import { useState } from 'react';
import { classNames } from '@/utils/classNames';
import Image from 'next/image';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className={classNames(styles["app__navbar"])}>
      <Link href="#" className={classNames(styles["app__navbar-logo"])}>
        <Image src="/fusion/logo-fusion.png" alt="logo" width={447} height={437} />
      </Link>
      <ul className={classNames(styles["app__navbar-links"])}>
        <li className="p__opensans"><Link href="#home">Inicio</Link></li>
        <li className="p__opensans"><Link href="#about">Nosotros</Link></li>
        <li className="p__opensans"><Link href="#menu">Menu</Link></li>
        <li className="p__opensans"><Link href="#team">Equipo</Link></li>
        <li className="p__opensans"><Link href="#gallery">Galería</Link></li>
        <li className="p__opensans"><Link href="#contact">Contacto</Link></li>
      </ul>
      <div className={classNames(styles["app__navbar-login"])}>
        <Link href="https://drive.google.com/file/d/1hRg4EaaBLTma55f2eQD9mTwbnHEyelxU/view?usp=sharing" target='__blank' className="custom__button">Explora la carta</Link>
      </div>
      <div className={classNames(styles["app__navbar-smallscreen"])}>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className={classNames(styles["app__navbar-smallscreen_overlay"],"flex__center","slide-bottom")}>
            <MdOutlineRestaurantMenu fontSize={27} className={classNames(styles["overlay__close"])} onClick={() => setToggleMenu(false)} />
            <ul className={classNames(styles["app__navbar-smallscreen_links"])}>
              <li><Link href="#home" onClick={() => setToggleMenu(false)}>Inicio</Link></li>
              <li><Link href="#about" onClick={() => setToggleMenu(false)}>Nosotros</Link></li>
              <li><Link href="#menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li><Link href="#team" onClick={() => setToggleMenu(false)}>Equipo</Link></li>
              <li><Link href="#gallery" onClick={() => setToggleMenu(false)}>Galería</Link></li>
              <li><Link href="#contact" onClick={() => setToggleMenu(false)}>Contacto</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};