"use client";

import { Metadata } from "next";

// Note: metadata export doesn't work in client components, will need to move to page wrapper or use different approach

// No hooks necesarios para FormSubmit

export default function ContactenosPage() {



  return (
    <div className="container mx-auto px-4 pt-40 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Contáctenos</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          ¿Tienes un proyecto en mente? Nos encantaría escucharte. 
          Completa el formulario y nos pondremos en contacto contigo pronto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
          <form
            action="https://formsubmit.co/ff38167b946599d94e03e97c2023d63c"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="nombre"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 outline-none bg-white dark:bg-gray-700"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 outline-none bg-white dark:bg-gray-700"
                placeholder="juan@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="telefono"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 outline-none bg-white dark:bg-gray-700"
                placeholder="+51 999 999 999"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Asunto *
              </label>
              <select
                id="subject"
                name="asunto"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 outline-none bg-white dark:bg-gray-700"
              >
                <option value="">Selecciona un asunto</option>
                <option value="desarrollo-web">Desarrollo Web</option>
                <option value="diseno">Diseño UI/UX</option>
                <option value="marketing">Marketing Digital</option>
                <option value="consultoria">Consultoría IT</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="mensaje"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 outline-none bg-white dark:bg-gray-700 resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="opacity-90">Pereira, Risaralda, Colombia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="opacity-90">integrasasolutions@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="opacity-90">3204153533</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🕐</div>
                <div>
                  <h3 className="font-semibold mb-1">Horario</h3>
                  <p className="opacity-90">Lunes a Sábado: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://wa.me/573204153533?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-colors"
              style={{ textDecoration: 'none' }}
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contactar por WhatsApp
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=integrasasolutions@gmail.com&su=Quiero%20impulsar%20mi%20negocio&body=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20digitales."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-colors"
              style={{ textDecoration: 'none' }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 6.81A2 2 0 0 1 4 5h16a2 2 0 0 1 1.99 1.81l-10 6.25-10-6.25zm-.01 2.13V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.94l-9.29 5.81a1 1 0 0 1-1.06 0L2 8.94z"/>
              </svg>
              Escribir correo directo
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Respuesta en menos de 24 horas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Consultoría inicial gratuita</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Presupuesto sin compromiso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Equipo experto y comprometido</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Síguenos en Redes</h3>
            <div className="flex gap-4">
              <a href="#" className="text-4xl hover:scale-110 transition-transform">📘</a>
              <a href="#" className="text-4xl hover:scale-110 transition-transform">📷</a>
              <a href="#" className="text-4xl hover:scale-110 transition-transform">🔗</a>
              <a href="#" className="text-4xl hover:scale-110 transition-transform">🐦</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
