
"use client";
import { useEffect } from "react";

export default function ClientesPage() {
  // Cargar el script de Elfsight solo una vez en cliente
  useEffect(() => {
    if (typeof window !== "undefined" && !document.getElementById("elfsight-platform-script")) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = "elfsight-platform-script";
      document.body.appendChild(script);
    }
  }, []);

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
                A lo largo de nuestro crecimiento, hemos trabajado de la mano con profesionales del sector académico y equipos institucionales, participando en iniciativas orientadas a la innovación y el desarrollo digital.
              </p>
              <span className="block h-1 w-16 bg-blue-600 rounded mb-4"></span>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-2 text-justify font-medium">
                Colaboramos con:
              </p>
              <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 text-justify space-y-1">
                <li>Docentes universitarios</li>
                <li>Jurados académicos</li>
                <li>Equipos de proyectos institucionales</li>
                <li>Comunidades universitarias</li>
              </ul>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-4 text-justify">
                Estas colaboraciones nos han permitido consolidar procesos sólidos y mantener estándares de calidad desde nuestros inicios.
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
            ¿Te interesa colaborar con nuestro equipo?
          </h2>
          <p className="text-xl md:text-2xl mb-8">Conversemos sobre tu proyecto y exploremos cómo podemos aportar soluciones digitales claras, eficientes y bien estructuradas.</p>
          <a
            href="/contactenos"
            className="inline-block px-10 py-4 bg-white text-blue-700 font-semibold rounded-full hover:scale-105 hover:shadow-2xl transition-all text-lg"
          >
            Contáctanos ahora
          </a>
        </div>
      </section>

      {/* Valoraciones y Reseñas Google (Elfsight) */}
      <section className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-2xl shadow-xl px-10 py-6 md:py-8 flex flex-col items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <div className="mb-8 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
                Testimonios de Clientes
              </h2>
              <span className="block h-1 w-16 mx-auto bg-blue-600 rounded mb-4"></span>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium mb-2">
                Empresas y emprendedores que han confiado en nuestro trabajo y comparten su experiencia.
              </p>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto">
                Cada proyecto refleja nuestro compromiso con la calidad, la claridad técnica y los resultados reales.
              </p>
            </div>
            {/* Elfsight Google Reviews Widget */}
            <div className="w-full flex justify-center py-2">
              <div className="elfsight-app-7267219e-fa46-471a-a519-22df07a352fe" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <div className="w-full text-center bg-gradient-to-br from-blue-900 via-slate-800 via-slate-900 to-gray-900 text-white p-0">
        <div className="max-w-5xl mx-auto py-12 px-4 md:px-12 rounded-3xl shadow-2xl border-4 border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conoce nuestro perfil en Google
          </h2>
          <p className="text-xl mb-4 opacity-90 max-w-2xl mx-auto">
            Nuestro perfil de Google Empresas refleja la experiencia real de quienes han trabajado con nosotros.
          </p>
          <p className="text-base md:text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Opiniones verificadas, servicios actualizados y comunicación directa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mx-auto">
            <a
              href="https://share.google/w1pLRaf7EVqI1SvLa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/95 border border-gray-200 dark:bg-gray-900 dark:border-gray-700 px-8 py-5 rounded-2xl shadow-md hover:shadow-2xl transition-all font-semibold text-base md:text-lg text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '.01em' }}
            >
              <svg width="20" height="20" fill="currentColor" className="text-blue-700 group-hover:text-blue-900 transition-colors" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              <span className="text-left">Ver Perfil en Google</span>
            </a>
            <a
              href="https://share.google/w1pLRaf7EVqI1SvLa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-blue-900 border border-blue-800 px-8 py-5 rounded-2xl shadow-md hover:shadow-2xl transition-all font-semibold text-base md:text-lg text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '.01em' }}
            >
              <svg width="20" height="20" fill="currentColor" className="text-yellow-300 group-hover:text-yellow-400 transition-colors" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span className="text-left">Leer Opiniones</span>
            </a>
            <a
              href="https://g.page/r/CSBrgiprJWX0EAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border border-yellow-300 px-8 py-5 rounded-2xl shadow-md hover:shadow-2xl transition-all font-semibold text-base md:text-lg text-slate-900 hover:from-yellow-500 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '.01em' }}
            >
              <svg width="20" height="20" fill="currentColor" className="text-yellow-600 group-hover:text-yellow-800 transition-colors" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span className="text-left">Dejar una Reseña</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
