import ServiceCard from "@/components/ServiceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Desarrollo Web y Automatización Digital",
  description: "Desarrollo web profesional, chatbots con IA para WhatsApp, automatización de procesos, sistemas personalizados y optimización SEO. Servicios digitales completos para empresas en Colombia.",
  keywords: [
    "desarrollo web profesional",
    "chatbots WhatsApp Colombia",
    "automatización empresarial",
    "sistemas a medida",
    "SEO local",
    "e-commerce Colombia",
    "inteligencia artificial empresas",
    "mantenimiento web"
  ],
  openGraph: {
    title: "Servicios Digitales - INTEGRADAV SAS",
    description: "Desarrollo web, chatbots IA, automatización y sistemas personalizados para impulsar tu negocio.",
    url: "https://www.integradavsas.com/servicios",
  },
  alternates: {
    canonical: "https://www.integradavsas.com/servicios",
  },
};


export default function ServiciosPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#14192A] via-[#1B2240] to-black mb-16">
        {/* Fondo imagen tenue removido para fondo blanco visible */}
        <div className="container mx-auto px-4 pt-40 pb-16 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Lado Izquierdo: Texto */}
          <div className="text-left md:pr-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
              Soluciones Digitales a tu Medida
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-200">
              Webs profesionales, automatización y tecnología para crecer
            </h2>
            <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
              Lleva tu negocio, emprendimiento o marca personal al siguiente nivel con páginas web modernas, procesos automatizados, chatbots inteligentes y sistemas personalizados. Todo lo que necesitas para destacar e innovar en el mundo digital, en un solo lugar.
            </p>
            <a href="/contactenos" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition text-lg shadow-lg">
              Agenda tu asesoría gratuita
            </a>
          </div>
          {/* Lado Derecho: Ícono/Ilustración */}
          <div className="flex justify-center md:justify-end">
            <div className="flex items-center justify-center w-full h-full">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/assets/images-optimized/fondo animado-mobile.webp 400w,
                          /assets/images-optimized/fondo animado-tablet.webp 800w,
                          /assets/images-optimized/fondo animado-desktop.webp 1200w"
                  sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
                />
                <img
                  src="/assets/images/fondo animado.png"
                  alt="Equipo profesional trabajando en soluciones digitales"
                  loading="lazy"
                  decoding="async"
                  width="384"
                  height="256"
                  className="rounded-xl object-cover w-72 h-56 md:w-96 md:h-64 shadow-2xl"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios Profesionales */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2 block">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Tecnología que Impulsa tu Negocio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Soluciones digitales integrales diseñadas para empresas que buscan resultados reales</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Desarrollo Web Profesional */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Desarrollo Web Profesional</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Sitios web modernos, rápidos y optimizados que convierten visitantes en clientes.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Landing pages, corporativos y e-commerce</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">SEO avanzado y diseño responsive</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Integración con WhatsApp y RRSS</span>
              </li>
            </ul>
          </div>

          {/* Automatizaciones y Flujos */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-100 dark:bg-green-900/30 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Automatizaciones Inteligentes</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Elimina tareas repetitivas y optimiza procesos empresariales con automatización avanzada.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Flujos automáticos y webhooks</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Integración entre plataformas</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Notificaciones y reportes automáticos</span>
              </li>
            </ul>
          </div>

          {/* Chatbots con IA */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 dark:bg-purple-900/30 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Chatbots con IA Avanzada</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Asistentes virtuales inteligentes que atienden tus clientes las 24 horas del día.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Atención, reservas y ventas automatizadas</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Integración con sistemas y bases de datos</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">IA entrenada con tu información</span>
              </li>
            </ul>
          </div>

          {/* Sistemas Personalizados */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Sistemas a Medida</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Plataformas y herramientas diseñadas específicamente para las necesidades de tu empresa.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Gestión de inventarios y clientes</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Dashboards y paneles administrativos</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Integraciones API y exportación Excel</span>
              </li>
            </ul>
          </div>

          {/* SEO y Optimización */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-500">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-pink-100 dark:bg-pink-900/30 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">SEO y Visibilidad Digital</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Posiciona tu negocio en Google y construye una presencia digital sólida y confiable.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">SEO local y Google Business optimizado</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Estrategias de contenido y keywords</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Gestión de reputación y reseñas</span>
              </li>
            </ul>
          </div>

          {/* Mantenimiento y Soporte */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Mantenimiento Premium</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Mantén tus sistemas seguros, actualizados y funcionando al 100% sin preocupaciones.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Monitoreo continuo y backups automáticos</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Soporte técnico prioritario y rápido</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-sm">Actualizaciones y seguridad reforzada</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Planes y Precios</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones transparentes, sin letra pequeña. Inversión clara para negocios que quieren crecer con tecnología profesional.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
            
            {/* PLAN 1 - Presencia Digital */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Ideal para empezar</span>
                <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">Presencia Digital</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Tu negocio visible y profesional en internet</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$750k</span>
                  <span className="text-2xl text-gray-500">- $850k</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">*Precio según complejidad del diseño</p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Landing page profesional (1 página optimizada)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Diseño responsive (mobile y desktop)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">SEO básico y Google Business Profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Botón de WhatsApp integrado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Hosting gratuito el primer año</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                <p className="text-xs text-gray-500 mb-4">Recomendado para: Emprendimientos, profesionales independientes, negocios locales nuevos</p>
                <a 
                  href="https://wa.me/573204153533?text=Hola%2C%20quiero%20información%20sobre%20el%20Plan%20Presencia%20Digital" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                >
                  Agenda Asesoría Gratis
                </a>
              </div>
            </div>

            {/* PLAN 2 - Web Profesional ⭐ RECOMENDADO */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl shadow-2xl p-8 border-4 border-blue-500 dark:border-blue-400 relative hover:shadow-3xl hover:scale-110 transition-all duration-300 transform lg:scale-105 flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg inline-flex items-center gap-2">
                  <span>⭐</span>
                  <span>MÁS ELEGIDO</span>
                </span>
              </div>
              <div className="mb-6 mt-6">
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide block mb-2">Mejor inversión</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Web Profesional</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 font-medium">Completo, escalable y preparado para crecer</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">$1.2M</span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400">- $1.4M</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">*Precio según páginas y funcionalidades</p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-3 mb-8 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm font-medium">Sitio web completo (hasta 5 páginas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm font-medium">Diseño personalizado a tu marca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm font-medium">SEO local avanzado + Google Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm font-medium">Formularios de contacto y cotización</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm font-medium">Integración con redes sociales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm font-medium">3 meses de soporte técnico incluido</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-blue-300 dark:border-blue-700 mt-auto">
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-4 font-medium">Recomendado para: Empresas establecidas, PYMES en crecimiento, negocios que buscan resultados digitales reales</p>
                <a 
                  href="https://wa.me/573204153533?text=Hola%2C%20quiero%20información%20sobre%20el%20Plan%20Web%20Profesional%20(Recomendado)" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
                >
                  Agendar Asesoría Gratis
                </a>
              </div>
            </div>

            {/* PLAN 3 - Negocio Digital */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-purple-200 dark:border-purple-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Solución completa</span>
                <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">Negocio Digital</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Automatización y tecnología avanzada</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$1.9M</span>
                  <span className="text-2xl text-gray-500">- $2.2M</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">*Precio según integraciones requeridas</p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Todo lo del Plan Profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Chatbot WhatsApp con IA básica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Sistema de automatización (reservas, cotizaciones)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Panel administrativo básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Integración con CRM o herramientas externas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">6 meses de soporte técnico premium</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                <p className="text-xs text-gray-500 mb-4">Recomendado para: Negocios que buscan automatizar, empresas con alto volumen de clientes, e-commerce</p>
                <a 
                  href="https://wa.me/573204153533?text=Hola%2C%20quiero%20información%20sobre%20el%20Plan%20Negocio%20Digital" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Agenda Asesoría Gratis
                </a>
              </div>
            </div>

            {/* PLAN 4 - Solución Empresarial */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-8 border-2 border-yellow-500 dark:border-yellow-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">A medida</span>
                <h3 className="text-2xl font-bold mt-2 text-white">Solución Empresarial</h3>
                <p className="text-sm text-gray-300 mt-2">Desarrollo personalizado sin límites</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-400 uppercase">Desde</span>
                  <span className="text-4xl font-extrabold text-white">$3M</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">*Precio según alcance del proyecto</p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-3 mb-8 text-gray-200">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Sistema web o app completamente personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Arquitectura escalable y segura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Integraciones con APIs y sistemas externos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">IA avanzada y automatización compleja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Capacitación y documentación completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-sm">Soporte prioritario 12 meses</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-700 mt-auto">
                <p className="text-xs text-gray-400 mb-4">Recomendado para: Empresas medianas y grandes, proyectos complejos, soluciones verticales específicas</p>
                <a 
                  href="https://wa.me/573204153533?text=Hola%2C%20quiero%20información%20sobre%20el%20Plan%20Solución%20Empresarial" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  Agenda Asesoría Gratis
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Servicios Recurrentes */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Servicios Recurrentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mantenimiento Web */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Mantenimiento Web</h4>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">$120k - $200k<span className="text-base font-normal text-gray-500">/mes</span></p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>✓ Actualizaciones de seguridad</li>
                <li>✓ Copias de respaldo semanales</li>
                <li>✓ Monitoreo de uptime</li>
                <li>✓ Corrección de errores menores</li>
              </ul>
              <a href="https://wa.me/573204153533?text=Quiero%20información%20sobre%20Mantenimiento%20Web" target="_blank" rel="noopener noreferrer" className="block text-center text-blue-600 dark:text-blue-400 font-semibold hover:underline">Contratar →</a>
            </div>

            {/* SEO Mensual */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">SEO Mensual</h4>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">$350k - $700k<span className="text-base font-normal text-gray-500">/mes</span></p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>✓ Optimización de contenido</li>
                <li>✓ Link building local</li>
                <li>✓ Google Business Profile</li>
                <li>✓ Reportes mensuales</li>
              </ul>
              <a href="https://wa.me/573204153533?text=Quiero%20información%20sobre%20SEO%20Mensual" target="_blank" rel="noopener noreferrer" className="block text-center text-green-600 dark:text-green-400 font-semibold hover:underline">Contratar →</a>
            </div>

            {/* Chatbot / Automatización */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Chatbot / Automatización</h4>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Desde $250k<span className="text-base font-normal text-gray-500"></span></p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>✓ Chatbot WhatsApp personalizado</li>
                <li>✓ Flujos automáticos de atención</li>
                <li>✓ Integración con tu sistema</li>
                <li>✓ Entrenamiento IA básico</li>
              </ul>
              <a href="https://wa.me/573204153533?text=Quiero%20información%20sobre%20Chatbot%20y%20Automatización" target="_blank" rel="noopener noreferrer" className="block text-center text-purple-600 dark:text-purple-400 font-semibold hover:underline">Contratar →</a>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white text-center mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Contáctanos y cuéntanos sobre tu proyecto. Crearemos una solución a tu medida.
          </p>
          <a
            href="/contactenos"
            className="bg-white text-blue-700 px-8 py-3 rounded-full hover:scale-105 hover:shadow-2xl transition-all font-semibold inline-block"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </>
  );
}
