# KECECA SOLUTIONS

Agencia de Servicios Digitales moderna desarrollada con Next.js 15 y React 19.

## Estructura del Proyecto

```
src/
 ├── app/                    # App Router de Next.js
 │   ├── page.tsx           # Página de inicio
 │   ├── empresa/           # Página sobre la empresa
 │   ├── servicios/         # Página de servicios
 │   ├── clientes/          # Página de clientes
 │   ├── proyectos-web/     # Portafolio de proyectos
 │   ├── noticias/          # Blog/noticias
 │   └── contactenos/       # Formulario de contacto
 │
 ├── components/            # Componentes reutilizables
 │   ├── Header.tsx        # Barra de navegación
 │   ├── Footer.tsx        # Pie de página
 │   ├── ServiceCard.tsx   # Tarjeta de servicio
 │   └── ProjectCard.tsx   # Tarjeta de proyecto
 │
 ├── styles/               # Estilos globales
 └── lib/                  # Utilidades y helpers
```

## Tecnologías

- **Next.js 15** - Framework de React
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Navegación

- Inicio
- Empresa
- Servicios
- Clientes
- Proyectos Web
- Noticias
- Contáctenos
