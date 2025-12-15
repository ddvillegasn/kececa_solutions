import Hero3D from '@/components/Hero3D'
import SmoothScroll from '@/components/SmoothScroll'
import TextReveal from '@/components/TextReveal'
import AnimatedServiceCard from '@/components/AnimatedServiceCard'
import FadeIn from '@/components/FadeIn'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* 3D Background */}
        <Hero3D />
        
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <TextReveal className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Soluciones digitales que impulsan tu negocio
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Desarrollo web, automatización y sistemas personalizados para negocios locales, emprendedores y pequeñas empresas.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                En Kececa Solutions ayudamos a los negocios a modernizarse mediante tecnología accesible, rápida y eficiente. 
                Creamos páginas web profesionales, automatizamos procesos, integramos WhatsApp y desarrollamos sistemas a medida 
                que optimizan la operación y mejoran la atención al cliente.
              </p>
            </FadeIn>
            <FadeIn delay={0.7}>
              <div className="flex gap-6 justify-center flex-wrap">
                <a
                  href="/contactenos"
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg overflow-hidden"
                >
                  <span className="relative z-10">Solicitar cotización</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-10 py-4 rounded-full hover:bg-green-600 hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal className="text-4xl md:text-5xl font-bold mb-4">
              Servicios Principales
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-300">Soluciones digitales adaptadas a las necesidades de tu negocio</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedServiceCard
              icon="🌐"
              title="Desarrollo Web Profesional"
              description="Páginas web informativas, tiendas online, catálogos digitales con diseño responsive, SEO local e integración con WhatsApp y redes sociales."
            />
            
            <AnimatedServiceCard
              icon="⚙️"
              title="Automatizaciones y Flujos Inteligentes"
              description="Formularios automáticos, sistemas de reservas, flujos de atención al cliente y bots que gestionan pedidos o consultas comunes."
            />
            
            <AnimatedServiceCard
              icon="💻"
              title="Sistemas Personalizados"
              description="Desarrollo a medida en cualquier lenguaje: inventarios, cotizadores, gestión de clientes, dashboards y paneles administrativos."
            />
            
            <AnimatedServiceCard
              icon="💬"
              title="Chatbots de WhatsApp e IA"
              description="Chatbots personalizados 24/7 que responden preguntas, reservan, cotizan y consultan inventario conectados con IA."
            />
            
            <AnimatedServiceCard
              icon="📈"
              title="Optimización de Presencia Digital"
              description="SEO local, gestión de Google Business, mejora de reputación online y estrategias de contenido para redes sociales."
            />
            
            <AnimatedServiceCard
              icon="🔧"
              title="Mantenimiento, Soporte y Capacitación"
              description="Actualizaciones, monitoreo, copias de seguridad, corrección de errores, soporte técnico y entrenamiento personalizado."
            />
          </div>
        </div>
      </section>

      {/* Por qué elegir Kececa Solutions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por qué elegir Kececa Solutions?
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-300">Somos tu aliado tecnológico de confianza</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeIn direction="left" delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Enfoque en soluciones reales</h3>
                  <p className="text-gray-600 dark:text-gray-300">Para negocios locales y PYMES</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Automatización y sistemas personalizados</h3>
                  <p className="text-gray-600 dark:text-gray-300">No solo diseño, sino soluciones completas</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Tecnología accesible</h3>
                  <p className="text-gray-600 dark:text-gray-300">Precios competitivos y justos</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.4}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Atención cercana</h3>
                  <p className="text-gray-600 dark:text-gray-300">Acompañamiento continuo</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.5}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Experiencia técnica</h3>
                  <p className="text-gray-600 dark:text-gray-300">En desarrollo y programación</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.6}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Soluciones escalables</h3>
                  <p className="text-gray-600 dark:text-gray-300">Pensadas para crecer junto al negocio</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Tienes una idea o necesitas mejorar los procesos de tu negocio?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Contáctanos ahora y descubre cómo podemos ayudarte a alcanzar tus objetivos</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contactenos"
                className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg"
              >
                Contáctanos ahora
              </a>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-10 py-4 rounded-full hover:bg-green-600 hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hablar por WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
