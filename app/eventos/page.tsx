import { Calendar, Tent, Megaphone, Bell, Clock } from "lucide-react";
import Image from "next/image";

export default function Eventos() {
  const imagenesEventos = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
    "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
  ];
  const categorias = [
    {
      title: "Actividades",
      icon: <Calendar className="h-12 w-12" />,
      descripcion: "Eventos regulares y especiales de la iglesia",
      items: [
        "Culto dominical",
        "Escuela dominical",
        "Reunión de jóvenes",
        "Reunión de oración",
        "Actividades familiares"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      title: "Campamentos",
      icon: <Tent className="h-12 w-12" />,
      descripcion: "Retiros espirituales y campamentos",
      items: [
        "Campamento de Adolescentes",
        "Retiro de jóvenes",
        "Campamento Iglesia"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      title: "Noticias",
      icon: <Megaphone className="h-12 w-12" />,
      descripcion: "Últimas novedades de nuestra iglesia",
      items: [
        "Nuevo ministerio de niños",
        "Próxima serie de predicaciones",
        "Testimonios recientes",
        "Proyectos comunitarios",
        "Actualizaciones ministeriales"
      ],
      color: "from-accent-300 to-primary-500"
    },
    {
      title: "Anuncios",
      icon: <Bell className="h-12 w-12" />,
      descripcion: "Avisos importantes y recordatorios",
      items: [
        "Horarios especiales",
        "Cambios de actividades",
        "Inscripciones abiertas",
        "Eventos próximos",
        "Necesidades de la iglesia"
      ],
      color: "from-primary-600 to-primary-700"
    }
  ];

  const proximosEventos = [
    {
      titulo: "Culto de Adoración",
      fecha: "Domingo 15 de Octubre",
      hora: "10:00 AM",
      lugar: "Templo principal",
      tipo: "Actividad regular"
    },
    {
      titulo: "Reunión de Jóvenes",
      fecha: "Viernes 13 de Octubre",
      hora: "7:00 PM",
      lugar: "Salón de jóvenes",
      tipo: "Actividad regular"
    },
    {
      titulo: "Campamento Iglesia",
      fecha: "20-22 de Noviembre",
      hora: "Todo el día",
      lugar: "Por confirmar",
      tipo: "Evento especial"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            alt="Eventos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Eventos</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Mantente al día con todas nuestras actividades y eventos
            </p>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {proximosEventos.map((evento, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-l-4 border-primary-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {evento.tipo}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{evento.titulo}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                    <span className="text-sm">{evento.fecha}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary-600" />
                    <span className="text-sm">{evento.hora}</span>
                  </div>
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-primary-600" />
                    <span className="text-sm">{evento.lugar}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías de Eventos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Categorías de Eventos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                {/* Imagen de la categoría */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={imagenesEventos[index]}
                    alt={categoria.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {categoria.icon}
                  </div>
                </div>
                <div className={`bg-gradient-to-r ${categoria.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {categoria.title}
                  </h3>
                  <p className="text-center text-sm opacity-90">
                    {categoria.descripcion}
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {categoria.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendario */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calendario Mensual</h2>
            <p className="text-gray-600">
              [Aquí se puede integrar un calendario interactivo con todos los eventos del mes]
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-12 text-center">
            <Calendar className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Calendario próximamente disponible
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">No te pierdas ningún evento</h2>
          <p className="text-xl mb-6 text-primary-100">
            Suscríbete para recibir notificaciones de nuestros eventos
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Suscribirme
          </button>
        </div>
      </section>
    </div>
  );
}
