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
      {/* Header */}
      <header className="relative h-[800px] bg-gray-900 text-white flex items-center justify-center">
        {/* Fondo de imagen */}
        <Image
          src={Casa}
          alt="Casa Bonita"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="absolute inset-0 object-cover contrast-[150%] brightness-90"
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
  );
}