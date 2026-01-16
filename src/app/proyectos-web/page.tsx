"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ModalGaleria from "@/components/ModalGaleria";

export default function ProyectosWebPage() {
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
      title: "E-commerce Fashion",
      description: "Tienda online completa para marca de moda con sistema de inventario y pagos integrados.",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Plataforma Educativa",
      description: "Sistema de gestión de aprendizaje (LMS) con video streaming y seguimiento de progreso.",
      tags: ["React", "Node.js", "MongoDB"],
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
          {/* Otros proyectos */}
          {projects.filter(p => p !== arabela && p !== conexa).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={Array.isArray(project.images) ? project.images[0] : undefined}
            />
          ))}
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


