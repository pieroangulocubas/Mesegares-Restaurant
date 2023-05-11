import { FC } from 'react';
import { classNames } from '@/utils/classNames';
import styles from '@/styles/MenuItem.module.css'

interface MenuItemProps{
  title:string
  price:string
  tags:string
}
export const MenuItem:FC<MenuItemProps> = ({ title, price, tags }) => (
  <div className={classNames(styles["app__menuitem"])}>
    <div className={classNames(styles["app__menuitem-head"])}>
      <div className={classNames(styles["app__menuitem-name"])}>
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className={classNames(styles["app__menuitem-dash"])} />
      <div className={classNames(styles["app__menuitem-price"])}>
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className={classNames(styles["app__menuitem-sub"])}>
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

