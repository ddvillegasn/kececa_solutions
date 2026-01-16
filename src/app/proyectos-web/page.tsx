"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ModalGaleria from "@/components/ModalGaleria";

export default function ProyectosWebPage() {

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
      title: "Dashboard Analytics",
      description: "Panel de control interactivo para análisis de datos empresariales en tiempo real.",
      tags: ["React", "D3.js", "Python"],
      link: "#"
    },
    {
      title: "Reservas de Restaurante",
      description: "Aplicación web para gestión de reservas, menús digitales y pedidos online.",
      tags: ["Next.js", "PostgreSQL", "Vercel"],
      link: "#"
    },
    {
      title: "Marketplace B2B",
      description: "Plataforma de comercio electrónico B2B con gestión de múltiples vendedores.",
      tags: ["TypeScript", "GraphQL", "AWS"],
      link: "#"
    },
    {
      title: "App de Salud y Bienestar",
      description: "Aplicación para seguimiento de salud, ejercicios y nutrición personalizada.",
      tags: ["React Native", "Firebase", "ML"],
      link: "#"
    }
  ];

  const [modalMedidinoOpen, setModalMedidinoOpen] = useState(false);

  const stats = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "30+", label: "Clientes Satisfechos" },
    { number: "100%", label: "Tasa de Éxito" },
    { number: "5⭐", label: "Calificación Promedio" }
  ];

  // Estado para modal de galería
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConexaOpen, setModalConexaOpen] = useState(false);
  const arabela = projects.find(p => p.title.includes('Arabela'));
  const conexa = projects.find(p => p.title.includes('Conexa'));
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Proyectos Web</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Descubre algunos de los proyectos web que hemos desarrollado para nuestros clientes. 
          Cada proyecto es único y diseñado para alcanzar objetivos específicos.
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
            // Si es el nuevo proyecto, mostrar con modal
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

      {/* Process */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold mb-2">1. Análisis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Entendemos tus necesidades y objetivos
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="font-semibold mb-2">2. Diseño</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creamos prototipos y diseños personalizados
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="font-semibold mb-2">3. Desarrollo</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Construimos tu proyecto con las mejores tecnologías
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold mb-2">4. Lanzamiento</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Desplegamos y damos soporte continuo
            </p>
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


