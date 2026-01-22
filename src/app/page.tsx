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
        {/* Video Background desde Cloudinary */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            style={{ pointerEvents: 'none' }}
          >
            <source src="https://res.cloudinary.com/dolwsuiqy/video/upload/q_auto,f_auto,w_1280/red_neuronal_azul_ecw9ga.mp4" type="video/mp4" />
          </video>
          {/* Overlay más sutil para que se vea el video */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60" />
        </div>
        
        {/* 3D Background */}
        <Hero3D />
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white drop-shadow-2xl animate-fade-in mb-8">
              INTEGRADAV SAS
            </h1>
            <p className="text-2xl md:text-4xl text-white font-light drop-shadow-lg mb-8">
              Soluciones digitales que convierten en resultados reales
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <a
                href="https://wa.me/573204153533?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg> ¡Contáctanos por WhatsApp!
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=integrasasolutions@gmail.com&su=Quiero%20impulsar%20mi%20negocio&body=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20digitales."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 6.81A2 2 0 0 1 4 5h16a2 2 0 0 1 1.99 1.81l-10 6.25-10-6.25zm-.01 2.13V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.94l-9.29 5.81a1 1 0 0 1-1.06 0L2 8.94z"/>
                </svg>
                ¡Contáctanos por Correo!
              </a>
            </div>
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800" aria-label="¿Qué hacemos?">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center leading-tight">
              Diseñamos y desarrollamos soluciones digitales que convierten visitas en clientes reales
            </h2>
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Ayudamos a negocios locales y PYMES a automatizar procesos, mejorar su presencia digital y aumentar sus ventas mediante tecnología moderna, diseño estratégico y sistemas inteligentes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Nueva sección profesional y atractiva */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-blue-900" aria-label="Nuestra prioridad">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center leading-tight text-blue-900 dark:text-white">
              Tu crecimiento digital es nuestra prioridad
            </h2>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 text-center leading-relaxed">
                Impulsamos negocios con tecnología, automatización y acompañamiento estratégico para generar resultados reales. Una estrategia digital bien ejecutada no solo se ve bien: vende, optimiza y escala tu empresa.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados - Visual Grid como Immersive Studios */}
      <section className="py-20 bg-white dark:bg-gray-900" aria-label="Proyectos destacados">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proyectos que generan resultados reales
            </h2>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-300">Soluciones digitales aplicadas a negocios reales</p>
            </FadeIn>
          </div>

          <ProjectShowcaseVisual
            projects={[
              {
                id: 1,
                title: 'Arabela: Ecosistema Digital',
                subtitle: 'Transformación digital integral para empresa de belleza y ventas por catálogo',
                image: '/assets/images/ARABELA FOTOS/PRINCIPAL INVENTARIO.jpg',
                category: 'Transformación Digital',
                size: 'large',
              },
              {
                id: 2,
                title: 'Conexa: Gestión RRHH',
                subtitle: 'Plataforma modular para recursos humanos',
                image: '/assets/images/CONEXA FOTOS/PRINCIPAL CONEXA.jpg',
                category: 'Sistemas Empresariales',
                size: 'small',
              },
              {
                id: 3,
                title: 'Vitalis: Gestión Médica',
                subtitle: 'Plataforma web para gestión integral de pacientes, médicos y recetas en clínicas y consultorios.',
                image: '/assets/images/vitalis fotos/PORTADA VITALIS.jpg',
                category: 'Salud Digital',
                size: 'small',
              },
              {
                id: 4,
                title: 'Medidino: E-commerce Salud',
                subtitle: 'Sistema web para gestión médica integral en clínicas y farmacias.',
                image: '/assets/images/MEDIDINO FOTOS/PRINCIPAL MEDIDINO.jpg',
                category: 'E-commerce Salud',
                size: 'medium',
              },
              {
                id: 5,
                title: 'Bot de Atención al Cliente en Telegram',
                subtitle: 'Automatiza la atención inicial de tus clientes en Telegram de forma clara, rápida y profesional.',
                image: '/assets/images/BOT INTEGRA/PORTADA BOT.jpg',
                category: 'Automatización',
                size: 'small',
              },
              // Tarjeta 'Web Corporativa' eliminada por estar vacía
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
      <section className="py-20 bg-gray-900" aria-label="Servicios digitales">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Servicios digitales que impulsan tu negocio
            </h2>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluciones tecnológicas integrales: desarrollo web, automatización, chatbots y sistemas personalizados para el crecimiento real de tu empresa.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VisualServiceCard
              icon={<span className="text-2xl">🌐</span>}
              title="Desarrollo Web"
              description="Páginas web profesionales, tiendas online y catálogos digitales diseñados para atraer clientes y convertir visitas en ventas."
              image="/assets/images/desarrollo web.jpg"
              delay={0.1}
            />

            <VisualServiceCard
              icon={<span className="text-2xl">💬</span>}
              title="Chatbots WhatsApp"
              description="Atención automatizada 24/7 con inteligencia artificial integrada a tu sistema de ventas, reservas y atención al cliente."
              image="/assets/images/chatbot.jpg"
              delay={0.2}
            />

            <VisualServiceCard
              icon={<span className="text-2xl">💻</span>}
              title="Sistemas Personalizados"
              description="Desarrollamos sistemas a medida: inventarios, cotizadores, CRM, dashboards y software interno adaptado a tu negocio."
              image="/assets/images/fronted.jpg"
              delay={0.3}
            />

            <VisualServiceCard
              icon={<span className="text-2xl">🤖</span>}
              title="Automatizaciones"
              description="Automatizamos reservas, formularios, cotizaciones y procesos internos para ahorrar tiempo y reducir errores."
              image="/assets/images/memoria ram roja.jpg"
              delay={0.4}
            />

            <VisualServiceCard
              icon={<span className="text-2xl">📱</span>}
              title="Presencia Digital"
              description="Mejoramos tu visibilidad online con SEO local, Google Business, redes sociales y reputación digital."
              image="/assets/images/imagen geometrica.jpg"
              delay={0.5}
            />

            <VisualServiceCard
              icon={<span className="text-2xl">🔧</span>}
              title="Soporte & Seguridad"
              description="Mantenimiento continuo, actualizaciones, copias de seguridad y monitoreo para que tus sistemas siempre funcionen."
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
                {/* Video Principal desde Cloudinary */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dolwsuiqy&public_id=trabajando_en_oficina_r5kdid&fluid=true&controls=false&autoplay=true&loop=true&muted=true"
                    width="100%"
                    height="100%"
                    style={{ aspectRatio: '16/9' }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Imagen Flotante */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 hidden md:block">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/assets/images-optimized/cafe oficina-mobile.webp 400w,
                              /assets/images-optimized/cafe oficina-tablet.webp 800w"
                      sizes="200px"
                    />
                    <img 
                      src="/assets/images-optimized/cafe oficina-mobile.webp"
                      alt="Equipo de trabajo"
                      width={400}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
              </div>
            </FadeIn>

            {/* Contenido de Texto */}
            <div>
              <TextReveal className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Transformamos ideas en soluciones digitales que sí funcionan
              </TextReveal>
              
              <FadeIn delay={0.3}>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  En <span className="font-semibold text-blue-600">INTEGRADAV SAS</span>, ayudamos a negocios locales, emprendedores y PYMES a modernizarse con tecnología práctica, accesible y enfocada en resultados.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  No solo creamos páginas web bonitas: desarrollamos <span className="font-semibold">sistemas completos, automatizaciones inteligentes y chatbots con IA</span> que optimizan tu operación, ahorran tiempo y mejoran la experiencia de tus clientes.
                </p>
              </FadeIn>

              {/* Eliminado: íconos/frases sueltas para un enfoque más profesional */}

              <FadeIn delay={0.9}>
                <div className="flex justify-center mt-12">
                  <a
                    href="/empresa"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl transition-all text-lg"
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
          <picture>
            <source
              type="image/webp"
              srcSet="/assets/images-optimized/oficina trabajo-mobile.webp 400w,
                      /assets/images-optimized/oficina trabajo-tablet.webp 800w,
                      /assets/images-optimized/oficina trabajo-desktop.webp 1200w"
              sizes="100vw"
            />
            <img 
              src="/assets/images-optimized/oficina trabajo-desktop.webp"
              alt="Background"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
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
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              number={10}
              suffix="+"
              label="Proyectos Web Entregados"
              delay={0.1}
            />
            <StatCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              number={8}
              suffix="+"
              label="Clientes Empresariales"
              delay={0.2}
            />
            <StatCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              number={100}
              suffix="%"
              label="Satisfacción de Entrega"
              delay={0.3}
            />
            <StatCard
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>}
              number={5.0}
              label="Valoración de Clientes"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Por qué elegir INTEGRADAV SAS - Versión Visual */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TextReveal className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por qué INTEGRADAV SAS?
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-300">Tu aliado tecnológico de confianza</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Soluciones Reales</h3>
                <p className="text-gray-600 dark:text-gray-300">Para negocios locales y PYMES</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Automatización Completa</h3>
                <p className="text-gray-600 dark:text-gray-300">No solo diseño, sino soluciones integrales</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Precios Justos</h3>
                <p className="text-gray-600 dark:text-gray-300">Tecnología accesible y competitiva</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Atención Cercana</h3>
                <p className="text-gray-600 dark:text-gray-300">Acompañamiento continuo y personalizado</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.5}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Experiencia Técnica</h3>
                <p className="text-gray-600 dark:text-gray-300">Desarrollo y programación profesional</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.6}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Seguridad y Confianza</h3>
                <p className="text-gray-600 dark:text-gray-300">Protección de datos y mantenimiento</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-blue-700 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-800 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=integrasasolutions@gmail.com&su=Quiero%20impulsar%20mi%20negocio&body=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20digitales."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 6.81A2 2 0 0 1 4 5h16a2 2 0 0 1 1.99 1.81l-10 6.25-10-6.25zm-.01 2.13V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.94l-9.29 5.81a1 1 0 0 1-1.06 0L2 8.94z"/>
                </svg>
                Escribir correo directo
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
