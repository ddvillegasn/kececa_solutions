import Hero3D from '@/components/Hero3D'
import SmoothScroll from '@/components/SmoothScroll'
import TextReveal from '@/components/TextReveal'
import AnimatedServiceCard from '@/components/AnimatedServiceCard'
import VisualServiceCard from '@/components/VisualServiceCard'
import StatCard from '@/components/StatCard'
import FadeIn from '@/components/FadeIn'
import ProjectShowcaseVisual from '@/components/ProjectShowcaseVisual'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Gradient Background - Sin video por tamaño */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-purple-900/40"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
        </div>
        
        {/* 3D Background */}
        <Hero3D />
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Título principal - KECECA SOLUTIONS */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white drop-shadow-2xl animate-fade-in">
                KECECA SOLUTIONS
              </h1>
            </div>
            
            {/* Subtítulo corto y potente */}
            <FadeIn delay={0.2}>
              <p className="text-2xl md:text-4xl mb-6 text-white font-light drop-shadow-lg">
                Impulsa tu Negocio Digital
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl mb-16 text-blue-200 font-light">
                Desarrollo Web • Automatización • IA
              </p>
            </FadeIn>
            
            {/* Botones más grandes */}
            <FadeIn delay={0.4}>
              <div className="flex gap-6 justify-center flex-wrap">
                <a
                  href="/contactenos"
                  className="group relative bg-white text-gray-900 px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all font-bold text-xl"
                >
                  Comenzar Ahora
                </a>
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-12 py-5 rounded-full hover:bg-green-400 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all font-bold text-xl flex items-center gap-3"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
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

      {/* About Section - Más visual, menos texto */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <TextReveal className="text-4xl md:text-6xl font-bold mb-12 text-center leading-tight">
              Nos encargamos del diseño UX premium y desarrollo web para que te enfoques en lo que más importa
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                Creamos experiencias digitales que transforman negocios locales con tecnología moderna, automatización inteligente y diseño que convierte visitantes en clientes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados - Visual Grid como Immersive Studios */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal className="text-4xl md:text-5xl font-bold mb-4">
              Proyectos que impulsan resultados
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-300">Soluciones reales para negocios reales</p>
            </FadeIn>
          </div>

          <ProjectShowcaseVisual
            projects={[
              {
                id: 1,
                title: 'E-commerce Premium',
                subtitle: 'Tienda online con pasarela de pagos',
                image: '/assets/projects/ecommerce.jpg',
                category: 'Desarrollo Web',
                size: 'large',
              },
              {
                id: 2,
                title: 'Sistema de Inventarios',
                subtitle: 'Dashboard administrativo personalizado',
                image: '/assets/projects/inventory.jpg',
                category: 'Sistemas Personalizados',
                size: 'medium',
              },
              {
                id: 3,
                title: 'Chatbot WhatsApp',
                subtitle: 'Atención 24/7 con IA',
                image: '/assets/projects/chatbot.jpg',
                category: 'Automatización',
                size: 'small',
              },
              {
                id: 4,
                title: 'Web Corporativa',
                subtitle: 'Presencia digital profesional',
                image: '/assets/projects/corporate.jpg',
                category: 'Diseño Web',
                size: 'small',
              },
              {
                id: 5,
                title: 'Automatización de Procesos',
                subtitle: 'Flujos inteligentes de trabajo',
                image: '/assets/projects/automation.jpg',
                category: 'Automatización',
                size: 'medium',
              },
            ]}
          />

          <div className="text-center mt-12">
            <FadeIn delay={0.5}>
              <a
                href="/proyectos-web"
                className="inline-block text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Ver todos los proyectos →
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Servicios Principales - Estilo Visual con Imágenes */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Nuestros Servicios
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300">Tecnología que transforma tu negocio</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VisualServiceCard
              icon={<span className="text-2xl">🌐</span>}
              title="Desarrollo Web"
              description="Páginas web profesionales, e-commerce, catálogos digitales con diseño moderno y optimizado para conversión"
              image="/assets/images/desarrollo web.jpg"
              delay={0.1}
            />
            
            <VisualServiceCard
              icon={<span className="text-2xl">💬</span>}
              title="Chatbots WhatsApp"
              description="Automatización 24/7 con inteligencia artificial integrada a tu sistema de ventas y atención al cliente"
              image="/assets/images/chatbot.jpg"
              delay={0.2}
            />
            
            <VisualServiceCard
              icon={<span className="text-2xl">💻</span>}
              title="Sistemas Personalizados"
              description="Desarrollo en cualquier lenguaje: inventarios, cotizadores, CRMs, dashboards y más"
              image="/assets/images/fronted.jpg"
              delay={0.3}
            />
            
            <VisualServiceCard
              icon={<span className="text-2xl">🤖</span>}
              title="Automatizaciones"
              description="Flujos inteligentes de reservas, formularios, cotizaciones y procesos operativos"
              image="/assets/images/memoria ram roja.jpg"
              delay={0.4}
            />
            
            <VisualServiceCard
              icon={<span className="text-2xl">📱</span>}
              title="Presencia Digital"
              description="SEO local, Google Business, gestión de redes sociales y reputación online"
              image="/assets/images/imagen geometrica.jpg"
              delay={0.5}
            />
            
            <VisualServiceCard
              icon={<span className="text-2xl">🔧</span>}
              title="Soporte & Seguridad"
              description="Mantenimiento continuo, actualizaciones, backups y monitoreo 24/7 de tus sistemas"
              image="/assets/images/oficina trabajo.jpg"
              delay={0.6}
            />
          </div>

          <div className="text-center mt-12">
            <FadeIn delay={0.7}>
              <a
                href="/servicios"
                className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl transition-all text-lg"
              >
                Ver detalles de todos los servicios →
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros - Sección Visual con Video e Imágenes */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video & Imágenes */}
            <FadeIn direction="left">
              <div className="relative">
                {/* Imagen Principal */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/oficina trabajo.jpg" 
                    alt="Equipo trabajando"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Imagen Flotante */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 hidden md:block">
                  <img 
                    src="/assets/images/cafe oficina.jpg" 
                    alt="Equipo de trabajo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Contenido de Texto */}
            <div>
              <TextReveal className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Transformamos ideas en soluciones digitales reales
              </TextReveal>
              
              <FadeIn delay={0.3}>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  En <span className="font-semibold text-blue-600">KECECA SOLUTIONS</span>, somos un equipo de desarrolladores y consultores tecnológicos especializados en ayudar a negocios locales, emprendedores y PYMES a modernizarse con tecnología accesible y efectiva.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  No solo creamos páginas web bonitas: desarrollamos <span className="font-semibold">sistemas completos, automatizaciones inteligentes y chatbots con IA</span> que realmente optimizan tu operación y mejoran la experiencia de tus clientes.
                </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full">
                    <span className="text-2xl">✅</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Desarrollo Profesional</span>
                  </div>
                  <div className="flex items-center gap-3 bg-purple-50 dark:bg-purple-900/20 px-6 py-3 rounded-full">
                    <span className="text-2xl">⚡</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Automatización Total</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-full">
                    <span className="text-2xl">🤖</span>
                    <span className="font-semibold text-gray-900 dark:text-white">IA & Chatbots</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="mt-8">
                  <a
                    href="/empresa"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl transition-all"
                  >
                    Conoce más sobre nosotros
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas - Con imagen de fondo */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/images/oficina trabajo.jpg" 
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <TextReveal className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Resultados que Hablan por Sí Mismos
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300">Impulsando el crecimiento de negocios locales</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              icon="🚀"
              number={50}
              suffix="+"
              label="Proyectos Completados"
              delay={0.1}
            />
            <StatCard
              icon="⭐"
              number={100}
              suffix="%"
              label="Clientes Satisfechos"
              delay={0.2}
            />
            <StatCard
              icon="⚡"
              number={24}
              suffix="/7"
              label="Soporte Disponible"
              delay={0.3}
            />
            <StatCard
              icon="💼"
              number={15}
              suffix="+"
              label="Industrias Atendidas"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Por qué elegir Kececa Solutions - Versión Visual */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TextReveal className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por qué Kececa Solutions?
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-300">Tu aliado tecnológico de confianza</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Soluciones Reales</h3>
                <p className="text-gray-600 dark:text-gray-300">Para negocios locales y PYMES</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  ⚡
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Automatización Completa</h3>
                <p className="text-gray-600 dark:text-gray-300">No solo diseño, sino soluciones integrales</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  💰
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Precios Justos</h3>
                <p className="text-gray-600 dark:text-gray-300">Tecnología accesible y competitiva</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🤝
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Atención Cercana</h3>
                <p className="text-gray-600 dark:text-gray-300">Acompañamiento continuo y personalizado</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.5}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🚀
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Experiencia Técnica</h3>
                <p className="text-gray-600 dark:text-gray-300">Desarrollo y programación profesional</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.6}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🔒
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Seguridad y Confianza</h3>
                <p className="text-gray-600 dark:text-gray-300">Protección de datos y mantenimiento</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-10 max-w-2xl mx-auto">Contáctanos y descubre cómo podemos impulsar tu presencia digital</p>
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
