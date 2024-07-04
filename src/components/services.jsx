import Image from 'next/image';
import service from '@/data/service';

import Slider from './carouselSplide';
import React from 'react';
export default function Services() {
    
    return (
        <section className="px-5 pt-14 pb-7">
            <h2 className="text-2xl font-bold text-center md:text-4xl md:pb-10 poppyns">
                Soluciones integrales y servicios<br/>para el hogar
            </h2>

            <div className='flex flex-col gap-5 pt-7'>
                {service.map((servicio, index) => (
                    <div key={index} className="relative md:hidden">
                        <Image
                            src={servicio.imagen}
                            alt="Casa Bonita"
                            objectFit="cover"
                            className="rounded-xl h-48 object-cover w-full"
                        />
                        <span className="absolute bg-white opacity-80 w-full h-10 inset-x-0 bottom-0 flex flex-row justify-between px-2 items-center">
                            <p className="text-sm font-medium">{servicio.title}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-8">
                                <path fillRule="evenodd" className="text-blue-600" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                ))}
            </div>
            <div className='hidden md:flex'>
            <Slider></Slider>
            </div>
        </section>
    );
}