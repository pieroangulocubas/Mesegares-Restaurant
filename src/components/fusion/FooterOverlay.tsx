import styles from '@/styles/FooterOverlay.module.css'
import { classNames } from '@/utils/classNames';

export const FooterOverlay = () => (
  <div className={classNames(styles["app__footerOverlay"])}>
    <div className={classNames(styles["app__footerOverlay-black"])} />
    <div className={classNames(styles["app__footerOverlay-img app__bg"])} />
  </div>
);

