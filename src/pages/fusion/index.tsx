import { Layout } from "@/components/Layout"
import { Navbar } from "@/components/fusion"
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from "@/containers/fusion"
import Image from "next/image";

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';


const index = () => {
  return (
    <Layout title="Mesegares Fusión" description="Mesegares Fusion">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer /> 
      <WhatsAppWidget
        companyName="Mesegares Fusión"
        CompanyIcon={()=><Image src="/fusion/logo-fusion.png" width="40" height="40" alt="logo" />}
        replyTimeText="Te respondemos lo antes posible"
        phoneNumber={process.env.NEXT_PUBLIC_PHONE_FUSION} 
        inputPlaceHolder="Escríbenos aquí"
        sendButtonText="Enviar"
        message='¡Hola! 👋🏼 ¿Qué podemos hacer por ti?'
        />
    </Layout>
  )
}
export default index