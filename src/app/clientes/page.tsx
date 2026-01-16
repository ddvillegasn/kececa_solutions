export default function ClientesPage() {
  const clients = [
    { name: "TechCorp", industry: "Tecnología", logo: "🏢" },
    { name: "StyleBrand", industry: "Moda", logo: "👔" },
    { name: "FoodExpress", industry: "Restaurantes", logo: "🍔" },
    { name: "HealthPlus", industry: "Salud", logo: "🏥" },
    { name: "EduLearn", industry: "Educación", logo: "📚" },
    { name: "FinanceHub", industry: "Finanzas", logo: "💰" },
  ];

  const testimonials = [
    {
      name: "María González",
      company: "TechCorp",
      text: "KECECA SOLUTIONS transformó completamente nuestra presencia digital. El equipo es profesional y altamente capacitado.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      company: "StyleBrand",
      text: "Excelente trabajo en el desarrollo de nuestra tienda online. Las ventas han aumentado significativamente.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      company: "EduLearn",
      text: "La plataforma educativa que desarrollaron superó nuestras expectativas. Altamente recomendados.",
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Clientes</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Confiamos en construir relaciones duraderas con nuestros clientes, 
          ayudándoles a alcanzar sus metas digitales.
        </p>
      </div>

      {/* Client Logos */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Empresas que Confían en Nosotros</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center"
            >
              <div className="text-5xl mb-3">{client.logo}</div>
              <h3 className="font-semibold text-center">{client.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{client.industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
        <p className="text-xl mb-8">Únete a las empresas que ya confían en KECECA SOLUTIONS</p>
        <a
          href="/contactenos"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
        >
          Comenzar Ahora
        </a>
      </div>
    </div>
  );
}
