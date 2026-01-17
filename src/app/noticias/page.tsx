
"use client";
import { useEffect, useState } from "react";

export default function NoticiasPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError("No se pudieron cargar las noticias.");
        }
      } catch (e) {
        setError("No se pudieron cargar las noticias.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-40 pb-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Noticias y Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Mantente actualizado con las últimas tendencias en tecnología, economía y negocios.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-16 text-lg text-gray-500">Cargando noticias...</div>
      ) : error ? (
        <div className="text-center py-16 text-red-500">{error}</div>
      ) : articles.length === 0 ? (
        <div className="text-center py-16 text-gray-500">No hay noticias disponibles en este momento.</div>
      ) : (
        <>
          {/* Featured Article */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-lg p-0 md:p-0 flex flex-col md:flex-row overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Imagen destacada */}
                  <div className="md:w-1/2 w-full h-64 md:h-auto flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {articles[0]?.image ? (
                      <img
                        src={articles[0].image}
                        alt={articles[0].title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <img
                        src={
                          articles[0]?.source?.toLowerCase().includes("tecnolog")
                            ? "/assets/images/SECCION NOTICIAS/TECNOLOGIA.jpg"
                            : articles[0]?.source?.toLowerCase().includes("econom")
                            ? "/assets/images/SECCION NOTICIAS/ECONOMIA.jpg"
                            : "/assets/images/SECCION NOTICIAS/GENERICA.jpg"
                        }
                        alt="Noticia"
                        className="object-cover w-full h-full opacity-90"
                      />
                    )}
                  </div>
              <div className="max-w-3xl p-8 md:p-12 flex flex-col justify-center">
                <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  Artículo Destacado
                </span>
                <h2 className="text-4xl font-bold mt-2 mb-4">
                  {articles[0]?.title}
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  {articles[0]?.contentSnippet}
                </p>
                <div className="flex items-center gap-4 text-sm mb-2">
                  <span>{articles[0]?.pubDate ? new Date(articles[0].pubDate).toLocaleDateString() : ""}</span>
                  <span>•</span>
                  <span>{articles[0]?.source}</span>
                </div>
                <a
                  href={articles[0]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-100 transition-colors font-semibold shadow hover:shadow-md group"
                >
                  Leer Artículo
                  <svg className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Últimas Publicaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, idx) => (
                <article
                  key={article.link || idx}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 flex items-center justify-center overflow-hidden">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <img
                        src={
                          article.source?.toLowerCase().includes("tecnolog")
                            ? "/assets/images/SECCION NOTICIAS/TECNOLOGIA.jpg"
                            : article.source?.toLowerCase().includes("econom")
                            ? "/assets/images/SECCION NOTICIAS/ECONOMIA.jpg"
                            : "/assets/images/SECCION NOTICIAS/GENERICA.jpg"
                        }
                        alt="Noticia"
                        className="object-cover w-full h-full opacity-90"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-semibold">
                        {article.source}
                      </span>
                      <span className="text-sm text-gray-500">
                        {article.pubDate ? new Date(article.pubDate).toLocaleDateString() : ""}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {article.contentSnippet}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.source}</span>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1 group"
                      >
                        Leer más
                        <svg className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Newsletter */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Newsletter</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Recibe las últimas noticias, artículos y actualizaciones directamente en tu correo.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 outline-none flex-1"
          />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Suscribirse
          </button>
        </div>
      </section>
    </div>
  );
}
