export default function ClientesPage() {

  // Aquí puedes mostrar un widget de Google Reviews o un enlace para calificar
  // Ejemplo de enlace a Google (reemplaza por tu enlace real de Google Business)
  const googleReviewUrl = "https://g.page/r/CODIGO_GOOGLE_REVIEW";

  return (
    <div className="container mx-auto px-4 pt-40 pb-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">NUESTROS CLIENTES Y ALIADOS</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
          La mayoría de nuestros proyectos han sido desarrollados en el marco académico, colaborando con docentes, jurados y organizaciones universitarias. Nuestro compromiso es siempre la satisfacción y el impacto real, tanto en el entorno educativo como profesional.
        </p>
      </div>



      {/* Aliados académicos y organizaciones */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">ALIADOS Y ORGANIZACIONES</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Hemos trabajado junto a docentes, jurados y entidades universitarias, aportando soluciones tecnológicas y proyectos de alto impacto académico y social.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Aquí puedes agregar logos de la universidad, facultad o nombres de docentes aliados */}
              <div className="flex flex-col items-center">
                <img src="/assets/images/universidad_logo.png" alt="Universidad" className="w-24 h-24 object-contain mb-2" />
                <span className="text-gray-700 dark:text-gray-200 font-semibold">Universidad Aliada</span>
              </div>
              {/* Puedes duplicar el bloque anterior para más aliados */}
            </div>
          </div>
        </div>
      </section>




      {/* Widget o invitación a calificar */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">VALORACIONES Y COMENTARIOS</h2>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="text-gray-500 dark:text-gray-400 text-center max-w-xl">
            ¿Fuiste parte de un proyecto, profesor o usuario? <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Califica nuestro trabajo en Google</a> y ayuda a otros a conocer nuestra calidad y compromiso.
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
        <p className="text-xl mb-8">Únete a las empresas que ya confían en INTEGRA SOLUTIONS</p>
        <a
          href="/contactenos"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
        >
          Comenzar Ahora
        </a>
      </div>
    </div>
  );
}
