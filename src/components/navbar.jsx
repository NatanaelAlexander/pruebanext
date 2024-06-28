'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const toggleComponente = () => {
    setMostrarComponente(!mostrarComponente);
  };

  return (
    <nav className="">
      <span className="flex flex-row justify-between bg-blue-900 py-3 px-5 w-full overflow-hidden">
        <div className="hidden">
          <div className="h-2 w-2 rounded-full bg-red-700"></div>
          <p className="">Estamos preparados las 24 Horas</p>
        </div>

        <div className="flex flex-row gap-1 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
          </svg>
          <p className="text-blue-500 font-semibold tracking-wider text-sm">925252525</p>
        </div>

        <div className="flex flex-row gap-1 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <p className="text-white font-medium tracking-wider text-sm">ejemplocorreo@gmail.com</p>
        </div>
      </span>

      <div className="flex flex-row justify-between w-full p-5 absolute z-10">
        <div className="text-2xl font-semibold text-white">Tu Logo</div>
        <div>
          <svg onClick={toggleComponente} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 font-semibold text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        {/* Renderizado condicional basado en el estado */}
        {mostrarComponente && (
          <div className="bg-white h-screen w-2/3 absolute top-0 right-0 shadow-2xl">
            <div className="px-5 py-6 w-full flex justify-end">
              <svg onClick={toggleComponente} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 bg-blue-500 text-white rounded-full">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <ul className="hidden">
        <li>Home</li>
        <li>Servicios</li>
        <li>Testimonios</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <div className="hidden">
        <button>Solicitar Presupuesto</button>
      </div>
    </nav>
  );
}
