export default function ClientesPage() {

  return (
    <div className="container mx-auto px-4 pt-40 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          NUESTROS CLIENTES Y ALIADOS
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Experiencia en entornos académicos y proyectos propios
        </p>
      </div>

      {/* Experiencia y Trayectoria */}
      <section className="mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            En INTEGRADAV SAS, nuestros primeros proyectos han sido desarrollados en <strong>entornos académicos</strong> y en <strong>iniciativas propias</strong>, trabajando en conjunto con docentes, jurados universitarios y equipos de desarrollo.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Estos proyectos han sido ejecutados bajo criterios profesionales de análisis, diseño, desarrollo y validación, permitiéndonos construir una base sólida de experiencia técnica y metodológica.
          </p>
        </div>
      </section>

      {/* Aliados y Organizaciones */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            ALIADOS Y ORGANIZACIONES
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Colaboraciones institucionales
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Hemos colaborado con:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-medium">Docentes universitarios</span>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-medium">Jurados académicos</span>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-medium">Equipos de proyectos institucionales</span>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-medium">Comunidades universitarias</span>
            </div>
          </div>
          <p className="mt-8 text-gray-600 dark:text-gray-300 text-center">
            Estas colaboraciones han fortalecido nuestros procesos y garantizado estándares de calidad desde las primeras etapas de la empresa.
          </p>
        </div>

        {/* Espacio para logos institucionales */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            Universidades y organizaciones aliadas
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Espacio reservado para logos institucionales
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema de Reseñas - Placeholder Profesional */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            VALORACIONES Y RESEÑAS
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Opiniones verificadas (próximamente)
          </p>
        </div>

        {/* Estado de preparación */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 mb-12 border border-blue-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="text-6xl mb-4 text-center">⭐</div>
                <div className="text-4xl font-bold text-gray-400 text-center">—</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">Sin reseñas aún</div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Sistema de reseñas en preparación
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Actualmente nos encontramos en proceso de habilitación del sistema de reseñas oficiales en <strong>Google Workspace</strong>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Muy pronto estarán disponibles las valoraciones de docentes, colaboradores y usuarios que han participado en nuestros proyectos.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  ⏳ En proceso de verificación
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                  🔜 Próximamente activo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Layout de reseñas (placeholder) */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Si has trabajado con nosotros en algún proyecto académico o propio, podrás dejar tu opinión una vez el sistema esté activo.
          </p>
          <button
            disabled
            className="bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-8 py-3 rounded-lg font-semibold cursor-not-allowed inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Dejar reseña (próximamente)
          </button>
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
    </div>
  );
}
