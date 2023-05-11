import Feature from "@/components/Feature";
import { Layout } from "@/components/Layout";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { BsFillStarFill } from "react-icons/bs";
import { GiChefToque } from "react-icons/gi";
import { RiVipDiamondFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
export default function Home() {

  const [showBg,setShowBg]=useState<boolean>(false)
  const [isOpen,setIsOpen]=useState<boolean>(false)
  useEffect(() => {
    const handleScroll=()=>{
      window.scrollY>50 ? setShowBg(true) : setShowBg(false) 
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)

    }
  }, [])
  
  return (
    <Layout title="Mesegares" description="Mesegares">
      <nav className={` h-[80px] w-full fixed top-0 z-20 ${showBg && 'bg-mes-bgAlt shadow'}`}>
          <div className="container h-full w-full flex items-center justify-center mx-auto gap-8 text-mes-white">
              <Link href="#different" className={`font-[400] text-center text-[13px] md:text-[18px] transition duration-100 transform hover:scale-105  ${showBg ? 'text-dark hover:text-mes-yellow-600' : 'hover:text-mes-yellow-200'}`}>Qué nos diferencia</Link>

              <Link href="#about" className={`font-[400] text-center text-[13px] md:text-[18px] transition duration-100 transform hover:scale-105 ${showBg ? 'text-dark hover:text-mes-yellow-600' : 'hover:text-mes-yellow-200'}`}>Nosotros</Link>

              <Link href="#restaurants" className={`font-[400] text-center text-[13px] md:text-[18px] transition duration-100 transform  hover:scale-105  ${showBg ? 'text-dark hover:text-mes-yellow-600' : 'hover:text-mes-yellow-200'}`}>Restaurantes</Link>
          </div>
      </nav>

      <section
        id="home"
        className="
          h-screen 
          bg-hero-pattern bg-fixed bg-cover bg-center bg-no-repeat
          relative
          ">
          <div className="w-full h-full bg-dark/30  backdrop-brightness-60">
            <h1 className="
                text-mes-white text-[48px] md:text-[80px] 
                border-y-4 absolute top-[50%] left-[50%] 
                transform -translate-x-[50%] -translate-y-[50%]
                text-center
                ">    
              LOS MESEGARES
            </h1>
            <Link href="#different" className="
              cursor-pointer border-2 border-mes-white mt-[128px]
            text-mes-white font-semibold leading-[180%] py-[8px] px-[16px] 
              absolute bottom-[100px] left-[50%] 
              transform -translate-x-[50%]
              text-center
              hover:bg-mes-yellow-400
              hover:border-mes-yellow-400
              transition
              hover:text-dark
              duration-500
              ">
                CONÓCENOS MÁS
            </Link>  
          </div>
      </section>
      <section className="py-[64px] md:py-[100px]" id="different">
        <div className="flex flex-col justify-center items-center gap-[64px] container">
          <h2 className="text-[32px] sm:text-[40px] text-center">
            ¿QUÉ NOS HACE DIFERENTES?
            <span className="block w-[100px] mt-[12px] sm:w-[150px] h-[3px] bg-mes-yellow-400 mx-auto rounded"/>
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap gap-[32px] justify-center">
            <Feature color="yellow" icon={<GiChefToque className="w-[32px] h-[32px] text-mes-yellow-400"/>} title="Chefs Especializados" description="Ven y prueba la experiencia culinaria que ofrecen nuestros chefs especializados. Con años de experiencia y pasión por la cocina, nuestros chefs preparan platillos únicos que combinan técnicas tradicionales y creatividad culinaria para deleitar a tu paladar. Cada bocado es una experiencia única que no te puedes perder." />
            <Feature color="red" icon={<BsFillStarFill className="w-[32px] h-[32px] text-mes-red-400"/>} title="Excelente Atención" description="Nuestro equipo de meseros amable y atento está siempre dispuesto a hacer tu experiencia en nuestro restaurante lo más agradable posible. Desde el momento en que entras, te sentirás bienvenido y cuidado. Nos aseguramos de que cada detalle se cuide para que puedas disfrutar de una experiencia de primera." />
            <Feature color="green" icon={<RiVipDiamondFill className="w-[32px] h-[32px] text-mes-green-400"/>} title="Productos de Calidad" description="En nuestro restaurante, nos comprometemos a ofrecerte los ingredientes más frescos y seleccionados en cada platillo que servimos. Desde la carne más tierna hasta las verduras de temporada más frescas, utilizamos solo los mejores ingredientes para asegurarnos de que cada platillo tenga el mejor sabor posible." />
          </div>
        </div>
      </section>
      <section className="py-[64px] md:py-[100px]" id="about">
        <div className="container flex flex-col lg:flex-row gap-[64px] lg:gap-[128px] justify-center items-center">
          <div className="w-full sm:w-[400px]">
            <img className="w-full rounded-md" src="/dueña.jpg" alt="fotografía de la dueña" />
          </div>
          <div className="flex flex-col gap-[36px]">
            <div className="flex flex-col w-full sm:w-[500px] gap-[24px]">
              <h2 className="text-[32px] sm:text-[40px]">
                Nuestra Misión
                <span className="block w-[100px] h-[3px] mt-[8px] bg-mes-yellow-400  rounded"/>
              </h2>
              <p>En Mesegares te ofrecemos una experiencia gastronómica excepcional con platos elaborados con ingredientes frescos y de alta calidad. Nos comprometemos a un servicio excepcional y un ambiente acogedor para nuestros clientes.</p>
            </div>
            <div className="flex flex-col w-full sm:w-[500px] gap-[24px]">
              <h2 className="text-[32px] sm:text-[40px]">
                Nuestra Visión
                <span className="block w-[100px] h-[3px] mt-[8px] bg-mes-yellow-400  rounded"/>
              </h2>
              <p>En Mesegares, nos esforzamos por convertirnos en el restaurante preferido de nuestros clientes, ofreciendo una experiencia única y memorable en la industria de la restauración. Buscamos liderazgo en innovación gastronómica, sostenibilidad y responsabilidad ambiental.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-mes-bgAlt py-[64px] md:py-[100px] overflow-hidden">
        <div className="container relative lg:h-[800px] flex flex-col gap-10 items-center justify-center">
          <div className="lg:absolute top-0 left-0">
            <Image src="/cerdo.jpg" alt="plato de cerdo a la parrilla" className="rounded-3xl lg:rounded-[100px]" width={600} height={400} />
            <img src="/aji.png" alt="" className="absolute hidden  lg:block top-100" />
          </div>
          <div className="lg:absolute bottom-0 right-0">
            <Image src="/fresas.jpg" alt="plato con fresas" className="rounded-3xl lg:rounded-[100px]" width={600} height={400} />
            <img src="/ajo.png" alt="" className="absolute hidden  lg:block bottom-0 right-[100%] z-10" />
          </div>
          <img src="/tomate.png" alt="" className="absolute hidden  lg:block -top-[10%] right-[20%]" />
          <img src="/rombo.png" alt="" className="absolute hidden  lg:block left-[95%] -top-[20%]" />
          <img src="/rombo.png" alt="" className="absolute hidden  lg:block left-[15%] -bottom-[10%]" />
        </div>
      </section>
      <section className="py-[64px] md:py-[100px]" id="restaurants">
        <div className="container px-5 py-24 mx-auto flex flex-col justify-center items-center gap-[64px]">
           <h2 className="text-[32px] sm:text-[40px] text-center">
            NUESTRAS PROPUESTAS CULINARIAS
            <span className="block w-[100px] mt-[12px] sm:w-[150px] h-[3px] bg-mes-yellow-400 mx-auto rounded"/>
          </h2>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <article className="sm:w-1/2 mb-10 px-4">
              <Link href="/ecuador" target="_blank" className="rounded-lg block h-96 overflow-hidden">
                <img alt="content" className="object-contain md:object-cover hover:scale-105 transition duration-150 cursor-pointer object-center h-full w-full" src="/ecuador.jpg" />
              </Link>
              <h3 className="text-[28px] sm:text-[32px] font-medium text-gray-900 mt-6 mb-3">Los Mesegares (Restaurante Ecuatoriano) </h3>
              <p className="leading-relaxed text-base">Ven y disfruta de los auténticos sabores ecuatorianos preparados por chefs expertos con ingredientes frescos y auténticos. Ofrecemos una variedad de opciones que van desde el tradicional ceviche hasta platillos innovadores, para satisfacer todos los gustos. Además, nuestra cálida hospitalidad ecuatoriana te hará sentir como en casa en una experiencia culinaria inolvidable.</p>
              <Link href="/ecuador" target="_blank" className="flex mx-auto w-fit mt-6 text-mes-white bg-mes-yellow-400 border-0 py-2 px-5 focus:outline-none hover:bg-mes-yellow-500 transition-colors duration-200 rounded">Vive la experiencia</Link>
              <Link href="https://goo.gl/maps/j47jQGcswL9J7gp8A?coh=178573&entry=tt" target="_blank"  className="flex text-sm justify-center items-center gap-2 mt-4 hover:underline"> <SiGooglemaps /> Calle Juan Alonso, 28047 Madrid</Link>
            </article>
            <article className="sm:w-1/2 mb-10 px-4">
              <Link href="/fusion" target="_blank" className="rounded-lg block h-96 overflow-hidden">
                <img alt="content" className="object-contain md:object-cover object-center hover:scale-105 transition duration-150 cursor-pointer h-full w-full" src="/fachada.jpg" />
              </Link>
              <h3 className="font-medium text-[28px] sm:text-[32px]  text-gray-900 mt-6 mb-3">Los Mesegares Fusión</h3>
              <p className="leading-relaxed text-base">Ven y disfruta de una fusión única de sabores españoles y latinos. Nuestros chefs expertos preparan platillos deliciosos con ingredientes frescos y auténticos que reflejan lo mejor de ambas culturas culinarias. Desde tapas españolas hasta platos latinos con un toque español, hay algo para todos los gustos. Y por supuesto, nuestra cálida hospitalidad te hará sentir como en casa en una experiencia culinaria inolvidable.</p>
              <Link href="/fusion" target="_blank" className="flex mx-auto w-fit mt-6 text-mes-white bg-mes-yellow-400 border-0 py-2 px-5 focus:outline-none hover:bg-mes-yellow-500 transition-colors duration-200 rounded">Vive la experiencia</Link>
              <Link href="https://goo.gl/maps/5U1ebPphRhPcb8xn8" target="_blank"  className="flex text-sm justify-center items-center gap-2 mt-4 hover:underline"> <SiGooglemaps /> Calle Dr. Luis Montes, 2, 28935 Móstoles, Madrid</Link>
            </article>
          </div>
        </div>
      </section>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="text-xl text-mes-yellow-600">MESEGARES</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Un viaje gastronómico que no te puedes perder</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-mes-yellow-900 tracking-widest text-sm mb-3">Mesegares</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="#home"  className="text-grey hover:text-gray-800">Inicio</Link>
                </li>
                <li>
                  <Link href="#different"  className="text-grey  hover:text-gray-800">Qué nos hace diferentes</Link>
                </li>
                <li>
                  <Link href="#about"  className="text-grey  hover:text-gray-800">Sobre nosotros</Link>
                </li>
                <li>
                  <Link href="#restaurants"  className="text-grey  hover:text-gray-800">Propuestas culinarias</Link>
                </li>
                <li>
                  <Link href="/ecuador" target="_blank"  className="text-grey  hover:text-gray-800">Mesegares Ecuador</Link>
                </li>
                <li>
                  <Link href="/fusion"  target="_blank" className="text-grey  hover:text-gray-800">Mesegares Fusión</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-mes-yellow-900 tracking-widest text-sm mb-3">Mesegares Ecuador</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/ecuador" target="_blank" className="text-grey hover:text-gray-800">Inicio</Link>
                </li>
                <li>
                  <Link href="/ecuador#about" target="_blank" className="text-grey hover:text-gray-800">Quiénes somos</Link>
                </li>
                <li>
                  <Link href="/ecuador#menu" target="_blank" className="text-grey hover:text-gray-800">Menú</Link>
                </li>
                <li>
                  <Link href="/ecuador#team" target="_blank" className="text-grey hover:text-gray-800">Equipo</Link>
                </li>
                <li>
                  <Link href="/ecuador#contact" target="_blank" className="text-grey hover:text-gray-800">Contacto</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-mes-yellow-900 tracking-widest text-sm mb-3">Mesegares Fusión</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/fusion" target="_blank" className="text-grey hover:text-gray-800">Inicio</Link>
                </li>
                <li>
                  <Link href="/fusion#about" target="_blank" className="text-grey  hover:text-gray-800">Propuesta & Visión</Link>
                </li>
                <li>
                  <Link href="/fusion#menu" target="_blank" className="text-grey  hover:text-gray-800">Menú</Link>
                </li>
                <li>
                  <Link href="/fusion#team" target="_blank" className="text-grey  hover:text-gray-800">Equipo</Link>
                </li>
                <li>
                  <Link href="/fusion#gallery" target="_blank" className="text-grey  hover:text-gray-800">Galería</Link>
                </li>
                <li>
                  <Link href="/fusion#contact" target="_blank" className="text-grey  hover:text-gray-800">Contacto</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5">
            <p className="text-sm text-center">© {new Date().getFullYear()} Mesegares —
              <Link href="https://linkedin.com/in/pieroangulocubas" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@pieroangulocubas</Link>
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppWidget
          companyName="Los Mesegares"
          replyTimeText="Te responderemos lo antes posible"
          CompanyIcon={()=><Image src="/logo.png" width="80" height="80" alt="logo" className="rounded-full scale-[2]" />}
          phoneNumber={process.env.NEXT_PUBLIC_PHONE_MESEGARES} 
          inputPlaceHolder="Escríbenos aquí"
          sendButtonText="Enviar"
          message='¡Hola! 👋🏼 ¿Qué podemos hacer por ti?'
          />
    </Layout>
  )
}
