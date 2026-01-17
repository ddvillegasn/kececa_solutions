"use client";

import { useState } from "react";

export default function ContactenosPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData);
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                name="subject"
                value={formData.subject}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 outline-none bg-white dark:bg-gray-700 resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="opacity-90">Lima, Perú</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="opacity-90">info@integrasolutions.com</p>
                  <p className="opacity-90">soporte@integrasolutions.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="opacity-90">+51 999 999 999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🕐</div>
                <div>
                  <h3 className="font-semibold mb-1">Horario</h3>
                  <p className="opacity-90">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="opacity-90">Sábado: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
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
