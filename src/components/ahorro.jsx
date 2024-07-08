import Image from "next/image"
import panel from "../../public/panelesBonitosHD.png"
export default function Ahorro() {
    return (
        <section className="relative h-[700px] overflow-hidden md:h-[400px] w-full bg-sky-500 md:flex md:items-center md:justify-between">

            <Image
                src={panel}
                className="absolute h-[700px] md:h-[400px] w-full opacity-50 md:opacity-20 object-cover md:object-left-bottom"
            />

            <article className="relative z-10 px-5 pt-24 md:pt-0 flex flex-col gap-5 md:drop-shadow-xl md:container mx-auto md:w-full">
                <h3 className="text-white text-2xl font-semibold md:text-4xl md:font-bold">Ahorro de energía a través de paneles.</h3>
                <p className="text-gray-200 text-base font-normal md:w-1/2 md:font-semibold">Mantenga su hogar inteligente funcionando sin problemas con nuestros servicios de mantenimiento regular. Proporcionamos actualizaciones de firmware, optimización del sistema y sugerimos actualizaciones para garantizar que sus dispositivos estén actualizados y funcionen de manera óptima.</p>
                <a className="text-white flex flex-row font-semibold" href="#">Ver más<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </a>
            </article>

        </section>
    )
}