
import { FooterOverlay } from '@/components/fusion';
import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { SiGooglemybusiness } from 'react-icons/si';
import { classNames } from 'utils/classNames';


export const Footer = () => (
  <footer className={classNames(styles["app__footer"],"section__padding")} id="login">
    <FooterOverlay />
    <div className={classNames(styles["app__footer-links"])}>
      <div className={classNames(styles["app__footer-links_contact"])}>
        <h1 className={classNames(styles["app__footer-headtext"])}>Contáctanos</h1>
        <p className="p__opensans">C. Dr. Luis Montes, 2, 28935 Móstoles, Madrid</p>
        <p className="p__opensans">+34 664 52 1897</p>
        <p className="p__opensans">+34 912 99 8263</p>
      </div>

      <div className={classNames(styles["app__footer-links_logo"], "flex flex-col items-center")}>
        <Image src="/fusion/mesegares-hori.png" alt="footer_logo" width={300} height={70}/>
        <p className="p__opensans">&quot;Fusión de sabores, pasión en cada bocado.&quot;</p>
        <Image src="/fusion/spoon.svg" alt='spoon' className="spoon__img mt-[15px]"  width={40} height={10} />
        <div className={classNames(styles["app__footer-links_icons"],"flex justify-center")}>
          <Link href="#">
            <FiFacebook />
          </Link>
          <Link href="https://goo.gl/maps/GtVpCHT3GcCZCojq6?coh=178573&entry=tt" target='__blank'><SiGooglemybusiness /></Link>
          <Link href="#">
            <FiInstagram />
          </Link>
        </div>
      </div>

      <div className={classNames(styles["app__footer-links_work"])}>
        <h1 className={classNames(styles["app__footer-headtext"])}>Horario</h1>
        <p className="p__opensans">Lunes-Viernes:</p>
        <p className="p__opensans">08:00 am - 00:00 am</p>
        <p className="p__opensans">Sábado-Domingo:</p>
        <p className="p__opensans">08:00 am - 00:00 pm</p>
      </div>
    </div>

    <div className={classNames(styles["footer__copyright"])}>
      <p className="p__opensans">{new Date().getFullYear()} Mesegares. Todos los derechos reservados.</p>
    </div>

  </footer>
);

