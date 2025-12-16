import ProjectCard from "@/components/ProjectCard";

export default function ProyectosWebPage() {
  const projects = [
    {
      title: "E-commerce Fashion",
      description: "Tienda online completa para marca de moda con sistema de inventario y pagos integrados.",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Plataforma Educativa",
      description: "Sistema de gestión de aprendizaje (LMS) con video streaming y seguimiento de progreso.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de control interactivo para análisis de datos empresariales en tiempo real.",
      tags: ["React", "D3.js", "Python"],
      link: "#"
    },
    {
      title: "Reservas de Restaurante",
      description: "Aplicación web para gestión de reservas, menús digitales y pedidos online.",
      tags: ["Next.js", "PostgreSQL", "Vercel"],
      link: "#"
    },
    {
      title: "Marketplace B2B",
      description: "Plataforma de comercio electrónico B2B con gestión de múltiples vendedores.",
      tags: ["TypeScript", "GraphQL", "AWS"],
      link: "#"
    },
    {
      title: "App de Salud y Bienestar",
      description: "Aplicación para seguimiento de salud, ejercicios y nutrición personalizada.",
      tags: ["React Native", "Firebase", "ML"],
      link: "#"
    }
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "30+", label: "Clientes Satisfechos" },
    { number: "100%", label: "Tasa de Éxito" },
    { number: "5⭐", label: "Calificación Promedio" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Proyectos Web</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Descubre algunos de los proyectos web que hemos desarrollado para nuestros clientes. 
          Cada proyecto es único y diseñado para alcanzar objetivos específicos.
        </p>
      </div>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image="placeholder"
            />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold mb-2">1. Análisis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Entendemos tus necesidades y objetivos
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="font-semibold mb-2">2. Diseño</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creamos prototipos y diseños personalizados
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="font-semibold mb-2">3. Desarrollo</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Construimos tu proyecto con las mejores tecnologías
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold mb-2">4. Lanzamiento</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Desplegamos y damos soporte continuo
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Convirtamos tu idea en realidad. Contáctanos para una consulta gratuita.
        </p>
        <a
          href="/contactenos"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
        >
          Iniciar Proyecto
        </a>
      </div>
    </div>
  );
}
