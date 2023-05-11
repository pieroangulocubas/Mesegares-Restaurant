import { SubHeading } from "@/components/fusion";
import Link from "next/link";
import {SiGooglemaps} from 'react-icons/si'
export const FindUs = () => (
  <section className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encuéntranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Calle Dr. Luis Montes, 2, 28935 Móstoles, Madrid</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horario</p>
        <p className="p__opensans">Lun - Vie: 8:00 am - 00:00 am (hasta media noche)</p>
        <p className="p__opensans">Sab - Dom: 8:00 am - 00:00 am (hasta media noche)</p>
      </div>
      <Link href="https://goo.gl/maps/5U1ebPphRhPcb8xn8" target="__blank" className="custom__button flex items-center gap-2" style={{ marginTop: '2rem' }}>
        Visítanos
        <SiGooglemaps className="text-mes-green-900" />
      </Link>
    </div>

    <div className="app__wrapper_img w-[]" >
      <img src="/fusion/vino.png" alt="vino tinto" />
    </div>
  </section>
);

