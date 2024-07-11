export default function Faq() {
    return (
        <section className="grid max-w-[800px] mx-auto mt-8 px-5 md:py-32">
            <div class="flex flex-col items-center pb-5">
                <h2 class="font-bold lg:text-[3.5rem] text-black md:text-[2.5rem] text-[2rem] mt-5 tracking-tight">
                    Preguntas Frecuentes
                </h2>
            </div>
            <div class="py-5 flex flex-col gap-3">

                <details class="group">
                    <summary class="flex justify-between text-white items-center font-medium cursor-pointer list-none bg-blue-500 rounded p-3">
                        <span>Pregunta 1</span>
                        <span class="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p class="mt-3 group-open:animate-fadeIn text-gray-100 rounded font-medium bg-blue-400 p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis aliquid consectetur inventore ratione libero nam expedita quos a dolores, ad provident magni voluptatibus nesciunt amet aut fugiat velit repellendus!
                    </p>
                </details>
                <details class="group">
                    <summary class="flex justify-between text-white items-center font-medium cursor-pointer list-none bg-blue-500 rounded p-3">
                        <span>Pregunta 2</span>
                        <span class="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p class="mt-3 group-open:animate-fadeIn text-gray-100 rounded font-medium bg-blue-400 p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis aliquid consectetur inventore ratione libero nam expedita quos a dolores, ad provident magni voluptatibus nesciunt amet aut fugiat velit repellendus!
                    </p>
                </details>
                <details class="group">
                    <summary class="flex justify-between text-white items-center font-medium cursor-pointer list-none bg-blue-500 rounded p-3">
                        <span>Pregunta 3</span>
                        <span class="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p class="mt-3 group-open:animate-fadeIn text-gray-100 rounded font-medium bg-blue-400 p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis aliquid consectetur inventore ratione libero nam expedita quos a dolores, ad provident magni voluptatibus nesciunt amet aut fugiat velit repellendus!
                    </p>
                </details>

                
            </div>
        </section>
    )
}