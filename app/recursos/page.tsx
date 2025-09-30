import { Download, BookMarked, GraduationCap, Radio, Library } from "lucide-react";
import Image from "next/image";

export default function Recursos() {
  const imagenesRecursos = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80"
  ];
  
  const categorias = [
    {
      title: "Materiales de Estudio",
      icon: <BookMarked className="h-12 w-12" />,
      descripcion: "Recursos para tu crecimiento espiritual personal",
      recursos: [
        "Guías de estudio bíblico",
        "Devocionales diarios",
        "Comentarios bíblicos",
        "Planes de lectura"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      title: "Discipulado",
      icon: <GraduationCap className="h-12 w-12" />,
      descripcion: "Herramientas para formar discípulos de Cristo",
      recursos: [
        "Cursos de discipulado",
        "Material para nuevos creyentes",
        "Guías para líderes de grupos",
        "Recursos de mentoreo"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      title: "Transmisiones",
      icon: <Radio className="h-12 w-12" />,
      descripcion: "Contenido multimedia de nuestros servicios",
      recursos: [
        "Sermones en audio",
        "Videos de cultos",
        "Transmisiones en vivo",
        "Podcast semanal"
      ],
      color: "from-accent-300 to-primary-500"
    },
    {
      title: "Librería",
      icon: <Library className="h-12 w-12" />,
      descripcion: "Colección de libros y materiales recomendados",
      recursos: [
        "Libros cristianos recomendados",
        "Biografías inspiradoras",
        "Recursos teológicos",
        "Literatura devocional"
      ],
      color: "from-primary-600 to-primary-700"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="Recursos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Download className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Recursos</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Materiales y herramientas para fortalecer tu vida espiritual
            </p>
          </div>
        </div>
      </section>

      {/* Categorías Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                {/* Imagen de la categoría */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={imagenesRecursos[index]}
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
                  <ul className="space-y-3">
                    {categoria.recursos.map((recurso, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        <span>{recurso}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                    Ver Recursos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos destacados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recursos Destacados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <Radio className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Último Sermón
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;La Fe que Transforma&rdquo; - Predicado el domingo pasado
              </p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Descargar
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <BookMarked className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Plan de Lectura
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Plan anual de lectura bíblica con reflexiones diarias
              </p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Descargar
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Curso de Discipulado
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Curso básico para nuevos creyentes en 12 lecciones
              </p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Descargar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-xl mb-6 text-primary-100">
            Contáctanos y te ayudaremos a encontrar el recurso que necesitas
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
}
