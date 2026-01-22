import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.integra-solutions.com'),
  title: {
    default: "INTEGRA SOLUTIONS - Desarrollo Web, Chatbots IA y Automatización | Colombia",
    template: "%s | INTEGRA SOLUTIONS"
  },
  description: "Agencia digital en Colombia especializada en desarrollo web profesional, chatbots con IA, automatización de procesos y sistemas personalizados. Transformamos negocios locales y PYMES con tecnología moderna. ☎️ +57 320 415 3533",
  keywords: [
    "desarrollo web Colombia",
    "agencia digital Colombia",
    "chatbots WhatsApp",
    "automatización empresarial",
    "diseño web profesional",
    "páginas web para empresas",
    "sistemas personalizados",
    "inteligencia artificial Colombia",
    "desarrollo software Colombia",
    "ecommerce Colombia",
    "tiendas online",
    "SEO local Colombia",
    "desarrollo web Eje Cafetero",
    "chatbots con IA",
    "automatización procesos",
    "desarrollo web PYMES",
    "soluciones digitales empresas"
  ],
  authors: [{ name: "INTEGRA SOLUTIONS" }],
  creator: "INTEGRA SOLUTIONS",
  publisher: "INTEGRA SOLUTIONS",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.integra-solutions.com",
    siteName: "INTEGRA SOLUTIONS",
    title: "INTEGRA SOLUTIONS - Desarrollo Web, Chatbots IA y Automatización",
    description: "Agencia digital en Colombia. Desarrollo web profesional, chatbots con IA, automatización y sistemas personalizados para PYMES. Transformamos tu negocio con tecnología.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INTEGRA SOLUTIONS - Soluciones Digitales"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "INTEGRA SOLUTIONS - Desarrollo Web y Chatbots IA",
    description: "Desarrollo web, chatbots con IA y automatización para empresas en Colombia. Transformamos negocios con tecnología.",
    images: ["/assets/images/og-image.jpg"],
    creator: "@integrasolutions"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.integra-solutions.com",
  },
  category: "technology",
  // Agregar código de verificación cuando tengas Google Search Console
  // verification: {
  //   google: "tu-código-de-verificación-aquí",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "INTEGRA SOLUTIONS",
    "alternateName": "Integra Solutions Colombia",
    "url": "https://www.integra-solutions.com",
    "logo": "https://www.integra-solutions.com/assets/images/logo.png",
    "description": "Agencia digital especializada en desarrollo web, chatbots con IA, automatización y sistemas personalizados para empresas en Colombia",
    "email": "integrasasolutions@gmail.com",
    "telephone": "+573204153533",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressRegion": "Eje Cafetero"
    },
    "sameAs": [
      "https://www.facebook.com/integrasolutions",
      "https://www.instagram.com/integrasolutions",
      "https://www.linkedin.com/company/integrasolutions"
    ],
    "founder": {
      "@type": "Person",
      "name": "INTEGRA SOLUTIONS Team"
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "INTEGRA SOLUTIONS",
    "image": "https://www.integra-solutions.com/assets/images/logo.png",
    "url": "https://www.integra-solutions.com",
    "telephone": "+573204153533",
    "email": "integrasasolutions@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressRegion": "Eje Cafetero"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.8143",
      "longitude": "-75.6946"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "15"
    }
  };

  // ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "INTEGRA SOLUTIONS - Desarrollo Web y Automatización",
    "description": "Servicios de desarrollo web profesional, chatbots con IA, automatización empresarial y sistemas personalizados",
    "url": "https://www.integra-solutions.com",
    "telephone": "+573204153533",
    "email": "integrasasolutions@gmail.com",
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "serviceType": [
      "Desarrollo Web",
      "Chatbots con Inteligencia Artificial",
      "Automatización Empresarial",
      "Sistemas Personalizados",
      "E-commerce",
      "Optimización SEO"
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Digitales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web Profesional",
            "description": "Páginas web modernas, rápidas y optimizadas para conversión"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chatbots WhatsApp con IA",
            "description": "Automatización de atención al cliente 24/7"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización de Procesos",
            "description": "Optimización y automatización de procesos empresariales"
          }
        }
      ]
    }
  };

  return (
    <html lang="es">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
