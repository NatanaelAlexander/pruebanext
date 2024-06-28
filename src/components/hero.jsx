import Image from 'next/image'
import Casa from '../../public/casaCieloBonito.png'
/* LazyLoad */
import dynamic from 'next/dynamic'
const Formulario = dynamic(() => import('./formulario'))
export default function Hero() {
  return (
    <header className="relative">

      <Image
        src={Casa} // Ruta a tu imagen en la carpeta public
        alt="casaBonita"
        className='object-cover h-[800px]'
      />
      <section className='absolute top-0 px-5 w-full mt-20 flex items-center justify-center flex-col'>

        <div className=''>
          <h1 className='font-bold text-white'>Cuidado Experto para Hogares Inteligentes
          </h1>
          <span className='text-white'>Tu Tranquilidad, Nuestra Prioridad</span>
        </div>
        {/* Fomurlario */}
        <div className='w-full mt-16'>
          <Formulario></Formulario>
        </div>

      </section>
    </header>
  );
}