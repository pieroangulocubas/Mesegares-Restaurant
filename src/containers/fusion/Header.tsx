
import { SubHeading } from '@/components/fusion';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { classNames } from 'utils/classNames';

export const Header = () => (
  <header className={classNames(styles["app__header"],"app__wrapper","section__padding")} id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Persigue el nuevo sabor" />
      <h1 className={classNames(styles["app__header-h1"])}>Mesegares Fusión</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Un sabor único que combina la pasión de España y la calidez de Latinoamérica, ¡te esperamos en nuestro restaurante!</p>
      <Link href="https://drive.google.com/file/d/1hRg4EaaBLTma55f2eQD9mTwbnHEyelxU/view?usp=sharing" target='__blank' className="custom__button">Explora la Carta</Link>
    </div>

    <div className="app__wrapper_img">
      <img src="/fusion/welcome.png" alt="imagen de la cabecera" />
    </div>
  </header>
);  

