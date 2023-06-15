// import icons

import {
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import { SiGooglemybusiness } from 'react-icons/si';

export const socialData = [
  { href: 'https://www.facebook.com/losmesegares', icon: <FaFacebookF/>  },
  { href: '#', icon: <FaInstagram/>  },
  { href: 'https://goo.gl/maps/j47jQGcswL9J7gp8A?coh=178573&entry=tt', icon: <SiGooglemybusiness/>  },
];


export const wines = [
  {
    title: 'Entrecot de ternera',
    price: '15,00€',
    tags: 'FR | Ternera',
  },
  {
    title: 'Solomillo de ternera',
    price: '16,50€',
    tags: 'ES | Ternera',
  },
  {
    title: 'Chuletillas de cordero',
    price: '15,50€',
    tags: 'ES | Cordero',
  },
  {
    title: 'Solomillo Ibérico al Roquefort',
    price: '12,50€',
    tags: 'ES | Ternera',
  },
  {
    title: 'Parrillada al Oporto',
    price: '14,50€',
    tags: 'PT | Ternera',
  },
];

export const cocktails = [
  {
    title: 'Bacalao Roteña',
    price: '14,50€',
    tags: 'Bacalao | Salsa Roteña | Patatas',
  },
  {
    title: "Merluza a la vasca",
    price: '15,90€',
    tags: 'Merluza | Salsa Vasca | Patatas ',
  },
  {
    title: 'Emperador a la plancha',
    price: '14,50€',
    tags: 'Emperador | Verduras | Patatas',
  },
  {
    title: 'Ceviche mixto',
    price: '17,00€',
    tags: 'Pescado | Mariscos | Frio ',
  },
  {
    title: 'Arroz marinero',
    price: '16,50€',
    tags: 'Gambas | Mariscos | Caliente ',
  },
];

export const galleryImages=["/fusion/galeria01.jpg","/fusion/galeria02.jpg","/fusion/galeria03.jpg","/fusion/galeria04.jpg","/fusion/galeria05.jpg","/fusion/galeria06.jpg","/fusion/galeria07.jpg","/fusion/galeria08.jpg","/fusion/galeria09.jpg","/fusion/galeria10.jpg"]


export const navData = [
  { href: '/ecuador', name: 'Inicio' },
  { href: '#about', name: 'Nosotros' },
  { href: '#menu', name: 'Menu' },
  { href: '#team', name: 'Equipo' },
  { href: '#contact', name: 'contacto' },
];

export const heroData = {
  pretitle: 'Restaurante Ecuatoriano',
  title: 'Los Mesegares',
  subtitle:
    ' El lugar donde la comida tradicional ecuatoriana se mezcla con la hospitalidad. ',
  btnText: 'Conócenos',
};


export const aboutData = {
  pretitle: 'Nuestra historia',
  title: 'Quiénes somos',
  subtitle:
    '¡Bienvenidos a Los Mesegares! Somos un restaurante de comida ecuatoriana que te lleva a un viaje culinario por las regiones más deliciosas del país. Con cada platillo, experimentarás una fusión de sabores auténticos y aromas únicos que te transportarán a la costa, la sierra y la selva de Ecuador. En Los Mesegares, no solo encontrarás comida, sino también hospitalidad y un ambiente acogedor que harán que te sientas como en casa. ¡Te esperamos en Los Mesegares, el hogar de los sabores más auténticos de Ecuador!',
  btnText: 'Saber más',
  image: "/ecuador/about/plate.png",
};

export const menuData = {
  title: 'Descubre Nuestro Festín de Sabores',
  subtitle: 'Mira algunos de nuestros platos preferidos',
  modelImg: "/ecuador/model-white.png",
  btnText: 'ver el menú completo',
  menuItems: [
    {
      image: "/ecuador/menu/sopa-marinera.jpg",
      name: 'Sopa Marinera',
      price: '$7.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: "/ecuador/menu/caldo-salchicha.jpg",
      name: 'Caldo de salchicha',
      price: '$9.49',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: "/ecuador/menu/arroz-mariscos.jpg",
      name: 'Arroz con mariscos',
      price: '$8.50',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: "/ecuador/menu/seco-carne.jpg",
      name: 'Seco de carne',
      price: '$9.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
  ],
};

export const teamData = {
  pretitle: 'nuestro equipo',
  title: 'Conozca a nuestra chef',
  sub1: 'Permítannos presentarles a nuestra talentosa y apasionada chef, [nombre de la chef]. Con una trayectoria culinaria impresionante y un amor innato por la cocina, [nombre de la chef] junto con su equipo se han convertido en el alma de nuestro restaurante. Con cada plato que crea, muestra su creatividad y habilidad para combinar sabores únicos que cautivan a nuestros comensales',
  sub2: '"En nuestro restaurante, nos enorgullece servir platos increíbles con ingredientes frescos y cuidando cada detalle. Nos esforzamos al máximo para sorprenderte y ofrecerte una experiencia gastronómica inolvidable. ¡Tu satisfacción es nuestra mayor recompensa y nos encanta consentirte en cada visita!" ',
  name: 'sara peter',
  occupation: 'chef',
  signatureImg: "/ecuador/team/signature.png",
  chefImg: "/ecuador/team/chef.png",
};


export const footerData = {
  contact: {
    title: 'Ubicación de contacto',
    address: 'Calle Juan Alonso, 28047 Madrid',
    phone: '+34 914 94 57 48',
  },
  hours: {
    title: 'Horario de atención',
    program: [
      {
        days: 'Lunes - Viernes',
        hours: '08:00 AM - 00:00 AM (Hasta media noche)',
      },
      {
        days: 'Sábado - Domingo',
        hours: '08:00 AM - 00:00 AM (Hasta media noche)',
      },
    ],
  },
  social: {
    title: 'redes sociales',
    icons: [
      { href: 'https://www.facebook.com/losmesegares', icon: <FaFacebookF/>  },
      { href: '#', icon: <FaInstagram/>  },
      { href: 'https://goo.gl/maps/j47jQGcswL9J7gp8A?coh=178573&entry=tt', icon: <SiGooglemybusiness/>  },
    ],
  },
};