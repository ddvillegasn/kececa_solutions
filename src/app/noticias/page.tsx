export default function NoticiasPage() {
  const articles = [
    {
      id: 1,
      title: "Las Tendencias del Desarrollo Web en 2025",
      excerpt: "Descubre las tecnologías y metodologías que están marcando el futuro del desarrollo web este año.",
      date: "15 de Diciembre, 2025",
      category: "Tecnología",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Cómo el UX Design Mejora la Conversión",
      excerpt: "El diseño centrado en el usuario no solo es estético, sino que impacta directamente en tus resultados.",
      date: "12 de Diciembre, 2025",
      category: "Diseño",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "SEO en 2025: Estrategias que Funcionan",
      excerpt: "Las estrategias de optimización que están generando resultados reales en los motores de búsqueda.",
      date: "10 de Diciembre, 2025",
      category: "Marketing",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "La Importancia de la Ciberseguridad",
      excerpt: "Proteger tus activos digitales es más importante que nunca. Conoce las mejores prácticas.",
      date: "8 de Diciembre, 2025",
      category: "Seguridad",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "React vs Next.js: ¿Cuál Elegir?",
      excerpt: "Una comparación detallada de estas dos tecnologías populares para desarrollo frontend.",
      date: "5 de Diciembre, 2025",
      category: "Desarrollo",
      readTime: "8 min"
    },
    {
      id: 6,
      title: "Transformación Digital en Empresas",
      excerpt: "Cómo las empresas están adoptando tecnología para mejorar sus procesos y resultados.",
      date: "3 de Diciembre, 2025",
      category: "Negocios",
      readTime: "5 min"
    }
  ];

  const categories = ["Todos", "Tecnología", "Diseño", "Marketing", "Seguridad", "Desarrollo", "Negocios"];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Noticias y Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Mantente actualizado con las últimas tendencias en tecnología, diseño y marketing digital.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <div className="max-w-3xl">
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
              Artículo Destacado
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-4">
              {articles[0].title}
            </h2>
            <p className="text-xl mb-6 opacity-90">
              {articles[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>{articles[0].date}</span>
              <span>•</span>
              <span>{articles[0].readTime} de lectura</span>
            </div>
            <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Leer Artículo
            </button>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Últimas Publicaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <button className="text-blue-600 hover:underline font-semibold">
                    Leer más →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

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
