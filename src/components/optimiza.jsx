import Image from "next/image"
import manos from "../../public/manosSinFondo.png"
import livingazul from "../../public/livingazul.jpg"
export default function optimiza() {
    
    return (

        <section className="relative md:flex md:flex-row-reverse bg-blue-900 h-auto w-full mt-20 overflow-hidden">

            <figure className="absolute h-full -z-0 inset-0 w-full">
                <Image
                    src={livingazul}
                    alt="Living Azul"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="opacity-10 "
                />
            </figure>

            <article className="md:w-1/2 flex flex-col gap-5 px-5 pt-24 md:pb-32 md:justify-center">
                <h3 className="text-white text-2xl font-semibold md:text-4xl md:font-bold">Perfeccione su hogar inteligente</h3>
                <p className="text-gray-300 text-base font-normal md:font-semibold md:w-[700px]">Mantén tu hogar inteligente sin problemas con nuestro mantenimiento regular: actualizamos firmware, optimizamos sistemas y sugerimos mejoras para mantener tus dispositivos siempre actualizados y funcionando al máximo.</p>
                <a className="text-cyan-500 flex flex-row md:font-bold" href="#">Ver más<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </a>
            </article>

            <figure className="mt-12 drop-shadow-2xl relative flex items-center justify-center h-[350px] md:h-[400px] md:w-[550px] w-full mx-auto z-10">
                <Image
                    src={manos}
                    alt="Manos"
                    layout="fill"
                    className="object-bottom object-cover drop-shadow-2xl"
                />
            </figure>

        </section>
    )
}