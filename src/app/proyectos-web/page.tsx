
"use client";
// Estado para modal del bot de Telegram
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ModalGaleria from "@/components/ModalGaleria";




export default function ProyectosWebPage() {
  // Estado para modal del bot de Telegram
  const [modalBotOpen, setModalBotOpen] = useState(false);

  // Estado para modal de incapacidades
  const [modalIncapacidadesOpen, setModalIncapacidadesOpen] = useState(false);

  const projects = [
    {
      title: "Conexa – Plataforma Web de Gestión de Recursos Humanos",
      description: "Plataforma web modular para centralizar y optimizar procesos de RRHH en empresas modernas.",
      tags: ["Flask", "RRHH", "Contratación", "Liquidaciones", "Evaluación", "Web Modular"],
      detalle: `Conexa es una plataforma web de gestión de recursos humanos (RRHH) diseñada para centralizar, organizar y optimizar los procesos administrativos de una empresa. La solución permite administrar de forma estructurada la información del personal, los procesos de selección y contratación, así como el seguimiento laboral de los colaboradores.\n\nEl sistema cuenta con una interfaz web modular que integra distintos componentes clave del área de RRHH, facilitando el control de datos, la trazabilidad de procesos y la toma de decisiones. Conexa está pensada como una herramienta interna que reduce el manejo manual de información y mejora la eficiencia operativa.\n\n**Funcionalidades principales**\n\n- Gestión de empleados: registro, consulta y administración de información del personal.\n- Selección y reclutamiento: manejo de vacantes, candidatos y procesos de selección.\n- Contratación: control y seguimiento de contratos laborales.\n- Seguridad social: administración de afiliaciones y estados relacionados.\n- Liquidaciones laborales: cálculo y gestión de liquidaciones.\n- Capacitación: registro de programas de formación y participantes.\n- Evaluación de desempeño: creación y almacenamiento de evaluaciones internas.\n\n**Tecnologías utilizadas**\n\n- Aplicación web desarrollada con Flask\n- Backend estructurado con lógica de servidor\n- Plantillas HTML y recursos estáticos (CSS y JavaScript)\n- Base de datos para persistencia de información\n- Arquitectura organizada para facilitar mantenimiento y escalabilidad\n\n**Valor del proyecto**\n\nConexa demuestra la capacidad de desarrollar sistemas empresariales personalizados, enfocados en resolver necesidades reales de gestión interna, con una arquitectura clara y preparada para ampliaciones futuras.`,
      images: [
        "/assets/images/CONEXA FOTOS/PRINCIPAL CONEXA.jpg",
        "/assets/images/CONEXA FOTOS/inicio.png",
        "/assets/images/CONEXA FOTOS/MODULOS.png",
        "/assets/images/CONEXA FOTOS/SECCION SELECCION.png",
        "/assets/images/CONEXA FOTOS/SECCION CONTRATO.png",
        "/assets/images/CONEXA FOTOS/AFILIACIONES.png",
        "/assets/images/CONEXA FOTOS/BENEFICIOS.png",
        "/assets/images/CONEXA FOTOS/LIQUIDACIONES.png"
      ]
    },
    {
      title: "Sistema de Gestión Web – Arabela Espectáculos",
      description: "Sistema web básico para gestión interna, inventario y vestuarios con login seguro. Simple, funcional y orientado a optimizar procesos internos.",
      tags: ["PHP", "Login", "Inventario", "Vestuarios", "Web Admin", "Validaciones"],
      detalle: `Desarrollo de un sistema web básico de gestión interna para Arabela Espectáculos, enfocado en el control organizado de recursos y acceso de usuarios.\n\n**Funcionalidades principales:**\n- Sistema de autenticación de usuarios (login y control de acceso)\n- Gestión de inventario: agregar, editar, eliminar y listar elementos\n- Gestión de vestuarios con control de estado\n- Interfaz web sencilla y práctica para uso administrativo\n- Estructura organizada de archivos para facilitar mantenimiento\n\n**Tecnologías utilizadas:**\n- Desarrollo web con tecnologías del lado del servidor\n- Estructura modular de archivos\n- Formularios y validaciones básicas\n- Gestión de datos persistentes\n\n(No se muestra el código por confidencialidad del proyecto.)\n\n🌐 [Acceso al sistema (login)](https://arabela.page.gd/login.php)\n\n*Nota: Proyecto de carácter interno/administrativo.*`,
      images: [
        "/assets/images/ARABELA FOTOS/ARABELA TEMATICA FOTO.png",
        "/assets/images/ARABELA FOTOS/PAGINA WEB SENCILLA.png",
        "/assets/images/ARABELA FOTOS/Captura de pantalla 2026-01-15 230616.png"
      ],
      link: "https://arabela.page.gd/login.php"
    },
    {
      title: "Medidino – Sistema Integral de Gestión Médica",
      description: "Sistema web para gestión integral de información médica en clínicas, consultorios y farmacias.",
      tags: ["Backend modular", "Web interactiva", "Inventario", "Pacientes", "Recetas"],
        detalle: `Medidino es un sistema web para la gestión integral de información médica, diseñado para apoyar a clínicas, consultorios y farmacias en la digitalización y control de sus procesos operativos. La plataforma centraliza la administración de pacientes, médicos, recetas y medicamentos, permitiendo un manejo organizado, seguro y trazable de la información clínica.\n\nEl sistema facilita la emisión y consulta de recetas médicas, el seguimiento del historial de pacientes y el control de inventarios de medicamentos, optimizando los flujos de trabajo y reduciendo errores derivados de la gestión manual.\n\n🔧 **Funcionalidades principales**\n\n- Gestión de pacientes: registro y consulta de información médica e historial clínico.\n- Gestión de médicos: administración de datos profesionales y asignaciones.\n- Recetas médicas: creación, consulta y control de recetas emitidas.\n- Medicamentos e inventario: control de stock, alertas y disponibilidad.\n- Reportes: generación de informes operativos y médicos.\n- Trazabilidad: seguimiento claro de la información y acciones realizadas en el sistema.\n\n🛠️ **Tecnologías utilizadas**\n\n- Backend desarrollado con arquitectura web modular\n- Integración de múltiples lenguajes para distintos componentes del sistema\n- Interfaz web interactiva y responsiva\n- Estructura preparada para crecimiento y adaptación a distintos entornos clínicos\n\n(La tecnología se selecciona según la necesidad del proyecto, priorizando estabilidad, seguridad y escalabilidad.)\n\n💡 **Valor del proyecto**\n\nMedidino demuestra la capacidad de INTEGRA Solutions para desarrollar sistemas personalizados para sectores críticos, como el ámbito de la salud, donde la organización de la información, la trazabilidad y la eficiencia son fundamentales.`,
      images: [
        "/assets/images/MEDIDINO FOTOS/HOME .png",
        "/assets/images/MEDIDINO FOTOS/medicamento.png",
        "/assets/images/MEDIDINO FOTOS/medico.png",
        "/assets/images/MEDIDINO FOTOS/paciente.png",
        "/assets/images/MEDIDINO FOTOS/historial.png"
      ]
    },
    {
      title: "Vitalis: Gestión Médica",
      description: "Plataforma web para gestión integral de pacientes, médicos, incapacidades y pagos en clínicas y consultorios.",
      tags: ["Python", "Flask", "MySQL", "HTML", "CSS", "Jinja2"],
      detalle: `Esta plataforma es una aplicación web orientada al sector salud, diseñada para optimizar la gestión de incapacidades médicas, usuarios y pagos dentro de clínicas o entidades prestadoras de servicios de salud.\n\nEl sistema permite a los pacientes registrar y consultar sus incapacidades, mientras que los administradores y personal autorizado pueden revisar, aprobar o rechazar solicitudes, llevar el control de pagos asociados y generar reportes mensuales en formato PDF para seguimiento y análisis administrativo.\n\nLa aplicación cuenta con un sistema de autenticación y control de acceso por roles, ofreciendo paneles diferenciados para pacientes, médicos y administradores, lo que garantiza seguridad, organización y una experiencia de uso clara según el perfil del usuario.\n\nA nivel técnico, el sistema está desarrollado con Python utilizando el framework Flask para la lógica del backend, MySQL como motor de base de datos y una interfaz web basada en HTML y CSS, apoyada en plantillas Jinja2 para una estructura dinámica y mantenible.\n\nEsta solución contribuye a la digitalización de procesos clínicos, mejora la trazabilidad de la información y reduce la gestión manual en entornos de salud.`,
      images: [
        "/assets/images/vitalis fotos/vitales home.png",
        "/assets/images/vitalis fotos/admin .png",
        "/assets/images/vitalis fotos/Captura de pantalla 2026-01-16 180555.png",
        "/assets/images/vitalis fotos/Captura de pantalla 2026-01-16 180628.png"
      ],
      link: "#"
    },
    {
      title: "Bot de Atención al Cliente en Telegram",
      description: "Automatiza la atención inicial de tus clientes en Telegram de forma clara, rápida y profesional.",
      tags: ["Node.js", "JavaScript", "Telegram API"],
      detalle: `Este proyecto consiste en un bot de atención al cliente desarrollado para empresas de servicios digitales, diseñado para automatizar la primera interacción con los usuarios de forma clara, rápida y profesional.\n\nEl bot presenta un menú interactivo que permite a los usuarios:\n- Consultar información sobre servicios ofrecidos.\n- Solicitar cotizaciones de manera guiada.\n- Acceder a opciones de soporte.\n- Conocer información general de la empresa.\n- Contactar con un asesor humano cuando es necesario.\n\nEl sistema reconoce tanto opciones numéricas como palabras clave, lo que facilita la interacción y mejora la experiencia del usuario sin requerir entrenamiento previo. Su lógica está basada en flujos conversacionales definidos, garantizando respuestas consistentes y controladas.\n\nEste bot está pensado como una solución ligera, estable y de fácil mantenimiento, ideal para empresas que buscan automatizar la atención inicial sin depender de inteligencia artificial ni bases de datos, reduciendo costos y complejidad técnica.\n\n**Tecnologías utilizadas**\n- Node.js (JavaScript) como entorno de ejecución.\n- node-telegram-bot-api para la integración y comunicación con la plataforma Telegram.\n- Arquitectura basada en flujos conversacionales y comandos estructurados.\n\n**Valor para el negocio**\n- Atención al cliente 24/7.\n- Reducción de carga operativa en canales de soporte.\n- Respuestas rápidas y estandarizadas.\n- Implementación sencilla y escalable.\n- Bajo costo de mantenimiento.`,
      images: [
        "/assets/images/BOT INTEGRA/PORTADA BOT.jpg",
        "/assets/images/BOT INTEGRA/0cad3b3e-d14a-4c6e-9140-dc2bcdcaae86.jpg",
        "/assets/images/BOT INTEGRA/1edbdf5c-a782-429d-8930-b0d01fac10b0.jpg",
        "/assets/images/BOT INTEGRA/8cb61ff9-d32f-4be0-955d-8f814ac0efdd.jpg"
      ],
      link: "#"
    },
  ];

  const [modalMedidinoOpen, setModalMedidinoOpen] = useState(false);

  const stats = [
    { number: "10+", label: "Proyectos Web Entregados" },
    { number: "8+", label: "Clientes Empresariales" },
    { number: "100%", label: "Satisfacción de Entrega" },
    { number: "5⭐", label: "Valoración de Clientes" }
  ];

  // Estado para modal de galería
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConexaOpen, setModalConexaOpen] = useState(false);
  const arabela = projects.find(p => p.title.includes('Arabela'));
  const conexa = projects.find(p => p.title.includes('Conexa'));
  return (
    <div className="container mx-auto px-4 pt-40 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Proyectos Web</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Aquí te mostramos una selección real de los proyectos web desarrollados para nuestros clientes. Cada solución fue creada a la medida, priorizando calidad, seguridad y resultados tangibles para cada organización.
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
          {/* Arabela con modal */}
          {arabela && (
            <div className="flex flex-col h-full">
              <div className="flex-1 flex flex-col">
                <ProjectCard
                  title={arabela.title}
                  description={arabela.description}
                  tags={arabela.tags}
                  image={"/assets/images/ARABELA FOTOS/PRINCIPAL INVENTARIO.jpg"}
                />
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setModalOpen(true)}
              >
                Ver Proyecto →
              </button>
            </div>
          )}
          {/* Conexa con modal */}
          {conexa && (
            <div className="flex flex-col h-full">
              <div className="flex-1 flex flex-col">
                <ProjectCard
                  title={conexa.title}
                  description={conexa.description}
                  tags={conexa.tags}
                  image={Array.isArray(conexa.images) ? conexa.images[0] : undefined}
                />
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setModalConexaOpen(true)}
              >
                Ver Proyecto →
              </button>
            </div>
          )}
          {/* Medidino con modal (tercer cuadro) */}
          {projects.filter(p => p.title.includes('Medidino')).map((medidino, index) => (
            <div className="flex flex-col h-full" key={index}>
              <div className="flex-1 flex flex-col">
                <ProjectCard
                  title={medidino.title}
                  description={medidino.description}
                  tags={medidino.tags}
                  image={"/assets/images/MEDIDINO FOTOS/PRINCIPAL MEDIDINO.jpg"}
                />
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setModalMedidinoOpen(true)}
              >
                Ver Proyecto →
              </button>
            </div>
          ))}
          {/* Otros proyectos (excepto Arabela, Conexa, Medidino) */}
          {projects.filter(p => p !== arabela && p !== conexa && !p.title.includes('Medidino')).map((project, index) => {
            // Modal para Vitalis
            if (project.title === "Vitalis: Gestión Médica") {
              return (
                <div className="flex flex-col h-full" key={index}>
                  <div className="flex-1 flex flex-col">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      image={"/assets/images/vitalis fotos/PORTADA VITALIS.jpg"}
                    />
                  </div>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => setModalIncapacidadesOpen(true)}
                  >
                    Ver Proyecto →
                  </button>
                </div>
              );
            }
            // Modal para Bot de Atención al Cliente en Telegram
            if (project.title === "Bot de Atención al Cliente en Telegram") {
              return (
                <div className="flex flex-col h-full" key={index}>
                  <div className="flex-1 flex flex-col">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      image={Array.isArray(project.images) ? project.images[0] : undefined}
                    />
                  </div>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => setModalBotOpen(true)}
                  >
                    Ver Proyecto →
                  </button>
                </div>
              );
            }
            // Otros proyectos normales
            return (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                image={Array.isArray(project.images) ? project.images[0] : undefined}
              />
            );
          })}
                                {/* Modal Galería para Bot de Atención al Cliente en Telegram */}
                                {(() => {
                                  const bot = projects.find(p => p.title === "Bot de Atención al Cliente en Telegram");
                                  if (!bot) return null;
                                  return (
                                    <ModalGaleria
                                      isOpen={modalBotOpen}
                                      onClose={() => setModalBotOpen(false)}
                                      images={bot.images ?? []}
                                      title={bot.title}
                                      // @ts-ignore
                                      description={bot.detalle ?? ""}
                                    />
                                  );
                                })()}
                        {/* Modal Galería para Sistema de Incapacidades */}
                        {(() => {
                          const incap = projects.find(p => p.title === "Vitalis: Gestión Médica");
                          if (!incap) return null;
                          return (
                            <ModalGaleria
                              isOpen={modalIncapacidadesOpen}
                              onClose={() => setModalIncapacidadesOpen(false)}
                              images={incap.images ?? []}
                              title={incap.title}
                              // @ts-ignore
                              description={incap.detalle ?? ""}
                            />
                          );
                        })()}
                {/* Modal Galería para Medidino */}
                {(() => {
                  const medidino = projects.find(p => p.title.includes('Medidino'));
                  if (!medidino) return null;
                  return (
                    <ModalGaleria
                      isOpen={modalMedidinoOpen}
                      onClose={() => setModalMedidinoOpen(false)}
                      images={medidino.images ?? []}
                      title={medidino.title ?? "Medidino"}
                      // @ts-ignore
                      description={medidino.detalle ?? ""}
                    />
                  );
                })()}
        </div>
        {/* Modal Galería para Arabela */}
        {arabela && (
          <ModalGaleria
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            images={Array.isArray(arabela.images) ? arabela.images : []}
            title={arabela.title}
            // @ts-ignore
            description={arabela.detalle}
          />
        )}
        {/* Modal Galería para Conexa */}
        {conexa && (
          <ModalGaleria
            isOpen={modalConexaOpen}
            onClose={() => setModalConexaOpen(false)}
            images={Array.isArray(conexa.images) ? conexa.images.slice(1) : []}
            title={conexa.title}
            // @ts-ignore
            description={conexa.detalle}
          />
        )}
      </section>

      {/* Proceso profesional minimalista */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-12 border border-gray-200 dark:border-gray-800 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-300">Nuestro Proceso de Desarrollo</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#2563eb" strokeWidth="2" fill="#f3f4f6"/><path d="M20 12v8l6 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="font-semibold mb-2 text-base text-blue-700 dark:text-blue-300">Análisis Estratégico</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Diagnóstico de objetivos y necesidades para definir la mejor solución digital.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="7" y="7" width="26" height="26" rx="5" fill="#f3f4f6" stroke="#2563eb" strokeWidth="2"/><path d="M13 27V13h14v14H13z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="font-semibold mb-2 text-base text-blue-700 dark:text-blue-300">Diseño Personalizado</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Prototipos y experiencias visuales alineadas con la identidad de tu empresa.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="9" y="9" width="22" height="22" rx="5" fill="#f3f4f6" stroke="#2563eb" strokeWidth="2"/><path d="M20 15v10M15 20h10" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3 className="font-semibold mb-2 text-base text-blue-700 dark:text-blue-300">Desarrollo Profesional</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Implementación con tecnologías robustas, asegurando calidad y seguridad.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#2563eb" strokeWidth="2" fill="#f3f4f6"/><path d="M20 28l6-6-6-6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="font-semibold mb-2 text-base text-blue-700 dark:text-blue-300">Implementación y Soporte</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Despliegue y acompañamiento técnico para garantizar el éxito y la continuidad operativa.</p>
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


