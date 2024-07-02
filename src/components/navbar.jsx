'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const toggleComponente = () => {
    setMostrarComponente(!mostrarComponente);
  };

  return (

    <nav className="bg-blue-900 md:relative md:w-full">
      <span className=" py-3 px-5 w-full overflow-hidden md:container md:mx-auto md:flex md:justify-between">
        <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500 p-2"></div>
          <p className="text-white font-semibold">Estamos preparados las 24 Horas</p>
        </div>

        <div className='flex flex-row justify-between px-3 md:px-0 md:gap-5'>

          <div className="flex flex-row gap-1 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>
            <span className='hidden md:flex md:text-white font-semibold text-center'>Centro de llamadas: </span>
            <p className="text-sky-500 font-semibold tracking-wider text-sm md:mt-1 md:flex md:flex-row">9<span className='hidden md:flex'> </span>25252525</p>
          </div>
          <div className='hidden md:flex md:h-full md:w-0.5 bg-white'>

          </div>
          <div className="flex flex-row gap-1 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="text-white font-medium tracking-wider text-sm">ejemplocorreo@gmail.com</p>
          </div>

        </div>

      </span>
      <div className='md:container md:mx-auto'>
        <div className="flex flex-row justify-between items-center w-full absolute z-10 p-5 md:container md:mt-2">
          <div className="text-2xl font-semibold text-white text-center">Tu Logo</div>
          <div className='md:hidden'>
            <svg onClick={toggleComponente} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 font-semibold text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          {/* Renderizado condicional basado en el estado */}
          {mostrarComponente && (
            <div className="bg-white h-[800px] w-2/3 absolute top-0 z-10  right-0 shadow-2xl md:hidden">
              <div className="px-5 py-6 w-full flex flex-col">

                <div className='w-full flex justify-end'>
                  <svg onClick={toggleComponente} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 bg-blue-500 text-white rounded-full">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className='w-full'>
                  <ul className='flex flex-col items-start w-full font-semibold gap-10 mt-10 text-xl'>
                    <li className='w-full text-center'>Home</li>
                    <li className='w-full text-center'>Servicios</li>
                    <li className='w-full text-center'>Testimonios</li>
                    <li className='w-full text-center'>Nosotros</li>
                    <li className='w-full text-center'>Contacto</li>
                    <button className="relative flex items-center justify-center bg-blue-500 text-blue-500 hover:text-blue-800 hover:bg-blue-800 transition-all rounded-full w-full py-2">
                      <span className="text-white text-sm">Solicitar Presupuesto</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="absolute right-2 size-7 p-1 rounded-full  bg-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </ul>
                </div>

              </div>
            </div>
          )}
          <ul className="hidden md:flex md:flex-row md:gap-5 font-medium text-white">
            <li><span className='md:hover:border-b-2 cursor-pointer'>Home</span></li>
            <li><span className='md:hover:border-b-2 cursor-pointer'>Servicios</span></li>
            <li><span className='md:hover:border-b-2 cursor-pointer'>Testimonios</span></li>
            <li><span className='md:hover:border-b-2 cursor-pointer'>Nosotros</span></li>
            <li><span className='md:hover:border-b-2 cursor-pointer'>Contacto</span></li>
          </ul>

          <div className="hidden md:flex text-blue-500 hover:text-white">
            <button className="relative flex items-center justify-center text-xl text-opacity-0  bg-white rounded-full w-full py-1.5 px-10 hover:bg-opacity-0 transition-all border">
              <span className="font-semibold mt-[-5px]">Cotización gratis</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute size-6 font-bold right-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>

            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}
