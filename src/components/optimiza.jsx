import Image from "next/image"
import manos from "../../public/manos.png"
import livingazul from "../../public/livingazul.jpg"
export default function optimiza() {
    return (
        <section className="relative bg-blue-900 h-auto w-full mt-20 overflow-hidden">

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
            <article className="flex flex-col gap-5 px-5 pt-24">
                <h3 className="text-white text-2xl font-semibold">Perfeccione su hogar inteligente</h3>
                <p className="text-gray-300 text-base font-normal">Mantén tu hogar inteligente sin problemas con nuestro mantenimiento regular: actualizamos firmware, optimizamos sistemas y sugerimos mejoras para mantener tus dispositivos siempre actualizados y funcionando al máximo.</p>
                <a className="text-cyan-500 flex flex-row" href="#">Ver más<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </a>
            </article>

            <figure className="mt-12 relative flex items-center justify-center bottom-0 h-[280px] w-[400px] mx-auto z-10">
                <Image
                    src={manos}
                    alt="Manos"
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                />
            </figure>



        </section>
    )
}