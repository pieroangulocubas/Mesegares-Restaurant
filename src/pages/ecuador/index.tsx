import { Layout } from "@/components/Layout";
import { About, Footer, Hero, Menu, Team } from '@/containers/ecuador';
import Image from "next/image";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const index = () => {
  return (
    <Layout title="Mesegares Ecuador" description="Mesegares Ecuador" >
      <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
        <Hero />
        <About />
        <Menu />
        <Team />
        <Footer />
        <div className='h-[380px] md:h-[370px]'></div>
        <WhatsAppWidget
          companyName="Mesegares Ecuador"
          replyTimeText="Te respondemos lo antes posible"
          CompanyIcon={()=><Image src="/logo.png" width="80" height="80" alt="logo" className="rounded-full scale-[2]" />}
          phoneNumber={process.env.NEXT_PUBLIC_PHONE_ECUADOR} 
          inputPlaceHolder="Escríbenos aquí"
          sendButtonText="Enviar"
          message='¡Hola! 👋🏼 ¿Qué podemos hacer por ti?'
          />
      </div>
    </Layout>
  )
}
export default index