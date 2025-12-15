export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          KECECA SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Transformamos tus ideas en soluciones digitales innovadoras
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/servicios"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Nuestros Servicios
          </a>
          <a
            href="/contactenos"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-semibold"
          >
            Contáctenos
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-3">Desarrollo Web</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sitios web modernos y aplicaciones web personalizadas con las últimas tecnologías
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-3">Diseño Digital</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Diseños creativos y profesionales que destacan tu marca en el mundo digital
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3">Marketing Digital</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Estrategias efectivas para aumentar tu presencia online y alcanzar tus objetivos
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para empezar tu proyecto?</h2>
        <p className="text-xl mb-8">Contáctanos hoy y hagamos realidad tu visión digital</p>
        <a
          href="/contactenos"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
        >
          Iniciar Conversación
        </a>
      </section>
    </div>
  );
}
