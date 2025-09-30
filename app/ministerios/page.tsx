import { Users, BookOpen, Music, Heart, HandHeart, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Ministerios() {
  const imagenesMinisterios = [
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80", // El Cuerpo
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80", // La Palabra
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80", // La Adoración
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80", // La Oración
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"  // La Necesidad
  ];
  const ministerios = [
    {
      title: "El Cuerpo",
      subtitle: "Grupos y Reuniones",
      icon: <Users className="h-12 w-12" />,
      descripcion: "Comunidad y compañerismo a través de grupos pequeños y reuniones.",
      areas: [
        "Reunión de Adolescentes",
        "Reunión de Jóvenes +18",
        "Reunión de Hombres",
        "Reunión de Mujeres",
        "Reunión de Chicas",
        "Reunión de Matrimonios"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      title: "La Palabra",
      subtitle: "Estudio y Discipulado",
      icon: <BookOpen className="h-12 w-12" />,
      descripcion: "Crecimiento espiritual a través del estudio bíblico y el discipulado.",
      areas: [
        "Escuela dominical",
        "Estudios bíblicos semanales",
        "Programas de discipulado",
        "Clases de teología básica"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      title: "La Adoración",
      subtitle: "Alabanza y Música",
      icon: <Music className="h-12 w-12" />,
      descripcion: "Expresando nuestro amor a Dios a través de la música y la adoración.",
      areas: [
        "Equipo de alabanza",
        "Coro de la iglesia",
        "Escuela de música",
        "Adoración en reuniones especiales"
      ],
      color: "from-accent-300 to-primary-500"
    },
    {
      title: "La Oración",
      subtitle: "Intercesión y Comunión",
      icon: <Heart className="h-12 w-12" />,
      descripcion: "Buscando a Dios a través de la oración personal y corporativa.",
      areas: [
        "Reunión de oración semanal",
        "Cadenas de oración",
        "Intercesión pastoral",
        "Vigilias de oración"
      ],
      color: "from-primary-600 to-primary-700"
    },
    {
      title: "La Necesidad",
      subtitle: "Hospitalidad y Servicio",
      icon: <HandHeart className="h-12 w-12" />,
      descripcion: "Sirviendo a nuestra comunidad con amor y compasión.",
      areas: [
        "Ministerio de hospitalidad",
        "Servicio comunitario",
        "Ayuda a necesitados",
        "Visitación y apoyo"
      ],
      color: "from-accent-200 to-primary-400"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80"
            alt="Ministerios"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Ministerios</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Diferentes formas de servir y crecer juntos en Cristo
            </p>
          </div>
        </div>
      </section>

      {/* Ministerios Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministerios.map((ministerio, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                {/* Imagen del ministerio */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={imagenesMinisterios[index]}
                    alt={ministerio.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {ministerio.icon}
                  </div>
                </div>
                <div className={`bg-gradient-to-r ${ministerio.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold text-center mb-2">{ministerio.title}</h3>
                  <p className="text-center text-sm opacity-90">{ministerio.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {ministerio.descripcion}
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-3">Áreas de ministerio:</h4>
                  <ul className="space-y-2">
                    {ministerio.areas.map((area, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        <span className="text-sm">{area}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={
                      index === 0 ? "/ministerios/el-cuerpo" :
                      index === 1 ? "/ministerios/la-palabra" :
                      index === 2 ? "/ministerios/la-adoracion" :
                      index === 3 ? "/ministerios/la-oracion" :
                      "/ministerios/la-necesidad"
                    }
                    className="mt-6 w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold block text-center"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado a participar */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Quieres servir en algún ministerio?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Cada creyente tiene dones que Dios le ha dado para edificar su iglesia.
            Si te sientes llamado a servir en alguno de estos ministerios, nos encantaría
            conversar contigo.
          </p>
          <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cómo participar
            </h3>
            <ul className="text-left max-w-2xl mx-auto space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">1.</span>
                <span>Ora y busca la dirección de Dios sobre dónde Él quiere que sirvas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">2.</span>
                <span>Habla con los líderes del ministerio que te interesa</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">3.</span>
                <span>Participa en las reuniones y actividades del ministerio</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">4.</span>
                <span>Comprométete a servir con fidelidad y amor</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes preguntas?</h2>
          <p className="text-xl mb-6 text-primary-100">
            Contáctanos para más información sobre nuestros ministerios
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
}
