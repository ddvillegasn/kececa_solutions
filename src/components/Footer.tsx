import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              INTEGRADAV
            </h3>
            <p className="text-gray-400 mb-4">
              Agencia de servicios digitales y automatización tecnológica para negocios, emprendedores y pequeñas empresas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/empresa" className="text-gray-400 hover:text-white transition-colors">
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="text-gray-400 hover:text-white transition-colors">
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="/proyectos-web" className="text-gray-400 hover:text-white transition-colors">
                  Proyectos Web
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-gray-400 hover:text-white transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/contactenos" className="text-gray-400 hover:text-white transition-colors">
                  Contáctenos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/servicios#desarrollo-web" className="hover:text-white transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/servicios#diseno-digital" className="hover:text-white transition-colors">
                  Diseño Digital
                </Link>
              </li>
              <li>
                <Link href="/servicios#marketing-digital" className="hover:text-white transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/servicios#consultoria-it" className="hover:text-white transition-colors">
                  Consultoría IT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 integrasasolutions@gmail.com</li>
              <li>📱 3204153533</li>
              <li>📍 Pereira, Risaralda, Colombia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} INTEGRADAV. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
