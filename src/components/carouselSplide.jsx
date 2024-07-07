'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import Image from 'next/image';

import service from '@/data/service';

const Slider = () => {
    return (
        <section className='overflow-hidden container mx-auto ' style={{ maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 4%, rgba(19,7,17,1) 16%, rgba(178,66,155,1) 86%, rgba(195,72,170,0) 96%)' }}>
            <Splide options={{
                type: 'slide',
                perPage: 2,  // Mostrar 3 elementos a la vez
                gap: '1rem',
                padding: '0%',  // Sin padding para centrar el primer elemento
                autoplay: true,
                focus: 'center',
                trimSpace: false,
                pagination: true
            }}>
                {service.map((servicio, index) => (
                    <SplideSlide key={index} className='relative h-96 cursor-pointer'>
                        <Image
                            src={servicio.imagen}
                            alt="Casa Bonita"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className='rounded-xl object-cover w-1/2'
                        />
                        <span className="absolute bg-white opacity-80 w-full h-14 inset-x-0 bottom-0 flex flex-row justify-between px-5 items-center">
                            <p className="text-lg font-semibold">{servicio.title}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-10">
                                <path fillRule="evenodd" className="text-blue-600" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </SplideSlide>
                ))}
            </Splide>

            <style jsx global>{`
      `}</style>
        </section>
    );
};

export default Slider;