import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Agencia Digital en Colombia",
  description: "Conoce INTEGRADAV, agencia de servicios digitales especializada en desarrollo web, automatización y sistemas personalizados. Impulsamos PYMES y negocios locales con tecnología moderna.",
  keywords: [
    "agencia digital Colombia",
    "empresa desarrollo web",
    "agencia tecnológica",
    "soluciones digitales PYMES",
    "Eje Cafetero tecnología"
  ],
  openGraph: {
    title: "Sobre INTEGRADAV - Agencia Digital",
    description: "Agencia de servicios digitales enfocada en transformar negocios con tecnología accesible y efectiva.",
    url: "https://www.integradav.com/empresa",
  },
  alternates: {
    canonical: "https://www.integradav.com/empresa",
  },
};

import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";

export default function EmpresaPage() {
  return (
    <>
      {/* Hero Visual */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/assets/images/oficina trabajo.jpg"
            alt="CONOCE A INTEGRADAV"
            className="w-full h-full object-cover opacity-60"
            style={{ pointerEvents: 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-gray-800/80" />
        </div>
        <div className="container mx-auto px-4 pt-36 pb-24 relative z-10 text-center">
          <TextReveal className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            CONOCE A INTEGRADAV
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-2xl md:text-3xl text-white font-light max-w-2xl mx-auto mb-8 drop-shadow-lg">
              Impulsamos el crecimiento de tu negocio con tecnología, innovación y acompañamiento humano.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sección Quiénes Somos + Misión/Visión en tarjetas */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <img
                src="/assets/images/cafe oficina.jpg"
                alt="Nuestro equipo en acción"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </FadeIn>
            <div>
              <TextReveal className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                ¿Quiénes somos?
              </TextReveal>
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Somos una agencia digital con enfoque humano y tecnológico. Ayudamos a negocios, emprendedores y PYMES a crecer, vender más y operar de forma eficiente con soluciones digitales modernas, automatización y sistemas personalizados.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Misión</h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">Brindar soluciones digitales accesibles, seguras y automatizadas que impulsen el crecimiento de pequeños y medianos negocios, mejorando su presencia online y optimizando procesos internos.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Visión</h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">Ser líderes en el Eje Cafetero y Colombia en soluciones digitales integrales, reconocidos por la eficiencia, innovación y acompañamiento a nuestros clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores y Diferenciadores visuales */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <TextReveal className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-900 dark:text-white">
            Nuestros valores y diferenciales
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
                <span className="mb-4">
                  {/* Light Bulb Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700 dark:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3a7 7 0 00-7 7c0 2.386 1.053 4.09 2.25 5.25C8.5 16.5 8.5 18 12 18s3.5-1.5 4.75-2.75C17.947 14.09 19 12.386 19 10a7 7 0 00-7-7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21h6" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-300">Innovación Continua</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Adoptamos nuevas tecnologías, IA y automatizaciones para ofrecer soluciones actuales y escalables.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
                <span className="mb-4">
                  {/* Trending Up Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700 dark:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">Orientación a Resultados</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Cada proyecto tiene un objetivo claro: aumentar ventas, mejorar la atención o automatizar procesos.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
                <span className="mb-4">
                  {/* Handshake Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-3.5-3.5a2.121 2.121 0 010-3l3.5-3.5a2.121 2.121 0 013 0l3.5 3.5a2.121 2.121 0 010 3L15 15a2.121 2.121 0 01-3 0z" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-300">Compromiso Real</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Nos involucramos como aliados tecnológicos, no solo como proveedores.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
                <span className="mb-4">
                  {/* Shield Check Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-700 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354l6.364 2.121A2 2 0 0120 8.236V12a8 8 0 11-16 0V8.236a2 2 0 011.636-1.761L12 4.354z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-yellow-900 dark:text-yellow-300">Seguridad e Integridad</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Protegemos la información y los sistemas de nuestros clientes, con transparencia y buenas prácticas.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.5}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
                <span className="mb-4">
                  {/* Globe Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-900 dark:text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-pink-900 dark:text-pink-300">Accesibilidad Tecnológica</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Hacemos que la tecnología sea entendible y funcional para cualquier negocio, sin barreras técnicas.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
                <span className="mb-4">
                  {/* User Group Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-900 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-300">Acompañamiento Humano</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Brindamos soporte, capacitación y seguimiento para que nuestros clientes aprovechen al máximo cada solución.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Equipo y enfoque de trabajo visual */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Nuestro equipo
              </TextReveal>
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Somos un equipo multidisciplinario apasionado por la tecnología, el desarrollo de software y la automatización. Abordamos cada proyecto con visión técnica, estratégica y humana, garantizando soluciones integrales y personalizadas.
                </p>
              </FadeIn>
              {/* Lista simple de capacidades del equipo, sin tarjetas ni íconos */}
              <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <li>Desarrollo web y backend</li>
                <li>Automatización de procesos</li>
                <li>Integración con WhatsApp e IA</li>
                <li>Sistemas personalizados</li>
                <li>Soporte técnico y acompañamiento</li>
              </ul>
            </div>
            <FadeIn direction="right">
              <img
                src="/assets/images/oficina trabajo.jpg"
                alt="Equipo profesional INTEGRADAV"
                className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto object-cover min-h-[320px] min-w-[400px]"
                style={{ aspectRatio: '16/7', objectPosition: 'center' }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white text-center">
        <div className="container mx-auto px-4">
          <TextReveal className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar tu empresa?
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl mb-8">Conversemos sobre tu proyecto y exploremos cómo podemos apoyarte con soluciones digitales a la medida.</p>
            <a
              href="/contactenos"
              className="inline-block px-10 py-4 bg-white text-blue-700 font-semibold rounded-full hover:scale-105 hover:shadow-2xl transition-all text-lg"
            >
              Contáctanos
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
