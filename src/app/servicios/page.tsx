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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black mb-16">
        {/* Fondo imagen tenue opcional */}
        <img
          src="/assets/images/desarrollo web.jpg"
          alt="Fondo decorativo desarrollo web"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none hidden md:block"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 pt-40 pb-16 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Lado Izquierdo: Texto */}
          <div className="text-left md:pr-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 dark:text-white tracking-tight">
              Servicios Digitales Profesionales
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
              Soluciones web, automatización y tecnología a tu medida
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
              Impulsa tu negocio, emprendimiento o marca personal con páginas web profesionales, automatización de procesos, chatbots inteligentes y sistemas personalizados. Todo lo que necesitas para crecer, innovar y destacar en el mundo digital, en un solo lugar.
            </p>
            <a href="/contactenos" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition text-lg shadow-lg">
              Solicita tu asesoría gratis
            </a>
          </div>
          {/* Lado Derecho: Ícono/Ilustración */}
          <div className="flex justify-center md:justify-end">
            <div className="flex items-center justify-center w-full h-full">
              <img
                src="/assets/images/oficina trabajo.jpg"
                alt="Equipo profesional trabajando"
                className="rounded-xl object-cover w-72 h-56 md:w-96 md:h-64 shadow-2xl"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
        {/* Desarrollo Web Profesional */}
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" /><path d="M3 9h18" strokeWidth="2" /></svg>}
          title="Desarrollo Web Profesional"
          description="Sitios web modernos, rápidos y optimizados para tu negocio."
          features={["Landing pages, sitios corporativos y tiendas online", "SEO local y diseño responsive", "Integración con WhatsApp y redes sociales"]}
        />
        {/* Automatizaciones y Flujos Inteligentes */}
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 4h16v16H4z" strokeWidth="2" /><path d="M8 8h8v8H8z" strokeWidth="2" /></svg>}
          title="Automatizaciones y Flujos"
          description="Automatiza tareas y procesos para ahorrar tiempo y reducir errores."
          features={["Formularios, reservas y flujos automáticos", "Integración entre sistemas y apps", "Notificaciones y reportes automáticos"]}
        />
        {/* Chatbots de WhatsApp e IA */}
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 15h8M8 11h8M8 7h8" strokeWidth="2" /></svg>}
          title="Chatbots de WhatsApp e IA"
          description="Atiende a tus clientes 24/7 con asistentes inteligentes personalizados."
          features={["Chatbots para atención, reservas y cotizaciones", "Integración con bases de datos y sistemas internos", "Respuestas automáticas y asistentes con IA"]}
        />
        {/* Sistemas Personalizados */}
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-8H4" strokeWidth="2" /></svg>}
          title="Sistemas Personalizados"
          description="Herramientas y paneles hechos a la medida de tu empresa."
          features={["Inventarios, cotizadores y gestión de clientes", "Paneles administrativos y dashboards", "Integración con APIs y Excel"]}
        />
        {/* Optimización de Presencia Digital */}
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" strokeWidth="2" /><path d="M2 12h20" strokeWidth="2" /></svg>}
          title="Optimización Digital y SEO"
          description="Haz que tu negocio sea visible y confiable en internet."
          features={["SEO local, Google Business y reputación digital", "Estrategias de visibilidad online", "Mejora de fichas y reseñas"]}
        />
        {/* Mantenimiento y Soporte */}
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3" strokeWidth="2" /><circle cx="12" cy="12" r="10" strokeWidth="2" /></svg>}
          title="Mantenimiento y Soporte"
          description="Tu web y sistemas siempre seguros, actualizados y funcionando."
          features={["Actualizaciones, copias de seguridad y monitoreo", "Soporte técnico y corrección de errores", "Medidas de seguridad básicas"]}
        />
      </div>

      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900 dark:text-white">Planes y Precios</h2>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
            {/* Web Básica */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-blue-100 dark:border-blue-900">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Web Básica</h3>
              <p className="text-4xl font-extrabold mb-4 text-blue-900">$900.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>Landing page profesional</li>
                <li>Diseño responsive</li>
                <li>SEO básico y Google Business</li>
                <li>Integración WhatsApp</li>
              </ul>
              <a href="/contactenos" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Solicitar</a>
            </div>
            {/* Web Corporativa */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-blue-200 dark:border-blue-700">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Web Corporativa</h3>
              <p className="text-4xl font-extrabold mb-4 text-blue-900">$1.300.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>Hasta 5 secciones/páginas</li>
                <li>Diseño personalizado</li>
                <li>SEO local y Google Analytics</li>
                <li>Formularios de contacto y cotización</li>
              </ul>
              <a href="/contactenos" className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">Solicitar</a>
            </div>
            {/* Tienda Online */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-pink-100 dark:border-pink-900">
              <h3 className="text-xl font-bold mb-2 text-pink-700">Tienda Online</h3>
              <p className="text-4xl font-extrabold mb-4 text-pink-900">$2.000.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>Catálogo de productos</li>
                <li>Pasarela de pagos</li>
                <li>Integración WhatsApp y redes</li>
                <li>SEO y Google Shopping</li>
              </ul>
              <a href="/contactenos" className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition">Solicitar</a>
            </div>
            {/* Automatización Empresarial */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-green-100 dark:border-green-900">
              <h3 className="text-xl font-bold mb-2 text-green-700">Automatización Empresarial</h3>
              <p className="text-4xl font-extrabold mb-4 text-green-900">$1.500.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>Automatización de procesos</li>
                <li>Flujos automáticos y reportes</li>
                <li>Integración con sistemas internos</li>
                <li>Soporte y capacitación</li>
              </ul>
              <a href="/contactenos" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">Solicitar</a>
            </div>
            {/* Chatbot WhatsApp */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-purple-100 dark:border-purple-900">
              <h3 className="text-xl font-bold mb-2 text-purple-700">Chatbot WhatsApp</h3>
              <p className="text-4xl font-extrabold mb-4 text-purple-900">$1.200.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>Chatbot personalizado</li>
                <li>Respuestas automáticas</li>
                <li>Integración con bases de datos</li>
                <li>Entrenamiento IA básico</li>
              </ul>
              <a href="/contactenos" className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">Solicitar</a>
            </div>
            {/* Sistema a Medida */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-yellow-100 dark:border-yellow-900">
              <h3 className="text-xl font-bold mb-2 text-yellow-700">Sistema a Medida</h3>
              <p className="text-4xl font-extrabold mb-4 text-yellow-900">$2.200.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>Panel administrativo</li>
                <li>Gestión de inventarios/clientes</li>
                <li>Integración con Excel/APIs</li>
                <li>Soporte y capacitación</li>
              </ul>
              <a href="/contactenos" className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition">Solicitar</a>
            </div>
            {/* Optimización Digital */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-blue-300 dark:border-blue-500">
              <h3 className="text-xl font-bold mb-2 text-blue-500">Optimización Digital</h3>
              <p className="text-4xl font-extrabold mb-4 text-blue-900">$700.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>SEO local y Google Business</li>
                <li>Mejora de reputación digital</li>
                <li>Optimización de fichas y reseñas</li>
                <li>Estrategias de visibilidad online</li>
              </ul>
              <a href="/contactenos" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">Solicitar</a>
            </div>
            {/* Mantenimiento y Soporte */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Mantenimiento y Soporte</h3>
              <p className="text-4xl font-extrabold mb-4 text-gray-900">$500.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>Actualizaciones y monitoreo</li>
                <li>Copias de seguridad</li>
                <li>Corrección de errores</li>
                <li>Soporte técnico prioritario</li>
              </ul>
              <a href="/contactenos" className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">Solicitar</a>
            </div>
            {/* Solución Integral */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-purple-200 dark:border-purple-700">
              <h3 className="text-xl font-bold mb-2 text-purple-800">Solución Integral</h3>
              <p className="text-4xl font-extrabold mb-4 text-purple-900">$2.500.000</p>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2 text-sm">
                <li>Web + Automatización + Chatbot</li>
                <li>Sistema personalizado a medida</li>
                <li>SEO avanzado y optimización digital</li>
                <li>Mantenimiento y soporte premium</li>
              </ul>
              <a href="/contactenos" className="bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition">Solicitar</a>
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
