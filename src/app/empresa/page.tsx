export default function EmpresaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Nuestra Empresa</h1>
      
      <div className="max-w-4xl mx-auto">
        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Misión</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            En KECECA SOLUTIONS, nuestra misión es transformar las ideas de nuestros clientes en 
            soluciones digitales innovadoras y efectivas. Nos comprometemos a ofrecer servicios 
            de alta calidad que impulsen el crecimiento y éxito de cada proyecto.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Visión</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ser la agencia líder en servicios digitales, reconocida por nuestra innovación, 
            excelencia técnica y compromiso con el éxito de nuestros clientes en toda la región.
          </p>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">💡 Innovación</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Buscamos constantemente nuevas formas de resolver problemas y crear valor.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🎯 Excelencia</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nos esforzamos por superar las expectativas en cada proyecto.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🤝 Compromiso</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dedicación total al éxito de nuestros clientes y proyectos.
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🔒 Integridad</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Transparencia y honestidad en todas nuestras relaciones.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Equipo</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            Contamos con un equipo multidisciplinario de profesionales apasionados por la 
            tecnología y el diseño, comprometidos en ofrecer soluciones que marquen la diferencia.
          </p>
        </section>
      </div>
    </div>
  );
}
