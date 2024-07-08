import porque from "@/data/porque";

export default function PorqueElegirnos() {
    return (
        <section className="px-5 md:pb-20 md:container md:mx-auto">
                <article className="pt-7 pb-11 flex flex-col gap-2 md:mx-auto md:justify-between md:items-center md:pt-36 md:pb-10 md:px-10">

                    <h2 className="text-2xl font-bold text-center md:text-4xl md:pb-10 poppyns">¿Por qué elegirnos?</h2>
                    <p className="text-gray-500 text-base font-normal md:w-1/2 md:pt-5 md:text-center md:text-lg md:font-semibold md:text-gray-400 md:-mt-10">Tranquilidad con seguridad de primer nivel, automatización perfecta y atención excepcional para tu hogar inteligente.</p>

                </article>
                <article className="flex flex-col gap-5 md:flex-row">
                {porque.map((porque, index) => (
                    <div key={index} className="group md:mx-auto md:w-96 hover:bg-blue-700 transition-all hover:text-white flex flex-col text-center p-7 bg-gray-100 rounded-xl text-black">
                        <figure className="w-full flex justify-center pb-5">

                            {porque.icon}

                        </figure>
                        <h3 className="text-lg font-semibold pb-2">{porque.title}</h3>
                        <p className="text-base">{porque.description}</p>
                    </div>
                ))}
                </article>

        </section>
    );
}