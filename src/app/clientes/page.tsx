export default function ClientesPage() {

  return (
    <>
      {/* Hero Visual */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/assets/images/fronted.jpg"
            alt="Clientes satisfechos KECECA SOLUTIONS"
            className="w-full h-full object-cover opacity-60"
            style={{ pointerEvents: 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-gray-800/80" />
        </div>
        <div className="container mx-auto px-4 pt-36 pb-24 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            NUESTROS CLIENTES Y ALIADOS
          </h1>
          <p className="text-2xl md:text-3xl text-white font-light max-w-2xl mx-auto mb-8 drop-shadow-lg">
            Experiencia en entornos académicos y proyectos propios
          </p>
        </div>
      </section>

      {/* Experiencia y Aliados (alineación profesional, sin tarjetas) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-left md:text-left">
                Aliados y Organizaciones
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 text-justify">
                Hemos trabajado junto a:
              </p>
              <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 text-justify space-y-1">
                <li>Docentes universitarios</li>
                <li>Jurados académicos</li>
                <li>Equipos de proyectos institucionales</li>
                <li>Comunidades universitarias</li>
              </ul>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-4 text-justify">
                Estas colaboraciones han fortalecido nuestros procesos y garantizado estándares de calidad desde las primeras etapas de la empresa.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="/assets/images/oficina 2.jpg"
                alt="Colaboración y alianzas"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para ser parte de nuestros clientes?
          </h2>
          <p className="text-xl md:text-2xl mb-8">Hablemos de tu proyecto y llevemos tu organización al siguiente nivel.</p>
          <a
            href="/contactenos"
            className="inline-block px-10 py-4 bg-white text-blue-700 font-semibold rounded-full hover:scale-105 hover:shadow-2xl transition-all text-lg"
          >
            Contáctanos ahora
          </a>
        </div>
      </section>

      {/* Valoraciones y Reseñas visual profesional */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto rounded-2xl shadow-xl p-8 flex flex-col items-center bg-white dark:bg-gray-900">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              VALORACIONES Y RESEÑAS
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
              Opiniones verificadas (próximamente)
            </p>
            <div className="text-6xl mb-2 text-yellow-400">⭐</div>
            <div className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">Sin reseñas aún</div>
            <div className="text-base text-gray-600 dark:text-gray-300 mb-4 text-center">Pronto podrás ver aquí las opiniones de nuestros clientes y aliados.</div>
            <button
              disabled
              className="bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold cursor-not-allowed inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Dejar reseña (próximamente)
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <div className="text-center bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white rounded-3xl p-12 shadow-2xl border border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para Iniciar tu Proyecto Digital?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Contáctanos y descubre cómo podemos llevar tu negocio al siguiente nivel
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/contactenos"
            className="bg-white text-slate-900 px-10 py-4 rounded-full hover:bg-gray-100 hover:shadow-xl transition-all font-semibold text-lg inline-block"
          >
            Contáctanos
          </a>
          <a
            href="/proyectos-web"
            className="bg-white/10 backdrop-blur text-white border-2 border-white/50 px-10 py-4 rounded-full hover:bg-white/20 hover:border-white transition-all font-semibold text-lg inline-block"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </>
  );
}
