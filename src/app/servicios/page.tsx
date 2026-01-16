import ServiceCard from "@/components/ServiceCard";

export default function ServiciosPage() {
  const services = [
    {
      icon: "🌐",
      title: "Desarrollo Web Profesional",
      description: "Páginas web informativas para negocios locales, tiendas online con pasarelas de pago, catálogos digitales, diseño responsive, optimización SEO local e integración con WhatsApp, redes y Google Business.",
      features: [
        "Páginas web informativas",
        "Tiendas online (e-commerce)",
        "Catálogos digitales",
        "Diseño responsive",
        "SEO local",
        "Integración WhatsApp y redes"
      ]
    },
    {
      icon: "⚙️",
      title: "Automatizaciones y Flujos Inteligentes",
      description: "Soluciones que reducen tareas repetitivas y mejoran la eficiencia operativa de tu negocio.",
      features: [
        "Formularios automáticos",
        "Sistemas de reservas y agendamiento",
        "Flujos de atención al cliente",
        "Bots de gestión de pedidos",
        "Respuestas automáticas",
        "Recordatorios programados"
      ]
    },
    {
      icon: "💬",
      title: "Chatbots de WhatsApp e IA",
      description: "Atención al cliente 24/7 con chatbots personalizados conectados a bases de datos y sistemas internos.",
      features: [
        "Chatbots personalizados",
        "Respuestas a preguntas frecuentes",
        "Sistema de reservas por WhatsApp",
        "Cotización automática",
        "Consulta de inventario",
        "Asistentes con IA entrenados"
      ]
    },
    {
      icon: "💻",
      title: "Sistemas Personalizados",
      description: "Desarrollo de herramientas internas a medida en cualquier lenguaje de programación según las necesidades de tu negocio.",
      features: [
        "Sistemas de inventarios",
        "Cotizadores automáticos",
        "Gestión de clientes y ventas",
        "Paneles administrativos",
        "Dashboards con métricas",
        "Integración con APIs y Excel"
      ]
    },
    {
      icon: "📈",
      title: "Optimización de Presencia Digital",
      description: "Mejora tu visibilidad online y reputación digital para atraer más clientes locales.",
      features: [
        "Gestión de Google Business",
        "SEO local",
        "Optimización de fichas de productos",
        "Estrategias para reseñas",
        "Mejora de reputación",
        "Contenido para redes sociales"
      ]
    },
    {
      icon: "🔧",
      title: "Mantenimiento, Soporte y Seguridad",
      description: "Aseguramos que cada sistema se mantenga funcional, actualizado y seguro con soporte continuo.",
      features: [
        "Actualizaciones mensuales",
        "Monitoreo del sitio",
        "Copias de seguridad automáticas",
        "Corrección de errores",
        "Configuración de seguridad",
        "Soporte por WhatsApp"
      ]
    },
    {
      icon: "📚",
      title: "Capacitación y Acompañamiento",
      description: "Entrenamiento personalizado para que puedas usar todas las herramientas instaladas de forma autónoma.",
      features: [
        "Entrenamiento personalizado",
        "Manuales de uso",
        "Video-guías paso a paso",
        "Asesoría digital",
        "Mejora de procesos",
        "Reuniones de seguimiento"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de servicios digitales diseñados para impulsar 
          tu negocio y alcanzar tus objetivos en el mundo digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
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
