import { SubHeading } from "@/components/fusion";
import styles from "@/styles/Chef.module.css";
import Image from "next/image";
import { classNames } from "utils/classNames"

export const Chef = () => (
  <section className="app__bg app__wrapper section__padding" id="team">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <Image src="/fusion/equipo.png" alt="foto del equipo" className="rounded-lg" width={665} height={998} />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Palabra del Chef" />
      <h1 className="headtext__cormorant">En qué creemos</h1>

      <div className={classNames(styles["app__chef-content"])}>
        <div className={classNames(styles["app__chef-content_quote"])}>
          <Image src="/fusion/quote.png" alt="quote_image" width={94} height={80} />
          <p className="p__opensans">¡Te invitamos a probar nuestra deliciosa fusión de sabores en nuestro restaurante!</p>
        </div>
        <p className="p__opensans"> Permítenos llevar tu paladar a un viaje lleno de emociones, donde el fuego de la cocina y el amor por la gastronomía se unen para crear momentos memorables. </p>
      </div>

      <div className={classNames(styles["app__chef-sign"])}>
        <p>Ana María</p>
        <p className="p__opensans">Chef</p>
      </div>
    </div>
  </section>
);

