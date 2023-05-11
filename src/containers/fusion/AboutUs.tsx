
import styles from '@/styles/About.module.css'
import { classNames } from 'utils/classNames'

export const AboutUs = () => (
  <section className={classNames(styles["app__aboutus"],"app__bg","flex__center","section__padding")} id="about">
    <div className={classNames(styles["app__aboutus-content"],"flex__center")}>
      <div className={classNames(styles["app__aboutus-content_about"])}>
        <h1 className="headtext__cormorant">Nuestra Propuesta</h1>
        <img src="/fusion/spoon.svg" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"><strong className='text-mes-yellow-600'>"Mesegares Fusión"</strong> es un restaurante español que ofrece comida fusion única, combinando sabores tradicionales españoles con platos y productos latinos. Este restaurante es ideal para aquellos que buscan probar nuevos sabores y combinaciones. El ambiente del restaurante está destinado a un público familiar y amante de la cocina española. En <strong className='text-mes-yellow-600'>"Mesegares Fusión"</strong> se puede disfrutar de una experiencia gastronómica única, donde los sabores latinos y españoles se mezclan para crear una fusión irresistible. Ven y disfruta de una deliciosa comida fusion en nuestro restaurante español latino.</p>
      </div>

      <div className={classNames(styles["app__aboutus-content_knife"],"flex__center")}>
        <img src="/fusion/knife.png" alt="about_knife" />
      </div>

      <div className={classNames(styles["app__aboutus-content_history"])}>
        <h1 className="headtext__cormorant">Nuestra Visión</h1>
        <img src="/fusion/spoon.svg" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">La visión de <strong className='text-mes-yellow-600'>"Mesegares Fusión"</strong> es ofrecer una experiencia gastronómica única, combinando sabores españoles y latinos en un ambiente acogedor y amigable para un público familiar y amante de la cocina española. Nuestra meta es ser reconocidos como un restaurante español líder en comida fusion, ofreciendo una fusión de sabores irresistibles que deleitarán a nuestros clientes. En <strong className='text-mes-yellow-600'>"Mesegares Fusión"</strong> estamos comprometidos en crear una experiencia gastronómica auténtica y memorable que satisfaga los paladares más exigentes.</p>
      </div>
    </div>
  </section>
);

