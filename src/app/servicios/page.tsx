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
    title: "Servicios Digitales - INTEGRA SOLUTIONS",
    description: "Desarrollo web, chatbots IA, automatización y sistemas personalizados para impulsar tu negocio.",
    url: "https://www.integra-solutions.com/servicios",
  },
  alternates: {
    canonical: "https://www.integra-solutions.com/servicios",
  },
};

export default function ServiciosPage() {
  const services = [
    {
      icon: "🌐",
      title: "Desarrollo Web Profesional",
      description: "Diseñamos y desarrollamos páginas web modernas, rápidas y orientadas a resultados, adaptadas a negocios locales, emprendedores y pequeñas empresas.",
      features: [
        "Páginas web informativas, landing pages y sitios corporativos",
        "Tiendas online (e-commerce) con pasarelas de pago",
        "Catálogos digitales de productos o servicios",
        "Diseño responsive (adaptado a celular, tablet y PC)",
        "Optimización SEO local para aparecer en Google",
        "Integración con WhatsApp, redes sociales y Google Business",
        "Enfoque en experiencia de usuario y conversión",
        "Ideal para negocios que necesitan presencia digital real, no solo una página bonita"
      ]
    },
    {
      icon: "⚙️",
      title: "Automatizaciones y Flujos Inteligentes",
      description: "Creamos automatizaciones personalizadas que eliminan tareas manuales y mejoran la eficiencia operativa de tu negocio.",
      features: [
        "Automatización de formularios y registros",
        "Sistemas de reservas y agendamiento",
        "Flujos automáticos de atención al cliente",
        "Envío automático de correos, mensajes o notificaciones",
        "Integración entre herramientas (web, WhatsApp, hojas de cálculo, sistemas internos)",
        "Menos trabajo manual, más tiempo para hacer crecer tu negocio"
      ]
    },
    {
      icon: "💬",
      title: "Chatbots de WhatsApp e Inteligencia Artificial",
      description: "Desarrollamos chatbots inteligentes 24/7, diseñados específicamente para tu negocio y tus clientes.",
      features: [
        "Chatbots de WhatsApp personalizados",
        "Respuestas automáticas a preguntas frecuentes",
        "Bots para cotizar, reservar, consultar inventario o servicios",
        "Integración con bases de datos y sistemas internos",
        "Asistentes con IA entrenados para tu negocio",
        "Atención constante sin depender de una persona conectada todo el día"
      ]
    },
    {
      icon: "💻",
      title: "Sistemas Personalizados a Medida",
      description: "Desarrollamos sistemas internos y herramientas digitales personalizadas, utilizando el lenguaje y la tecnología más adecuada según el caso (no nos limitamos a uno solo).",
      features: [
        "Sistemas de inventarios",
        "Cotizadores automáticos",
        "Gestión de clientes, ventas o proveedores",
        "Paneles administrativos y dashboards",
        "Integración con APIs, Excel o bases de datos",
        "Soluciones a medida para procesos específicos del negocio",
        "Digitalizamos procesos que hoy se hacen en Excel, papel o de forma manual"
      ]
    },
    {
      icon: "📈",
      title: "Optimización de Presencia Digital",
      description: "Ayudamos a que tu negocio sea visible, confiable y fácil de encontrar en internet.",
      features: [
        "Optimización de Google Business",
        "SEO local para búsquedas cercanas",
        "Mejora de reputación digital y reseñas",
        "Optimización de fichas de servicios y productos",
        "Estrategias básicas de visibilidad online",
        "Más visibilidad local = más clientes reales"
      ]
    },
    {
      icon: "🔧",
      title: "Mantenimiento, Soporte y Seguridad",
      description: "Nos encargamos de que tus sistemas estén siempre funcionando correctamente y protegidos.",
      features: [
        "Actualizaciones periódicas de páginas y sistemas",
        "Monitoreo básico de funcionamiento",
        "Copias de seguridad automáticas",
        "Corrección de errores y mejoras continuas",
        "Configuración de medidas básicas de seguridad",
        "Soporte técnico por WhatsApp o correo",
        "Tranquilidad técnica para que no te preocupes por fallos o caídas"
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-40 pb-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Servicios de Desarrollo Web, Chatbots IA y Automatización | Colombia</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          No solo creamos páginas web atractivas: desarrollamos sistemas completos, automatizaciones inteligentes y chatbots con IA que optimizan tu operación y mejoran la experiencia de tus clientes. <br />
          Ofrecemos soluciones digitales integrales para que tu negocio crezca, sea más eficiente y destaque en el entorno digital actual.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Contáctanos y cuéntanos sobre tu proyecto. Crearemos una solución a tu medida.
        </p>
        <a
          href="/contactenos"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
        >
          Solicitar Cotización
        </a>
      </div>
    </div>
  );
}
