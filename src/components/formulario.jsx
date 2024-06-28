import React from 'react';
const Formulario = () => {
    return (
        <form action="" className='bg-white p-6 rounded-xl'>
            <h2 className='font-semibold text-2xl text-gray-700'>Cotización Gratis</h2>

            <div className='flex flex-col gap-4 mt-6'>

                <input
                    className='bg-gray-100 rounded w-full p-3'
                    id="name"
                    placeholder='Nombre'
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                />

                <input className='bg-gray-100 rounded w-full p-3'
                    placeholder='Email'
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                />
                <textarea
                    className='bg-gray-100 rounded  w-full p-3 h-28'
                    placeholder='Te gusto algun servicio o tienes dudas?'
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                />

                <div>

                    <button className="relative flex items-center justify-center text-xl text-white bg-blue-500 rounded-full w-full py-2">
                        <span className="">Solicitar Presupuesto</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute right-1 size-8 p-1 rounded-full text-blue-500 bg-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    );
}
export default Formulario;