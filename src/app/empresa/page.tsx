export default function EmpresaPage() {
  return (
    <div className="container mx-auto px-4 pt-40 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">INTEGRA SOLUTIONS</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Agencia de servicios digitales y automatización tecnológica para negocios, emprendedores y pequeñas empresas.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Quiénes Somos */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">¿Quiénes Somos?</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Integra Solutions es una agencia de servicios digitales y automatización tecnológica enfocada en ayudar a negocios, emprendedores y pequeñas empresas a crecer, vender más y operar de forma más eficiente mediante soluciones digitales modernas, accesibles y bien implementadas.<br /><br />
            No solo creamos páginas web: construimos sistemas, automatizamos procesos y conectamos la tecnología con las necesidades reales del negocio. Nuestro enfoque combina desarrollo web, automatización inteligente, sistemas personalizados y acompañamiento continuo.<br /><br />
            <span className="font-semibold text-[#1a237e]">La tecnología debe simplificar, no complicar.</span>
          </p>
        </section>

        {/* Misión */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Nuestra Misión</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Brindar soluciones digitales accesibles, seguras y automatizadas que impulsen el crecimiento de pequeños y medianos negocios, mejorando su presencia online, optimizando procesos internos y facilitando la adopción de tecnología moderna sin fricción ni tecnicismos innecesarios.
          </p>
        </section>

        {/* Visión */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Nuestra Visión</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Convertirnos para el año 2028 en una de las agencias líderes en soluciones digitales integrales en el Eje Cafetero y Colombia, reconocidos por el desarrollo de sistemas eficientes, automatizaciones inteligentes y plataformas tecnológicas que permitan a los negocios operar de manera más competitiva y organizada.
          </p>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Innovación Continua</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Adoptamos nuevas tecnologías, automatizaciones, IA y herramientas modernas para ofrecer soluciones actuales y escalables.</p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Orientación a Resultados</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Cada proyecto tiene un objetivo claro: aumentar ventas, mejorar la atención o optimizar procesos internos.</p>
            </div>
            <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Compromiso Real</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Nos involucramos como aliados tecnológicos, no solo como proveedores.</p>
            </div>
            <div className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Seguridad e Integridad</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Protegemos la información y los sistemas de nuestros clientes, con transparencia y buenas prácticas.</p>
            </div>
            <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Accesibilidad Tecnológica</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Hacemos que la tecnología sea entendible y funcional para cualquier negocio, sin barreras técnicas.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Acompañamiento Humano</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Brindamos soporte, capacitación y seguimiento para que nuestros clientes aprovechen al máximo cada solución.</p>
            </div>
          </div>
        </section>

        {/* Diferenciadores */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">¿Qué Nos Diferencia?</h2>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <li>No solo diseñamos páginas bonitas, construimos soluciones funcionales.</li>
            <li>Integramos web + sistemas + automatización + chatbots en un solo ecosistema.</li>
            <li>Desarrollamos sistemas personalizados, no soluciones genéricas.</li>
            <li>Pensamos como ingenieros, pero comunicamos como aliados del negocio.</li>
            <li>Nos enfocamos en negocios locales y PYMES, no en grandes corporaciones inalcanzables.</li>
            <li>En INTEGRA Solutions, la cercanía y el acompañamiento son parte de nuestro ADN.</li>
          </ul>
        </section>

        {/* Equipo */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Nuestro Equipo</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Contamos con un equipo multidisciplinario apasionado por la tecnología, el desarrollo de software y la automatización de procesos.<br />
            Nuestro equipo combina conocimientos en desarrollo web y backend, automatización de procesos, integración con WhatsApp e IA, sistemas personalizados y soporte técnico.<br />
            Cada proyecto es abordado con una visión técnica, estratégica y humana.
          </p>
        </section>

        {/* Enfoque de Trabajo */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Nuestro Enfoque de Trabajo</h2>
          <ol className="list-decimal pl-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>Escuchamos tu necesidad real</li>
            <li>Analizamos procesos y oportunidades de mejora</li>
            <li>Diseñamos una solución clara y funcional</li>
            <li>Desarrollamos e implementamos la tecnología</li>
            <li>Acompañamos, capacitamos y optimizamos</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
