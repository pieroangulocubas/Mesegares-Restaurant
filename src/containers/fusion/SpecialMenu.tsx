import { classNames } from 'utils/classNames';
import { MenuItem, SubHeading } from '@/components/fusion';
import { cocktails, wines } from '@/constants/data';
import styles from '@/styles/SpecialMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdWine } from 'react-icons/io';
import { MdFreeBreakfast, MdRestaurant } from 'react-icons/md';

export const SpecialMenu = () => (
  <section className={classNames(styles["app__specialMenu"],"flex__center","section__padding")} id="menu">
    <div className={classNames(styles["app__specialMenu-title"],"flex flex-col items-center")}>
      <SubHeading title="Menu que se adapta a tu paladar" />
      <h1 className="headtext__cormorant">Especiales del día</h1>
    </div>

    <div className={classNames(styles["app__specialMenu-menu"])}>
      <div className={classNames(styles["app__specialMenu-menu_wine"],"flex__center")}>
        <p className={classNames(styles["app__specialMenu-menu_heading"])}>Vinos & Cervezas</p>
        <div className={classNames(styles["app__specialMenu_menu_items"])}>
          {wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className={classNames(styles["app__specialMenu-menu_img"])}>
        <Image src="/fusion/carta.jpg" alt="imagen de la portada de la carta" className='rounded-md' width={410} height={615} />
      </div>

      <div className={classNames(styles["app__specialMenu-menu_cocktails"],"flex__center")}>
        <p className={classNames(styles["app__specialMenu-menu_heading"])}>Cócteles</p>
        <div className={classNames(styles["app__specialMenu_menu_items"])}>
          {cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }} className='flex flex-col md:flex-row gap-3'>
      <Link href="https://drive.google.com/file/d/1awtqo-3I_O2p_l1ELRHA2Hxj25LY6Tyg/view?usp=sharing" target="_blank" className="custom__button flex justify-center items-center gap-2">Vinos & Licores <IoMdWine /> </Link>
      <Link href="https://drive.google.com/file/d/1hRg4EaaBLTma55f2eQD9mTwbnHEyelxU/view?usp=sharing" target="_blank" className="custom__button flex justify-center items-center gap-2">Carta Mesegares Fusión <MdRestaurant /> </Link>
      <Link href="https://drive.google.com/file/d/1fcV_SU2YYacR-RjEs3QFDDJYe2jvIBIl/view?usp=sharing" target="_blank" className="custom__button flex justify-center items-center gap-2"> Desayunos <MdFreeBreakfast/></Link>
    </div>
  </section>
);
