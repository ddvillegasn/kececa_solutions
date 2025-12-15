import ServiceCard from "@/src/components/ServiceCard";

export default function ServiciosPage() {
  const services = [
    {
      icon: "🌐",
      title: "Desarrollo Web",
      description: "Creamos sitios web y aplicaciones web modernas, responsivas y optimizadas con las últimas tecnologías como React, Next.js y TypeScript."
    },
    {
      icon: "📱",
      title: "Aplicaciones Móviles",
      description: "Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android con excelente experiencia de usuario."
    },
    {
      icon: "🎨",
      title: "Diseño UI/UX",
      description: "Diseños intuitivos y atractivos centrados en el usuario, que mejoran la experiencia y aumentan la conversión."
    },
    {
      icon: "🚀",
      title: "Marketing Digital",
      description: "Estrategias de marketing digital personalizadas: SEO, SEM, redes sociales y contenido que genera resultados."
    },
    {
      icon: "☁️",
      title: "Soluciones Cloud",
      description: "Implementación y gestión de infraestructura en la nube con AWS, Azure y Google Cloud para escalabilidad y seguridad."
    },
    {
      icon: "🔧",
      title: "Consultoría IT",
      description: "Asesoramiento experto en tecnología, arquitectura de software y transformación digital para tu negocio."
    },
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Tiendas online completas y optimizadas para ventas, con integración de pagos y gestión de inventario."
    },
    {
      icon: "📊",
      title: "Business Intelligence",
      description: "Análisis de datos y dashboards interactivos para toma de decisiones informadas basadas en datos reales."
    },
    {
      icon: "🔐",
      title: "Ciberseguridad",
      description: "Protección integral de tus activos digitales con auditorías de seguridad y implementación de mejores prácticas."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
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
