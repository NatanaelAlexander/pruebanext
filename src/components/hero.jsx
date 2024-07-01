import Image from 'next/image'
import Casa from '../../public/a.png'
/* LazyLoad */
import dynamic from 'next/dynamic'
const Formulario = dynamic(() => import('./formulario'))

import React from 'react';
import Head from 'next/head';

export default function Hero() {
  return (

    <div>
      <Head>
        <title>Inicio</title>
      </Head>

      {/* Header */}
      <header className="relative h-[800px] bg-gray-900 text-white flex items-center justify-center">
        {/* Fondo de imagen */}
        <Image
          src={Casa}
          alt="Casa Bonita"
          layout="fill"
          objectFit="cover"
          objectPosition="top" // Asegura que la imagen se posicione en la parte superior
          className="absolute inset-0 object-cover contrast-[150%] brightness-90" // Eliminamos object-top y mantenemos object-cover
        />

        {/* Contenido del header */}
        <div className="relative z-0 flex flex-col md:flex-row md:container md:justify-between px-5">

          <div className='basis-1/2 drop-shadow-2xl'>
            <h1 className='font-bold text-white md:text-6xl -mt-7'>Cuidado Experto para Hogares Inteligentes
            </h1>
            <span className='text-gray-200 font-medium md:text-white mix-blend-luminosity md:font-semibold md:text-lg md:w-full drop-shadow-2xl'>Nos dedicamos a proteger tu hogar y tu tranquilidad con un servicio de calidad</span>
          </div>

          <div className='md:max-w-md md:basis-1/2 mt-12 md:mt-0'>
            <Formulario></Formulario>
          </div>

        </div>

      </header>
    </div>









    /* <header className="relative">
      <Image
        src={Casa}
        alt="casaBonita"
        className='object-cover object-top h-[800px] md:w-full'
      />
      <div className=''>

        <section className='absolute md:container top-0 md:right-0 md:left-0 px-5 mt-20 flex items-center flex-col md:flex-row md:w-full'>

          <div className='md:w-full'>
            <h1 className='font-bold text-white'>Cuidado Experto para Hogares Inteligentes
            </h1>
            <span className='text-white md:max-w-24'>Tu Tranquilidad, Nuestra Prioridad</span>
          </div>


          <div className='w-full mt-16'>
            <Formulario></Formulario>
          </div>

        </section>
      </div>
    </header> */







  );
}