import articles from "@/data/data";

export default function Hero() {
  return (
    <section className="bg-blue-800 my-0 px-6 py-11 flex flex-col gap-8 md:flex-row md:gap-2 md:container md:mx-auto md:rounded-3xl md:py-5 md:px-11 md:-translate-y-14">


      {/* {articles.map((article, index) => (
        <article key={index} className="text-center">
          <figure className="mx-auto mb-4">
            {article.icon}
          </figure>
          <h2 className="text-lg font-semibold text-blue-600 mb-2">{article.title}</h2>
          <p className="text-gray-700">{article.description}</p>
        </article>
      ))} */}


      {articles.map((articles) => (
        <div className="flex flex-row gap-2 md:w-96">

          <figure>
            {articles.icon}
          </figure>
          <article className=" flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-white">{articles.title}
            </h3>
            <p className="text-base font-normal text-gray-400">{articles.description}</p>
          </article>

        </div>
      ))}

    </section>
  );
}